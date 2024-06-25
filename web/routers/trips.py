from fastapi import APIRouter, HTTPException, Depends, Query, Response, status
from sqlalchemy.orm import Session
from typing import List
from ..data_models import Trip, NewTrip
from shared.database import get_db
from shared.base_models import Trip as SQLTrip, User
from ..utils.id_generators import generator

router = APIRouter(
    prefix="/trips",
)


@router.get("/", response_model=List[Trip])
async def get_trips(db: Session = Depends(get_db)):
    trips = db.query(SQLTrip).all()
    return [Trip.from_orm(trip, db) for trip in trips]


@router.post("/", response_model=int)
async def create_trip(new_trip: NewTrip, db: Session = Depends(get_db)):
    trip_id = generator(SQLTrip)
    driver = db.query(User).get(new_trip.driver_id)
    if not driver:
        raise HTTPException(status_code=404, detail="Driver not found")

    sql_trip = new_trip.to_full().to_orm()

    db.add(sql_trip)
    db.commit()
    db.refresh(sql_trip)
    return sql_trip.id


@router.get("/{id}", response_model=Trip)
async def get_trip(_id: int, db: Session = Depends(get_db)):
    trip: SQLTrip = db.query(SQLTrip).filter(SQLTrip.id == _id).first()
    if trip is None:
        raise HTTPException(status_code=404, detail="Trip not found")
    return Trip.from_orm(trip, db)


@router.delete("/{id}", response_model=List[int])
async def delete_trip(_id: int, db: Session = Depends(get_db), is_canceled: bool = True):
    trip = db.query(SQLTrip).filter(SQLTrip.id == _id).first()
    if trip is None:
        raise HTTPException(status_code=404, detail="Trip not found")
    db.delete(trip)
    db.commit()
    return [trip.id]


@router.put("/{id}/driver")
async def update_trip(_id: int, trip: Trip, driver_id: int = 0, db: Session = Depends(get_db)):
    db_trip = db.query(SQLTrip).filter(SQLTrip.id == _id).first()
    if db_trip.driver_id != driver_id:
        raise HTTPException(status_code=403, detail="No access to change anther's trips")
    input_trip = trip.to_orm()
    if db_trip is None:
        raise HTTPException(status_code=404, detail="Trip not found")
    # todo: check if it work correctly
    for key, value in vars(input_trip):
        setattr(db_trip, key, value)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@router.put("/{id}/rider")
async def attach_rider(
        _id: int,
        rider_id: int = Query(..., alias="riderID"),
        db: Session = Depends(get_db)
):
    db_trip = db.query(SQLTrip).filter(SQLTrip.id == _id).first()
    if db_trip is None:
        raise HTTPException(status_code=404, detail="Trip not found")

    if db_trip.passengers:
        passengers = map(lambda s: s.trim, db_trip.passengers.split())
    else:
        passengers = []

    if str(rider_id) not in passengers:
        passengers.append(str(rider_id))
        db_trip.passengers = ' '.join(passengers)
        db.commit()

    return Response, status

from aiogram import types

from shared.base_models import SubmissionQueue, Trip, TripPassenger
from shared.database import get_db
from telegram.bot_init import dp, bot


@dp.callback_query()
async def process_callback(callback_query: types.CallbackQuery):
    await bot.answer_callback_query(callback_query.id)
    data = callback_query.data.split()
    db = next(get_db())
    match data[0]:
        case "approve":
            awaiter_id = int(data[2])
            node = db.query(SubmissionQueue).filter(SubmissionQueue.id == awaiter_id).first()
            if data[1] == "0":
                await drop_rider(node, callback_query, db)
            else:
                await attach_rider(node, callback_query, db)
        case _:
            await bot.edit_message_text(message_id=callback_query.message.message_id,
                                        chat_id=callback_query.from_user.id,
                                        text="Something went wrong")


async def attach_rider(rider: SubmissionQueue, callback_query, db):
    trip = db.query(Trip).get(rider.trip_id)
    passengers = trip.passenger_ids.split() if trip.passenger_ids else []
    if str(rider.user_id) not in passengers:
        passengers.append(str(rider.user_id))
        trip.passenger_ids = ' '.join(passengers)
    else:
        await bot.edit_message_text(message_id=callback_query.message.message_id,
                                    chat_id=callback_query.from_user.id,
                                    text="Bad request. Rider already attached to the ride")

    trip_rider_attrs = {
        attr: value for attr, value in vars(rider).items() if
        not attr.startswith('_') and attr != 'metadata'
    }
    trip_rider_attrs.pop('id')
    db.add(TripPassenger(**trip_rider_attrs))
    await bot.send_message(chat_id=rider.user_id,
                           text=f"""Вы приняты в поездку из {trip.start_location} в {trip.end_location}. 
                                    \n {trip.departure_date} во временном промежутке {trip.departure_time}""")
    await bot.edit_message_text(message_id=callback_query.message.message_id,
                                chat_id=callback_query.from_user.id,
                                text="Успешно!")
    db.delete(rider)
    db.commit()


async def drop_rider(rider: SubmissionQueue, callback_query, db):
    trip = db.query(Trip).get(rider.trip_id)
    await bot.send_message(chat_id=rider.user_id,
                           text=f"""Вам отказано в поездке из {trip.start_location} в {trip.end_location}. 
                                    \n {trip.departure_date} во временном промежутке {trip.departure_time}""")
    await bot.edit_message_text(message_id=callback_query.message.message_id,
                                chat_id=callback_query.from_user.id,
                                text="Успешно!")
    db.delete(rider)
    db.commit()
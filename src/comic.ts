import moment from "moment";

interface Comic {
    month: string;
    year: string;
    day: string;
    num: number;
    link: string;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
}

async function fetchComic() {
    const email: URLSearchParams = new URLSearchParams();
    email.append('email', 'i.lobazov@innopolis.university');
    const response: Response = await fetch('https://fwd.innopolis.university/api/hw2?' + email);
    const id: URLSearchParams = new URLSearchParams;
    id.append('id', await response.json());
    const comicResponse: Response = await fetch('https://fwd.innopolis.university/api/comic?' + id);
    const comic: Comic = await comicResponse.json();

    const comicTitle: HTMLElement = document.getElementById('comic-title') as HTMLElement;
    const comicImage: HTMLImageElement = document.getElementById('comic-image') as HTMLImageElement;
    const comicAlt: HTMLElement = document.getElementById('comic-alt') as HTMLElement;
    const comicDate: HTMLElement = document.getElementById('comic-date') as HTMLElement;

    comicTitle.textContent = comic.safe_title;
    comicImage.src = comic.img;
    comicImage.alt = comic.alt;
    comicAlt.textContent = comic.alt;

    const date: Date = new Date(parseInt(comic.year), parseInt(comic.month), parseInt(comic.day));
    let from_now: string = moment(date).fromNow();
    comicDate.textContent = `Published ${from_now}`;
}

fetchComic();
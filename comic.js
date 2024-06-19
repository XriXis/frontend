async function fetchComic() {
    const email = new URLSearchParams();
    email.append('email', 'i.lobazov@innopolis.university');
    const response = await fetch('https://fwd.innopolis.university/api/hw2?' + email);
    const id = new URLSearchParams;
    id.append('id', await response.json());
    const comicResponse = await fetch('https://fwd.innopolis.university/api/comic?' + id);
    const comic = await comicResponse.json();

    const comicTitle = document.getElementById('comic-title');
    const comicImage = document.getElementById('comic-image');
    const comicAlt = document.getElementById('comic-alt');
    const comicDate = document.getElementById('comic-date');

    comicTitle.textContent = comic.safe_title;
    comicImage.src = comic.img;
    comicImage.alt = comic.alt;
    comicAlt.textContent = comic.alt;

    const date = new Date(comic.year, comic.month, comic.day);
    comicDate.textContent = `Published on: ${date.toLocaleDateString()}`;
}

fetchComic();
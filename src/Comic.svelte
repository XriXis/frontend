<script lang="ts">
    import { onMount } from "svelte";
    import moment from "moment";
    import type {Comic} from "./lib/ComicType";

    let comic: Comic | null = null;
    let publishedDate: string = "";

    async function fetchComic() {
        const email: URLSearchParams = new URLSearchParams();
        email.append('email', 'i.lobazov@innopolis.university');
        const response: Response = await fetch('https://fwd.innopolis.university/api/hw2?' + email);
        const id: URLSearchParams = new URLSearchParams;
        id.append('id', await response.json());
        const comicResponse: Response = await fetch('https://fwd.innopolis.university/api/comic?' + id);
        comic = await comicResponse.json() as Comic;

        const date: Date = new Date(parseInt(comic.year), parseInt(comic.month) - 1, parseInt(comic.day));
        publishedDate = moment(date).fromNow();
    }

    onMount(() => {
        fetchComic();
    });
</script>

<div id="container">
    {#if comic}
        <div id="comic">
            <h2>{comic.safe_title}</h2>
            <img src={comic.img} alt={comic.alt}/>
            <p id="comic-date">Published {publishedDate}</p>
            <p id="comic-alt">{comic.alt}</p>
        </div>
    {/if}
</div>

<style>
    #container {
        padding: 0 2.5em 2.5em 0;
        position: relative;
        max-width: 100vw;
        min-width: 20vw;
        margin: auto;
    }

    #comic {
        text-align: center;
        margin-top: 0;
        display: grid;
        align-content: start;
        align-items: center;
        grid-template-columns: auto;
    }

    h2 {
        font-size: 1.5em;
        margin-top: 0;
        margin-bottom: .75rem;
        text-align: center;
    }

    img {
        width: 100%;
        height: auto;

        margin-top: .75rem;
    }

    p {
        font-size: .9em;
        text-align: center;
        margin: .1em 0;
    }

    #comic-date {
        font-size: .5em;
        margin: 0 0;
        padding: 0 0;
        text-align: right;
        color: #4978ab;
        font-style: italic;
        text-decoration: none;
    }
</style>

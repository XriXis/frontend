<script lang="ts">
    import type { Comic } from '$lib/ComicType';

    export let data: { comic: Comic, publishedDate: string };

    const comic = data.comic;
    const publishedDate = data.publishedDate;
</script>
<svelte:head>
    <title>Comic fetcher</title>
    <meta name="description"
          content="Homework on 2nd week of front-end course" />
</svelte:head>
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

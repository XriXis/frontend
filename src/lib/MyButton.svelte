<script lang="ts">
    export let href: string;
    export let src: string;
    export let date: string | null = null;
    export let title: string;
    export let description: string | null = null;

</script>

<div>
    <button on:click={()=>{window.open(href)}}>
        <img src={src} alt="logo" class="press-kit-icon"/>
        {title}
    </button>
    {#if date}
        <h6>{date}</h6>
    {/if}
    {#if description}
        <h4>{description}</h4>
    {/if}
</div>

<style>
    div {
        height: 1em;
    }

    button {
        font-size: 1em;
        text-align: left;
        margin: 0 0;
        padding: 0 0;
    }

    h4 {
        font-size: .45em;
        text-align: left;
        margin: 0 0;
        padding: 0 0;
    }

    h6 {
        font-size: .1em;
        margin: 0 0;
        padding: 0 0;
        text-align: right;
        color: #4978ab;
        font-style: italic;
        text-decoration: none;
    }

    button {
        height: 1.5em;
        width: 10rem;
        margin-top: 1em;
        text-align: center;
        display: flex;
        border-style: none;
        border-radius: .5em;
        padding-top: .2em;
        background-color: #2b456b;
        color: rgb(197, 197, 197);
    }

    button:hover {
        background-color: #1e1252;
    }

    .press-kit-icon {
        width: .8em;
        height: .8em;
        padding-left: .3em;
        padding-right: .3rem;
        padding-top: .1em;
    }
</style>
<script lang="ts">
    import {onMount} from "svelte";

    export let href: string;
    export let label: string;

    let currentUrl: URL;
    let refUrl: URL;
    let btnClr: string;

    onMount(() => {
        currentUrl = new URL(window.location.href);
        refUrl = new URL(href, window.location.origin);
        btnClr = currentUrl.pathname === refUrl.pathname ? '#4978ab' : '#2f5d91';
    });
</script>

<button on:click={() => { window.location.href = href; }} style="background-color: {btnClr};">{label}</button>

<style>
    button {
        text-decoration: none;
        color: white;
        border: none;
        cursor: pointer;
        display: inline;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    button:hover {
        background-color: #4978ab;
    }
</style>

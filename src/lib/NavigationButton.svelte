<script lang="ts">
    export let href: string;
    export let label: string;

    let currentUrl = new URL(window.location.href);
    let refUrl = new URL(href, window.location.origin);
    let btnClr = currentUrl.pathname === refUrl.pathname ? "#4978ab" : "#2f5d88";
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

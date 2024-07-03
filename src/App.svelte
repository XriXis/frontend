<script lang="ts">
    import Router from 'svelte-spa-router';
    import Header from './Header.svelte';
    import About from './About.svelte';
    import Projects from './Projects.svelte';
    import Contacts from './Contacts.svelte';
    import Footer from './Footer.svelte';
    import Comic from './Comic.svelte';
    import type {ComponentType, } from "svelte";

    const routes: { [key: string]: ComponentType } = {
        '/': About,
        '/projects': Projects,
        '/contacts': Contacts,
        '/comic': Comic
    };
</script>

<div id="page-container">
    <Header/>
    <div id="content-wrap">
        <Router {routes}/>
    </div>
    <Footer/>
</div>

<style>
    #page-container {
        position: relative;
        min-height: 40vh;
        margin: 0;
        justify-content: center;
    }

    #content-wrap {
        padding-bottom: 2.5rem;
        margin: 1rem 25%;
        justify-content: center;
    }
</style>

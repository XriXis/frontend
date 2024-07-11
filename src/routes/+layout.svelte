<script>
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import "../app.css";
    import favicon from "../assets/images/favicon.png"
</script>
<svelte:head>
    <link rel="icon" href={favicon} type="image/png" />
    <meta name="author" content="XriXis">
</svelte:head>
<div id="page-container">
    <Header/>
    <div id="content-wrap">
        <slot></slot>
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

<script>
    import {Router, Route} from 'svelte-routing';
    import Header from './Header.svelte';
    import About from './About.svelte';
    import Projects from './Projects.svelte';
    import Contacts from './Contacts.svelte';
    import Footer from "./Footer.svelte";
    import Comic from "./Comic.svelte";
</script>


<div id="page-container">
    <Header/>
    <div id="content-wrap">
        <Router>
            <Route path="/" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/comic" component={Comic}/>
        </Router>
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

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
            <Route path="/frontend/" component={About}/>
            <Route path="/frontend/projects" component={Projects}/>
            <Route path="/frontend/contacts" component={Contacts}/>
            <Route path="/frontend/comic" component={Comic}/>
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

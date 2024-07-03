<script>
    import NavigationButton from "./lib/NavigationButton.svelte";
</script>

<header>
    <nav>
        <ul>
            <li>
                <NavigationButton label="About" ref="/"/>
            </li>
            <li>
                <NavigationButton label="Projects" ref="/projects"/>
            </li>
            <li>
                <NavigationButton label="Contacts" ref="/contacts"/>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        background-color: #302f88;
        color: white;
        text-align: center;
    }

    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        height: 2.5em;
    }

    nav ul li {
        margin: 0 0;
        flex: 1;
        justify-content: center;
    }

</style>

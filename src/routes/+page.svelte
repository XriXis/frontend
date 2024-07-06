<script>
</script>
<svelte:head>
    <title>About</title>
</svelte:head>
<div id="about" class="section">
    <div class="profile-container">
        <img src="../assets/images/myself.jpg" alt="Profile Photo" class="myself"/>
        <h1>Ivan Lobazov</h1>
    </div>
    <p>Innopolis university student.<br/>Developer on beginner step.</p>
    <ul class="data-list">
        <li>&#128205; Innopolis, Russia</li>
        <li>&#128337; GMT+3</li>
    </ul>
</div>

<style>
    #about {
        justify-content: center;
    }

    .profile-container {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .myself {
        width: 5em;
        height: 5em;
        border-radius: 50%;
        object-fit: cover;
        display: block;
    }

    .data-list {
        list-style: none;
        padding: 0;
        text-align: right;
        font-size: 0.5em;
    }

    .data-list li {
        margin: 0.5em 0;
    }
</style>

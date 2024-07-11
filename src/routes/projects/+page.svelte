<script>
    import ProjectButton from "$lib/MyButton.svelte";
    import favicon from "../../assets/images/favicon.png"
    import githubLogo from "../../assets/images/github-mark-white.png"
    import gitlabLogo from "../../assets/images/gitlab-logo.png"
</script>
<h2>Here you can find what i did</h2>
<svelte:head>
    <title>Projects</title>
    <meta name="description" content="Tab with links on my projects" />
</svelte:head>
<div>
    <ProjectButton title="Comic viewer"
                   description="Frontend course homework"
                   date="July 2024"
                   href="comic"
                   src={favicon}>
    </ProjectButton>
    <ProjectButton title="BRLover"
                   description="Discord bot for dead game, asked by enthusiasts"
                   date="May 2022"
                   href="https://github.com/XriXis/BRLover_PythonDiscordBot"
                   src={githubLogo}>
    </ProjectButton>
    <ProjectButton title="This"
                   description="My portfolio, temporary showed here"
                   date="June 2024"
                   href="https://github.com/XriXis/frontend"
                   src={githubLogo}>
    </ProjectButton>
    <ProjectButton title="On the way"
                   description="Telegram web-app for finding companions in ride"
                   date="Aug 2024"
                   href="comic.html"
                   src={gitlabLogo}>
    </ProjectButton>

</div>
<style>
    h2 {
        text-align: center;
    }

    div {
        display: grid;
        grid-template-columns: repeat(2, 0.2fr);
        gap: 1.5em;
        grid-auto-rows: minmax(2rem, auto);
        justify-content: center;
    }
</style>
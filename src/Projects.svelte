<script>
    import ProjectButton from "./lib/MyButton.svelte";
</script>

Here you can find what i did

<div id="projects-loyaut">
    <ProjectButton title="Comic viewer"
                   description="Frontend course homework"
                   date="July 2024"
                   href="comic"
                   src="frontend/images/betterIcon.ico">
    </ProjectButton>
    <ProjectButton title="BRLover"
                   description="Discord bot for dead game, asked by enthusiasts"
                   date="May 2022"
                   href="https://github.com/XriXis/BRLover_PythonDiscordBot"
                   src="frontend/images/github-mark-white.png">
    </ProjectButton>
    <ProjectButton title="This"
                   description="My portfolio, temporary showed here"
                   date="June 2024"
                   href="https://github.com/XriXis/frontend"
                   src="frontend/images/github-mark-white.png">
    </ProjectButton>
    <ProjectButton title="On the way"
                   description="Telegram web-app for finding companions in ride"
                   date="Aug 2024"
                   href="comic.html"
                   src="frontend/images/gitlab-logo.png">
    </ProjectButton>

</div>

<style>
    div {
        display: grid;
        grid-template-columns: repeat(2, 0.2fr);
        gap: 1.5em;
        grid-auto-rows: minmax(2rem, auto);
        justify-content: center;
    }
</style>
<script>
    import MyButton from "$lib/MyButton.svelte";
    import EmailLogo from "../../assets/images/gmailLogo.png";
    import TgLogo from "../../assets/images/tgLogo.png";
    import GitLogo from "../../assets/images/github-mark-white.png";
    import DiscordLogo from "../../assets/images/discord-mark-white.png";
</script>
<svelte:head>
    <title>Contact me</title>
    <meta name="description"
          content="Tab with links on my contacts. Not all, but essential social networks where I registered" />
</svelte:head>
<h2>Me on...</h2>
<div>
    <MyButton href="mailto:xzsaythjpf@gmail.com"
              src={EmailLogo}
              title="Mail">
    </MyButton>
    <MyButton href="https://github.com/XriXis"
              src={GitLogo}
              title=GitHub>
    </MyButton>
    <MyButton href="https://discord.com/users/336106963568033793"
              src={DiscordLogo}
              title=Discord>
    </MyButton>
    <MyButton href="https://t.me/xrixis"
              src={TgLogo}
              title=Telegram>
    </MyButton>
</div>
<style>
    h2 {
        text-align: center;
    }

    div {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(2, 0.2fr);
        gap: 10px;
        grid-auto-rows: minmax(2rem, auto);
        justify-content: center;
        height: 2.5em;
    }
</style>
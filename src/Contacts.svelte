<script>
    import MyButton from "./lib/MyButton.svelte";
</script>

<h2>Me on...</h2>
<div>
    <MyButton href="mailto:xzsaythjpf@gmail.com"
              src="images/gmailLogo.png"
              title="Mail">
    </MyButton>
    <MyButton href="https://github.com/XriXis"
              src="images/github-mark-white.png"
              title=GitHub>
    </MyButton>
    <MyButton href="https://discord.com/users/336106963568033793"
              src="images/discord-mark-white.png"
              title=Discord>
    </MyButton>
    <MyButton href="https://t.me/xrixis"
              src="images/tgLogo.png"
              title=Telegram>
    </MyButton>
</div>
<style>
    h2{
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
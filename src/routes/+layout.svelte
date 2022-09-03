<!-- <div class="app-container"> -->
<h1 class="title gray-background padded">In Loving Memory of Molly Wall</h1>
<slot />

<!-- </div> -->
<style>
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Playfair+Display:wght@400;700&family=Roboto:wght@400;700&display=swap");

  :global(html),
  :global(body) {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  :global(#app) {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .gray-background {
    background: lightgray;
  }

  .padded {
    padding: 1em 0;
    margin: 0;
  }

  .title {
    width: 100%;
    text-align: center;
    font-family: "Dancing Script", cursive;
  }
</style>

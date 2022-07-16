<script lang="ts">
  import ImageCarousel from "$lib/ImageCarousel.svelte";
  import { SLIDES } from "$lib/slides";

  const slides = SLIDES;
  let currentSlide = 0;
</script>

<div class="carousel-container">
  <ImageCarousel {slides} bind:currentSlide />
</div>
<div class="description-container gray-background padded">
  <h2 class="headline">
    {slides[currentSlide].headline}
  </h2>
  <div class="date">{slides[currentSlide].date}</div>
  <p class="description">
    {slides[currentSlide].description}
  </p>
</div>

<style>
  .carousel-container {
    height: 100%;
    width: 100%;
  }

  .padded {
    padding: 1em 0;
    margin: 0;
  }

  .date {
    font-family: "Dancing Script", cursive;
  }

  .date,
  .headline,
  .description {
    text-align: center;
  }

  .description {
    font-family: "Roboto", sans-serif;
  }

  .description-container {
    width: 100%;
  }

  .gray-background {
    background: lightgray;
  }

  .headline {
    font-family: "Playfair Display", serif;
  }
</style>

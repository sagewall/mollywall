<script lang="ts">
  export let slides: Slide[];
  export let currentSlide = 0;

  const onPreviousClick = () => {
    const previous = currentSlide - 1;
    currentSlide = previous < 0 ? slides.length - 1 : previous;
  };

  const onNextClick = () => {
    const next = currentSlide + 1;
    currentSlide = next === slides.length ? 0 : next;
  };
</script>

<div class="carousel">
  {#each [slides[currentSlide]] as item (currentSlide)}
    <img src={item.src} alt={item.description} class="slide" />
  {/each}

  <button aria-label="Previous Photograph" class="control prev" on:click={() => onPreviousClick()}>
    <span class="arrow left" />
  </button>
  <button aria-label="Next Photograph" class="control next" on:click={() => onNextClick()}>
    <span class="arrow right" />
  </button>

  <div class="position-container">
    {#each slides as slide, i (slide.id)}
      <div class="position" class:selected={i === currentSlide} />
    {/each}
  </div>
</div>

<style>
  .carousel {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);
    background-color: black;
  }

  .control {
    height: 100%;
    border: none;
    background-color: transparent;
    outline: 0;
    position: absolute;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5em;
    color: white;
    font-weight: bold;
    font-size: 3em;
    user-select: none;
    opacity: 0.8;
    transition: opacity 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);
  }

  .control:hover,
  .control:focus {
    opacity: 1;
  }

  .control.next {
    right: 0;
  }

  .control.prev {
    left: 0;
  }

  .arrow {
    display: block;
    border-left: 0.1em solid white;
    border-bottom: 0.1em solid white;
    width: 0.5em;
    height: 0.5em;
  }

  .arrow.left {
    transform: rotate(45deg);
  }

  .arrow.right {
    transform: rotate(225deg);
  }

  .position-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    padding: 0.5em;
    font-weight: bold;
    user-select: none;
    bottom: 0;
    width: 100%;
  }

  .position {
    background: gray;
    height: 0.5em;
    width: 0.5em;
    border-radius: 1em;
  }
  .selected {
    background: white;
  }
</style>

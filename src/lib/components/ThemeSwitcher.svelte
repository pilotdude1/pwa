<script lang="ts">
  import { onMount } from "svelte"
  import { themeChange } from "theme-change"

  const themes = ["svelteship", "light", "dark", "bumblebee", "corporate"]

  let currentTheme = "svelteship"
  let detailsElement: HTMLDetailsElement | null = null

  function handleClickOutside(event: MouseEvent) {
    if (detailsElement && !detailsElement.contains(event.target as Node)) {
      detailsElement.open = false
    }
  }

  function handleThemeSelect(theme: string) {
    currentTheme = theme
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
    if (detailsElement) {
      detailsElement.open = false
    }
  }

  onMount(() => {
    // Get current theme from localStorage or use default
    const savedTheme = localStorage.getItem("theme") || "svelteship"
    if (themes.includes(savedTheme)) {
      currentTheme = savedTheme
      document.documentElement.setAttribute("data-theme", savedTheme)
    }

    // Add click outside listener
    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  })
</script>

<details class="dropdown relative" bind:this={detailsElement}>
  <summary class="btn m-1 flex items-center gap-2">
    Theme
    <svg
      width="12px"
      height="12px"
      class="h-2 w-2 fill-current opacity-60 inline-block"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048"
    >
      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
    </svg>
  </summary>

  <ul
    class="absolute left-0 z-10 mt-2 p-2 shadow-lg menu bg-base-200 rounded-box w-52 min-w-full"
  >
    {#each themes as theme}
      <li>
        <button
          class="theme-controller capitalize w-full text-left px-4 py-2 {currentTheme ===
          theme
            ? 'active'
            : ''}"
          data-set-theme={theme}
          data-act-class="active"
          on:click={() => handleThemeSelect(theme)}
        >
          {theme}
        </button>
      </li>
    {/each}
  </ul>
</details>

<style>
  /* Remove default details marker */
  details > summary {
    list-style: none;
  }
  details > summary::-webkit-details-marker {
    display: none;
  }

  /* Add some basic animations */
  details[open] > summary + * {
    animation: slide-in 0.2s ease-out;
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

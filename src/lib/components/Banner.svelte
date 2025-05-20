<script lang="ts">
  import { fade } from "svelte/transition"
</script>

<div
  class="bg-base-200 text-base-content py-2 px-4 text-center"
  transition:fade
>
  <div class="flex items-center justify-center gap-4">
    <p class="text-sm font-medium">
      This is a demo site. All data shown is for demonstration purposes only and
      test data.
    </p>
    <a
      href="https://svelteship.com"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-sm btn-primary"
    >
      Purchase SvelteShip Boilerplate
    </a>
  </div>
</div>

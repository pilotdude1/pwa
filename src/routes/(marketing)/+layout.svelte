<script lang="ts">
  import "../../app.css"
  import NavBar from "$lib/components/NavBar.svelte"
  import Footer from "$lib/components/Footer.svelte"

  export const children: import("svelte").Snippet = undefined
  let isEurope = false
  try {
    isEurope = Intl.DateTimeFormat()
      .resolvedOptions()
      .timeZone.startsWith("Europe/")
  } catch (e) {
    /* continue */
  }
</script>

<div
  class="relative border-2 border-dashed border-primary/50 rounded-lg p-4 m-4"
>
  <div
    class="absolute -top-3 left-4 bg-base-100 px-2 text-sm font-medium text-primary"
  >
    NavBar Component
  </div>
  <NavBar />
</div>

<slot />

<div
  class="relative border-2 border-dashed border-primary/50 rounded-lg p-4 m-4"
>
  <div
    class="absolute -top-3 left-4 bg-base-100 px-2 text-sm font-medium text-primary"
  >
    Footer Component
  </div>
  <Footer />
</div>

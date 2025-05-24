<script>
  import { goto } from "$app/navigation"
  import { onMount } from "svelte"

  onMount(() => {
    goto("/dashboard")
  })
</script>

<div class="flex items-center justify-center min-h-screen">
  <div class="loading loading-spinner loading-lg"></div>
</div>

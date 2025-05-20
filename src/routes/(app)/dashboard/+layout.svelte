<script lang="ts">
  import { invalidate } from "$app/navigation"
  import { onMount } from "svelte"

  export let data
  export let children

  let { supabase, session } = data

  onMount(() => {
    const savedTheme = localStorage.getItem("theme") || "svelteship"
    document.documentElement.setAttribute("data-theme", savedTheme)
    const { data } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth")
      }
    })

    return () => data.subscription.unsubscribe()
  })
</script>

<slot />

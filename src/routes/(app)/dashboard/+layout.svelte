<script lang="ts">
  import { onMount } from "svelte"
  import { goto } from "$app/navigation"
  import { page } from "$app/stores"
  import { browser } from "$app/environment"

  export const children = undefined

  export let data
  let { supabase } = data

  onMount(() => {
    // Set theme
    const savedTheme = localStorage.getItem("theme") || "svelteship"
    document.documentElement.setAttribute("data-theme", savedTheme)

    // Check authentication and set up listeners
    const setupAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) {
        goto("/auth/sign_in")
        return
      }

      const { data: authData } = await supabase.auth.onAuthStateChange(
        async (event) => {
          if (event === "SIGNED_OUT") {
            goto("/auth/sign_in")
          } else if (event === "SIGNED_IN") {
            const {
              data: { user },
            } = await supabase.auth.getUser()
            if (!user) {
              goto("/auth/sign_in")
            }
          }
        },
      )

      return () => {
        authData?.subscription.unsubscribe()
      }
    }

    const cleanup = setupAuth()
    return () => {
      cleanup.then((cleanupFn) => cleanupFn?.())
    }
  })
</script>

<slot />

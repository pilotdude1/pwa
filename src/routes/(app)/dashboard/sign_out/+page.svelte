<script lang="ts">
  import { goto } from "$app/navigation"
  import { SyncLoader } from "svelte-loading-spinners"
  import { onMount } from "svelte"

  export let data
  let { supabase } = data
  let message = ""
  let isSigningOut = true

  onMount(async () => {
    try {
      // First verify the user is authenticated
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) {
        goto("/auth/sign_in")
        return
      }

      // Then sign out
      const { error } = await supabase.auth.signOut()
      if (error) throw error

      // Clear any local storage items
      localStorage.removeItem("theme")

      // Redirect to sign in page
      goto("/auth/sign_in")
    } catch (error) {
      message = error.message
      isSigningOut = false
    }
  })
</script>

<div class="flex flex-col items-center justify-center gap-4 min-h-screen">
  {#if isSigningOut}
    <h1 class="text-2xl font-bold">Signing Out</h1>
    <SyncLoader color="#FF4000" />
    <p class="text-base-content/70">Please wait while we sign you out...</p>
  {:else if message}
    <div class="alert alert-error">
      <span>{message}</span>
    </div>
    <button class="btn btn-primary" on:click={() => goto("/auth/sign_in")}>
      Return to Sign In
    </button>
  {/if}
</div>

<script context="module">
  export const ssr = false
</script>

<script lang="ts">
  import { goto } from "$app/navigation"
  import { SyncLoader } from "svelte-loading-spinners"

  export let data
  let { supabase } = data
  let message = ""

  async function handleSignOut() {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      goto("/")
    } catch (error) {
      message = error.message
    }
  }
</script>

<div class="flex flex-col items-center justify-center gap-4">
  <h1 class="text-2xl font-bold">Signing Out</h1>
  <SyncLoader color="#FF4000" />
  <p class="text-base-content/70">Please wait while we sign you out...</p>
  {#if message}
    <div class="alert alert-error">
      <span>{message}</span>
    </div>
  {/if}
</div>

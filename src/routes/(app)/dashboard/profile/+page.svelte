<script lang="ts">
  import { onMount } from "svelte"
  import type { Database } from "$lib/sql/DatabaseDefinitions"
  import { getProfile, updateProfile } from "$lib/db/operations"

  export let data

  let { supabase, session } = data
  let profile: Database["public"]["Tables"]["profiles"]["Row"] | null = null
  let loading = true
  let error: string | null = null

  let formData = {
    full_name: "",
    company_name: "",
    website: "",
  }

  onMount(async () => {
    try {
      if (session?.user) {
        profile = await getProfile(supabase, session.user.id)
        if (profile) {
          formData = {
            full_name: profile.full_name || "",
            company_name: profile.company_name || "",
            website: profile.website || "",
          }
        }
      }
    } catch (e: any) {
      error = e?.message || "An error occurred"
    } finally {
      loading = false
    }
  })

  async function handleSubmit() {
    try {
      loading = true
      error = null

      if (session?.user) {
        profile = await updateProfile(supabase, session.user.id, {
          full_name: formData.full_name,
          company_name: formData.company_name,
          website: formData.website,
          updated_at: new Date().toISOString(),
        })
      }
    } catch (e: any) {
      error = e?.message || "An error occurred"
    } finally {
      loading = false
    }
  }
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

<main class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Profile</h1>

  {#if loading}
    <div class="flex justify-center">
      <span class="loading loading-spinner loading-lg"></span>
    </div>
  {:else if error}
    <div class="alert alert-error">
      <span>{error}</span>
    </div>
  {:else}
    <form on:submit|preventDefault={handleSubmit} class="space-y-4">
      <div class="form-control">
        <label class="label" for="full_name">
          <span class="label-text">Full Name</span>
        </label>
        <input
          type="text"
          id="full_name"
          bind:value={formData.full_name}
          class="input input-bordered"
          placeholder="Enter your full name"
        />
      </div>

      <div class="form-control">
        <label class="label" for="company_name">
          <span class="label-text">Company Name</span>
        </label>
        <input
          type="text"
          id="company_name"
          bind:value={formData.company_name}
          class="input input-bordered"
          placeholder="Enter your company name"
        />
      </div>

      <div class="form-control">
        <label class="label" for="website">
          <span class="label-text">Website</span>
        </label>
        <input
          type="url"
          id="website"
          bind:value={formData.website}
          class="input input-bordered"
          placeholder="Enter your website"
        />
      </div>

      <button type="submit" class="btn btn-primary" disabled={loading}>
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </form>
  {/if}
</main>

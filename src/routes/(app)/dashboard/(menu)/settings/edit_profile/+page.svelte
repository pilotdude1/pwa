<script lang="ts">
  import { getContext } from "svelte"
  import { goto } from "$app/navigation"

  let adminSection = getContext("adminSection")
  adminSection.set("settings")
  export let data
  let { profile } = data

  let fullName = profile?.full_name ?? ""
  let loading = false
  let message = ""

  async function handleSubmit() {
    loading = true
    message = ""

    try {
      const { error } = await data.supabase
        .from("profiles")
        .update({ full_name: fullName })
        .eq("id", profile.id)

      if (error) throw error

      message = "Profile updated successfully!"
      setTimeout(() => {
        goto("/dashboard/settings")
      }, 1000)
    } catch (error) {
      message = error.message
    } finally {
      loading = false
    }
  }
</script>

<div class="flex flex-col gap-4">
  <div class="flex flex-col gap-2">
    <h1 class="text-2xl font-bold">Edit Profile</h1>
    <p class="text-base-content/70">Update your profile information.</p>
  </div>

  <form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-4">
    <div class="form-control w-full">
      <label class="label" for="fullName">
        <span class="label-text">Full Name</span>
      </label>
      <input
        type="text"
        id="fullName"
        bind:value={fullName}
        class="input input-bordered w-full"
        required
      />
    </div>

    {#if message}
      <div
        class="alert {message.includes('successfully')
          ? 'alert-success'
          : 'alert-error'}"
      >
        <span>{message}</span>
      </div>
    {/if}

    <div class="flex gap-2">
      <button type="submit" class="btn btn-primary" disabled={loading}>
        {loading ? "Saving..." : "Save Changes"}
      </button>
      <a href="/dashboard/settings" class="btn btn-ghost">Cancel</a>
    </div>
  </form>
</div>

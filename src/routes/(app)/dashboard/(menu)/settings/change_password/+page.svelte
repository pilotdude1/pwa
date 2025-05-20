<script lang="ts">
  import { getContext } from "svelte"
  import { goto } from "$app/navigation"

  let adminSection = getContext("adminSection")
  adminSection.set("settings")
  export let data
  let { session, supabase } = data
  let hasPassword = session?.user?.amr?.find((x) => x.method === "password")
    ? true
    : false

  let currentPassword = ""
  let newPassword = ""
  let confirmPassword = ""
  let loading = false
  let message = ""

  async function handleSubmit() {
    loading = true
    message = ""

    if (newPassword !== confirmPassword) {
      message = "New passwords do not match"
      loading = false
      return
    }

    try {
      if (hasPassword) {
        const { error } = await supabase.auth.updateUser({
          password: newPassword,
        })
        if (error) throw error
      } else {
        const { error } = await supabase.auth.updateUser({
          password: newPassword,
        })
        if (error) throw error
      }

      message = "Password updated successfully!"
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
    <h1 class="text-2xl font-bold">Change Password</h1>
    <p class="text-base-content/70">
      Update your password to keep your account secure.
    </p>
  </div>

  <form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-4">
    {#if hasPassword}
      <div class="form-control w-full">
        <label class="label" for="currentPassword">
          <span class="label-text">Current Password</span>
        </label>
        <input
          type="password"
          id="currentPassword"
          bind:value={currentPassword}
          class="input input-bordered w-full"
          required
        />
      </div>
    {/if}

    <div class="form-control w-full">
      <label class="label" for="newPassword">
        <span class="label-text">New Password</span>
      </label>
      <input
        type="password"
        id="newPassword"
        bind:value={newPassword}
        class="input input-bordered w-full"
        required
      />
    </div>

    <div class="form-control w-full">
      <label class="label" for="confirmPassword">
        <span class="label-text">Confirm New Password</span>
      </label>
      <input
        type="password"
        id="confirmPassword"
        bind:value={confirmPassword}
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
        {loading ? "Updating..." : "Update Password"}
      </button>
      <a href="/dashboard/settings" class="btn btn-ghost">Cancel</a>
    </div>
  </form>
</div>

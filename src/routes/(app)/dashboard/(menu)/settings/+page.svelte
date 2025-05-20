<script lang="ts">
  import { getContext } from "svelte"
  import { page } from "$app/stores"

  let adminSection = getContext("adminSection")
  adminSection.set("settings")
  export let data
  let { session, profile } = data
</script>

<div class="flex flex-col gap-4">
  <div class="flex flex-col gap-2">
    <h1 class="text-2xl font-bold">Settings</h1>
    <p class="text-base-content/70">
      Manage your account settings and preferences.
    </p>
  </div>

  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <h2 class="text-xl font-semibold">Profile</h2>
      <div class="flex flex-col gap-2">
        <a
          href="/dashboard/settings/edit_profile"
          class="btn btn-ghost justify-start"
        >
          Edit Profile
        </a>
        <a
          href="/dashboard/settings/change_email"
          class="btn btn-ghost justify-start"
        >
          Change Email
        </a>
        <a
          href="/dashboard/settings/change_password"
          class="btn btn-ghost justify-start"
        >
          Change Password
        </a>
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <h2 class="text-xl font-semibold">Account</h2>
      <div class="flex flex-col gap-2">
        <a
          href="/dashboard/settings/delete_account"
          class="btn btn-ghost justify-start text-error"
        >
          Delete Account
        </a>
      </div>
    </div>
  </div>
</div>

<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  import Settings from "$lib/components/Settings.svelte"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("settings")

  export let data
  let { session } = data
</script>

<svelte:head>
  <title>Change Email</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Settings</h1>

<Settings
  title="Change Email"
  editable={true}
  saveButtonTitle="Change Email"
  successTitle="Email Changed"
  successBody="Your email has been updated."
  formTarget="/dashboard/api?/changeEmail"
  fields={{
    id: "email",
    label: "New Email",
    initialValue: session?.user?.email || "",
    inputType: "email",
  }}
/>

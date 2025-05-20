<script lang="ts">
  import "../../../../app.css"
  import { writable } from "svelte/store"
  import { setContext } from "svelte"
  import Dash_NavBar from "$lib/components/Dash_NavBar.svelte"
  import Footer from "$lib/components/Footer.svelte"
  import logo from "$lib/images/logo.png"
  const adminSectionStore = writable("")
  setContext("adminSection", adminSectionStore)
  let adminSection: string
  adminSectionStore.subscribe((value) => {
    adminSection = value
  })

  function closeDrawer(): void {
    const adminDrawer = document.getElementById(
      "admin-drawer",
    ) as HTMLInputElement
    adminDrawer.checked = false
  }
</script>

<Dash_NavBar />
<div class="drawer lg:drawer-open">
  <input id="admin-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <div class="navbar bg-base-100 lg:hidden">
      <div class="flex-1 gap-2">
        <img
          width="75px"
          height="75px"
          class="rounded-md"
          src={logo}
          alt="svelteship logo"
        />
        <a class="text-primary normal-case text-xl" href="/dashboard"
          >SvelteShip</a
        >
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label for="admin-drawer" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              /></svg
            >
          </label>
        </div>
      </div>
    </div>
    <div class="container px-6 lg:px-12 py-3 lg:py-6">
      <slot />
    </div>
  </div>

  <div class="drawer-side">
    <label for="admin-drawer" class="drawer-overlay" />
    <ul
      class="menu menu-lg p-4 w-50 min-h-full bg-base-100 lg:border-r text-primary"
    >
      <li>
        <a
          href="/dashboard"
          class={adminSection === "home" ? "active" : ""}
          on:click={closeDrawer}
        >
          <svg
            class="h-7 w-7 lucide lucide-sticky-note"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path
              d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"
            /><path d="M15 3v4a2 2 0 0 0 2 2h4" /></svg
          >
          Home
        </a>
      </li>
      <li class="mt-auto">
        <a
          href="/dashboard/billing"
          class={adminSection === "billing" ? "active" : ""}
          on:click={closeDrawer}
        >
          <svg
            class="h-7 w-7 lucide lucide-receipt"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path
              d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
            /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path
              d="M12 17.5v-11"
            /></svg
          >
          Billing
        </a>
      </li>
      <li>
        <a
          href="/dashboard/settings"
          class={adminSection === "settings" ? "active" : ""}
          on:click={closeDrawer}
        >
          <svg
            class="h-7 w-7 lucide lucide-user"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle
              cx="12"
              cy="7"
              r="4"
            /></svg
          >
          Settings
        </a>
      </li>
    </ul>
  </div>
</div>
<Footer />

<script lang="ts">
  import "../app.css"
  import { navigating } from "$app/stores"
  import { expoOut } from "svelte/easing"
  import { slide } from "svelte/transition"
  import Banner from "$lib/components/Banner.svelte"
  import { onMount } from "svelte"
  import { registerSW } from "virtual:pwa-register"

  export const children: import("svelte").Snippet = undefined

  onMount(() => {
    const updateSW = registerSW({
      onNeedRefresh() {
        if (confirm("New content available. Reload?")) {
          updateSW()
        }
      },
      onOfflineReady() {
        console.log("App ready to work offline")
      },
    })
  })
</script>

<svelte:head>
  <link rel="manifest" href="/manifest.webmanifest" />
  <meta name="theme-color" content="#000000" />
  <meta
    name="description"
    content="A Progressive Web App with Supabase integration"
  />
  <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <meta name="apple-mobile-web-app-title" content="PWA App" />
</svelte:head>

<div
  class="relative border-2 border-dashed border-primary/50 rounded-lg p-4 m-4"
>
  <div
    class="absolute -top-3 left-4 bg-base-100 px-2 text-sm font-medium text-primary"
  >
    Banner Component
  </div>
  <Banner />
</div>

{#if $navigating}
  <!-- 
    Loading animation for next page since svelte doesn't show any indicator. 
     - delay 100ms because most page loads are instant, and we don't want to flash 
     - long 12s duration because we don't actually know how long it will take
     - exponential easing so fast loads (>100ms and <1s) still see enough progress,
       while slow networks see it moving for a full 12 seconds
  -->
  <div
    class="fixed w-full top-0 right-0 left-0 h-1 z-50 bg-primary"
    in:slide={{ delay: 100, duration: 12000, axis: "x", easing: expoOut }}
  ></div>
{/if}
<slot />

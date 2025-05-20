<script lang="ts">
  import Grid from "svelte-grid"
  import gridHelp from "svelte-grid/build/helper/index.mjs"

  const features = [
    {
      name: "UI Components",
      description:
        " Pre-built components, animations & sections like Navbar,Hero and Checkout Button to get you started quickly.",
      svgContent: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FB923C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-marked"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><polyline points="10 2 10 10 13 7 16 10 16 2"/></svg>`,
    },
    {
      name: "Login",
      description:
        "User Authentication, Social Logins (Google,Github & more) via Supabase Auth",
      svgContent:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FB923C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/></svg>',
    },
    {
      name: "Payments",
      description:
        "Pricing Page,One-Time Payments,Subscriptions via Stripe Payments",
      svgContent: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FB923C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>`,
    },
    {
      name: "Database",
      description:
        "A DB with profiles table, and triggers to auto-add users with Supabase",
      svgContent: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FB923C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
    },
    {
      name: "Styling",
      description:
        "Easily include your own themes,colors or dark mode with DaisyUI",
      svgContent: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FB923C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brush"><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"/></svg>`,
    },
    {
      name: "SEO",
      description:
        "Setup metatags, favicons and auto generate a sitemap.xml for SEO.",
      svgContent: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FB923C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-4"><path d="M3 3v18h18"/><path d="M13 17V9"/><path d="M18 17V5"/><path d="M8 17v-3"/></svg>`,
    },
    {
      name: "Email",
      description:
        "send/recieve emails,magic links, or  marketing emails with Mailgun",
      svgContent: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FB923C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
    },
    {
      name: "Customizability & Docs",
      description:
        "All code is customizable so you can pull only what you need with documentation to help you launch",
      svgContent: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FB923C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-component"><path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"/><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"/><path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"/><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"/></svg>`,
    },
  ]

  const id = () => "_" + Math.random().toString(36).substr(2, 9)
  function generateLayout(col) {
    return new Array(8).fill(null).map(function (item, i) {
      const y = Math.ceil(Math.random() * 4) + 1
      return {
        16: gridHelp.item({
          x: (i * 2) % col,
          y: Math.floor(i / 5) * y,
          w: 5,
          h: y,
        }),
        id: id(),
        data: features[i],
      }
    })
  }

  let cols = [[800, 16]]
  let gapX = 20
  let gapY = 20

  let items = gridHelp.adjust(generateLayout(8), 16)
</script>

<div class="demo-container mx-auto min-h-screen">
  <Grid
    gap={[gapX, gapY]}
    bind:items
    {cols}
    rowHeight={50}
    let:item
    let:dataItem
    fillSpace={false}
    fastStart={true}
  >
    <div class="demo-widget content">
      <div class="card flex">
        <div class="card-body items-center text-center">
          <div>
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- eslint-disable-next-line svelte/no-at-html-tags -->
              {@html dataItem.data.svgContent}
            </svg>
          </div>
          <h3 class="flex card-title">
            {dataItem.data.name}
          </h3>
          <span>
            {dataItem.data.description}
          </span>
        </div>
      </div>
    </div>
  </Grid>
</div>

<style>
  .demo-widget {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .demo-container {
    max-width: 1000px;
    width: 100%;
  }
</style>

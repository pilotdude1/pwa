<script lang="ts">
  import logo from "$lib/images/logo.png"
</script>

<header>
  <div
    class="hidden lg:flex navbar mx-auto px-12 items-center justify-between w-full"
  >
    <div class="navbar-start">
      <a aria-current="page" class="flex items-center gap-1" href="/">
        <img
          class="rounded-md"
          width="75px"
          height="75px"
          alt="logo"
          src={logo}
        />
        <span class="text-xl font-medium tracking-tight">SvelteShip</span>
      </a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 hidden sm:flex font-bold text-lg">
        <li class="md:mx-2">
          <a href="/dashboard" class="btn text-lg font-bold mb-1">Dashboard</a>
        </li>
        <li class="md:mx-2">
          <a href="/dashboard/sign_out" class="btn text-lg font-bold mb-1"
            >Sign Out</a
          >
        </li>
      </ul>
    </div>
  </div>
  <div class="h-px bg-gray-200 w-full"></div>
</header>

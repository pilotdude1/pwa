<script lang="ts">
  import logo from "$lib/images/logo.png"
  import svelteship from "$lib/images/svelteship.png"
  export let year = new Date().getFullYear()
</script>

<footer class="px-4 border-t bg-base-100">
  <div class="h-px bg-primary w-full"></div>
  <div class="max-w-7xl mx-auto px-8 py-16">
    <div
      class=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
    >
      <div class="w-64 shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a
          aria-current="page"
          class="flex justify-center md:justify-start items-center"
          href="/"
        >
          <img width="75px" height="75px" alt="svelteship logo" src={logo} />
          <span class="text-2xl font-medium tracking-tight">SvelteShip</span>
        </a>
        <p class="mt-4 text-md text-base-content/80">
          Ship your SvelteKit App, Set Sail!
        </p>
        <p class="mt-1">
          Copyright © <!-- -->{year}<!-- --> - All rights reserved
        </p>
      </div>
      <div
        class="grow flex flex-wrap md:pl-24 -mb-10 md:mt-0 mt-10 text-center"
      >
        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
          <div
            class="footer-title font-semibold tracking-widest text-sm md:text-left mb-3"
          >
            LINKS
          </div>
          <div
            class="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-base"
          >
            <a
              class="transition-colors hover:text-foreground/80 text-foreground/60 text-md hover:text-gray-800 dark:hover:text-gray-300"
              href="/#pricing">Pricing</a
            >
            <a
              class="transition-colors hover:text-foreground/80 text-foreground/60 text-md hover:text-gray-800 dark:hover:text-gray-300"
              href="/#features">Features</a
            >
            <a
              class="transition-colors hover:text-foreground/80 text-foreground/60 text-md hover:text-gray-800 dark:hover:text-gray-300"
              href="/#faq">FAQ</a
            >
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
          <div
            class="footer-title font-semibold tracking-widest text-sm md:text-left mb-3"
          >
            LEGAL
          </div>
          <div
            class="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-base"
          >
            <a
              class="transition-colors hover:text-foreground/80 text-foreground/60 text-md hover:text-gray-800 dark:hover:text-gray-300"
              href="/tos">Terms of Service</a
            >
            <a
              class="transition-colors hover:text-foreground/80 text-foreground/60 text-md hover:text-gray-800 dark:hover:text-gray-300"
              href="/privacy-policy">Privacy Policy</a
            >
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
          <div
            class="footer-title font-semibold tracking-widest text-sm md:text-left mb-3"
          >
            SUPPORT
          </div>
          <div
            class="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-base"
          >
            <a
              class="transition-colors hover:text-foreground/80 text-foreground/60 text-md hover:text-gray-800 dark:hover:text-gray-300"
              href="https://docs.svelteship.com">Documentation</a
            >
            <a
              href="mailto:support@svelteship.com"
              target="_blank"
              class="transition-colors hover:text-foreground/80 text-foreground/60 text-md hover:text-gray-800 dark:hover:text-gray-300"
              >Contact</a
            >
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
          <div
            class="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-base"
          >
            <a
              class="inline-block mt- text-sm border border-base-content/20 hover:border-base-content/40 hover:text-base-content/90 hover:bg-base-300 duration-200 cursor-pointer rounded text-base-content/80 px-2 py-1"
              href="/"
              ><div class="flex gap-1 items-center">
                <span>Built with</span><span
                  class="font-medium text-base-content flex gap-0.5 items-center tracking-tight"
                >
                  <img
                    alt="SvelteShip logo"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    class="w-5 h-5 group-hover:scale-110 duration-300"
                    style="color:transparent"
                    src={svelteship}
                  />SvelteShip</span
                >
              </div></a
            >
            <a
              href="https://twitter.com/adel_ljaljic"
              class=" hover:text-orange-500"
              ><span class="sr-only">Twitter</span>
              <svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6"
                ><path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

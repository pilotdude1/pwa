<script lang="ts">
  import Sparkles from "./Sparkles.svelte"
  import CheckoutButton from "./CheckoutButton.svelte"
</script>

<section id="hero" class="bg-base-100">
  <div class="hero min-h-[60vh]">
    <div class="hero-content text-center py-12">
      <div class="max-w-xl">
        <div
          class="text-4xl md:text-6xl font-bold px-2"
          style="line-height: 1.2;"
        >
          Launch Your Next
          <span
            class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >Web App</span
          >
          in
          <span
            class="underline decoration-accent decoration-4 md:decoration-[6px]"
            >Days</span
          >, Not Months
        </div>
        <div class="mt-6 md:mt-10 text-sm md:text-lg">
          <span class="text-base-content/80">
            Everything you need to build a production-ready web app:
            <span class="font-semibold">Authentication</span>,
            <span class="font-semibold">Payments</span>,
            <span class="font-semibold">Database</span>,
            <span class="font-semibold">Email</span>, and
            <span class="font-semibold">SEO</span>
            out of the box
          </span>
        </div>
        <div class="mt-6 md:mt-2">
          <Sparkles>
            <CheckoutButton
              classes="btn btn-wide btn-lg btn-outline btn-primary  px-6 mt-3 mx-2"
              >Buy Now</CheckoutButton
            >
          </Sparkles>
        </div>
      </div>
    </div>
  </div>
</section>

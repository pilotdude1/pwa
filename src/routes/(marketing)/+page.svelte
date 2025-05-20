<script lang="ts">
  import { WebsiteName } from "./../../config"
  import Hero from "$lib/components/Hero.svelte"
  import FeatureSteps from "$lib/components/FeatureSteps.svelte"
  import Testiomonials from "$lib/components/Testiomonials.svelte"
  import FAQ from "$lib/components/FAQ.svelte"
  import Hero_with_Image from "$lib/components/Hero_with_Image.svelte"
  import Newsletter from "$lib/components/Newsletter.svelte"
  import Pricing from "$lib/components/Pricing.svelte"
  import HowItWorks from "$lib/components/HowItWorks.svelte"
  import ComparisonSection from "$lib/components/ComparisonSection.svelte"
</script>

<svelte:head>
  <title>{WebsiteName}</title>
  <meta name="description" content="{WebsiteName} Home Page" />
</svelte:head>

<div
  class="relative border-2 border-dashed border-primary/50 rounded-lg p-4 m-4"
>
  <div
    class="absolute -top-3 left-4 bg-base-100 px-2 text-sm font-medium text-primary"
  >
    Hero Component
  </div>
  <Hero />
</div>

<div
  class="relative border-2 border-dashed border-primary/50 rounded-lg p-4 m-4"
>
  <div
    class="absolute -top-3 left-4 bg-base-100 px-2 text-sm font-medium text-primary"
  >
    Hero with Image Component
  </div>
  <Hero_with_Image />
</div>

<div
  class="relative border-2 border-dashed border-primary/50 rounded-lg p-4 m-4"
>
  <div
    class="absolute -top-3 left-4 bg-base-100 px-2 text-sm font-medium text-primary"
  >
    How It Works Component
  </div>
  <HowItWorks />
</div>

<div
  class="relative border-2 border-dashed border-primary/50 rounded-lg p-4 m-4"
>
  <div
    class="absolute -top-3 left-4 bg-base-100 px-2 text-sm font-medium text-primary"
  >
    Comparison Section Component
  </div>
  <ComparisonSection />
</div>

<div
  class="relative border-2 border-dashed border-primary/50 rounded-lg p-4 m-4"
>
  <div
    class="absolute -top-3 left-4 bg-base-100 px-2 text-sm font-medium text-primary"
  >
    Feature Steps Component
  </div>
  <FeatureSteps />
</div>

<div
  class="relative border-2 border-dashed border-primary/50 rounded-lg p-4 m-4"
>
  <div
    class="absolute -top-3 left-4 bg-base-100 px-2 text-sm font-medium text-primary"
  >
    Testimonials Component
  </div>
  <Testiomonials />
</div>

<div
  class="relative border-2 border-dashed border-primary/50 rounded-lg p-4 m-4"
>
  <div
    class="absolute -top-3 left-4 bg-base-100 px-2 text-sm font-medium text-primary"
  >
    Pricing Component
  </div>
  <Pricing callToAction="Get Started" highlightedPlanId="pro" />
</div>

<div
  class="relative border-2 border-dashed border-primary/50 rounded-lg p-4 m-4"
>
  <div
    class="absolute -top-3 left-4 bg-base-100 px-2 text-sm font-medium text-primary"
  >
    Newsletter Component
  </div>
  <Newsletter />
</div>

<div
  class="relative border-2 border-dashed border-primary/50 rounded-lg p-4 m-4"
>
  <div
    class="absolute -top-3 left-4 bg-base-100 px-2 text-sm font-medium text-primary"
  >
    FAQ Component
  </div>
  <FAQ />
</div>

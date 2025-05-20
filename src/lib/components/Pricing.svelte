<script lang="ts">
  import { pricingPlans } from "../../routes/(marketing)/pricing/pricing_plans"

  export let highlightedPlanId = ""
  export let callToAction: string
  export let currentPlanId = ""
  export let center = true

  let isYearly = false

  const togglePricing = () => {
    isYearly = !isYearly
  }

  $: selectedPricingPlans = isYearly
    ? pricingPlans.map((plan) => ({
        ...plan,
        price: plan.yearlyPrice,
        priceIntervalName: "per year",
        stripe_price_id: plan.stripe_yearly_price_id ?? plan.stripe_price_id,
      }))
    : pricingPlans.map((plan) => ({
        ...plan,
        price: plan.price,
        priceIntervalName: "per month",
        stripe_price_id: plan.stripe_monthly_price_id ?? plan.stripe_price_id,
      }))

  type PlanFeatureRow = {
    name: string
    freeIncluded?: boolean
    proIncluded?: boolean
    freeString?: string
    proString?: string
    header?: boolean
  }
</script>

<section id="pricing" class="bg-base-100 py-20">
  <h1 class="text-xl text-center">Pricing</h1>
  <div class="flex justify-center p-10">
    <label class="label cursor-pointer">
      <span class="label-text">Monthly</span>
      <input
        type="checkbox"
        class="toggle toggle-primary mx-2"
        bind:checked={isYearly}
      />
      <span class="label-text">Yearly(2 months free)</span>
    </label>
  </div>

  <div
    class="justify-center flex flex-col lg:flex-row gap-10 {center
      ? 'place-content-center'
      : ''} flex-wrap"
  >
    {#each selectedPricingPlans as plan}
      <div
        class="flex-none card card-bordered {plan.id === highlightedPlanId
          ? 'border-primary'
          : 'border-gray-200'} shadow-xl flex-1 grow min-w-[260px] max-w-[310px] p-6"
      >
        <div class="flex flex-col h-full">
          <div class="text-xl font-bold">{plan.name}</div>
          <p class="mt-2 text-sm text-gray-500 leading-relaxed">
            {plan.description}
          </p>
          <div class="mt-auto pt-4 text-sm text-gray-600">
            Plan Includes:
            <ul class="list-disc list-inside mt-2 space-y-1">
              {#each plan.features as feature}
                <li class="list-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 ml-2 inline text-success"
                  >
                    <use href="#checkcircle" />
                  </svg>
                  {feature}
                </li>
              {/each}
            </ul>
          </div>
          <div class="pt-8">
            <span class="text-4xl font-bold">{plan.price}</span>
            <span class="text-gray-400">{plan.priceIntervalName}</span>
            <div class="mt-6 pt-4 flex-1 flex flex-row items-center">
              {#if plan.id === currentPlanId}
                <div
                  class="btn btn-outline btn-success no-animation w-[80%] mx-auto cursor-default"
                >
                  Current Plan
                </div>
              {:else}
                <a
                  href={"/dashboard/subscribe/" +
                    (plan.stripe_price_id ?? "free_plan")}
                  class="btn w-full btn-primary mx-auto"
                >
                  {callToAction}
                </a>
              {/if}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <svg style="display:none" version="2.0">
    <defs>
      <symbol
        id="checkcircle"
        viewBox="0 0 24 24"
        stroke-width="2"
        fill="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.105-4.498a.791.791 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.791.791 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 .608.285.83.83 0 0 0 .068-.003.791.791 0 0 0 .618-.393L12.6 6.866a.791.791 0 0 0-.29-1.081z"
        />
      </symbol>
    </defs>
  </svg>

  <svg style="display:none" version="2.0">
    <defs>
      <symbol id="nocircle" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4,11H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
        />
      </symbol>
    </defs>
  </svg>
</section>

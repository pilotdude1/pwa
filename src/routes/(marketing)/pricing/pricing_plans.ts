export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "A free plan to get you started!",
    price: "$0",
    yearlyPrice: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["Fast Performance", "Stripe Integration"],
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "A plan to test your pro prowess",
    price: "$5",
    yearlyPrice: "$50",
    priceIntervalName: "per month",
    stripe_monthly_price_id: "price_1RLad4CDVJ7uBSaOgWsxNMuu",
    stripe_yearly_price_id: "price_1RLakjCDVJ7uBSaOGarVjhRh",
    stripe_product_id: "prod_QAUeogSbUAD4RL",
    features: [
      "Get everything in Free",
      "Support from the pros ",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "A plan for the enterprise company",
    price: "$15",
    yearlyPrice: "$150",
    priceIntervalName: "per month",
    stripe_monthly_price_id: "price_1RLaieCDVJ7uBSaOq6IxGefe",
    stripe_yearly_price_id: "price_1RLal2CDVJ7uBSaOvlDx7px8",
    stripe_product_id: "prod_QAUggYcZreQJKS",
    features: [
      "Everything in Pro",
      "24/7 support hotline",
    ],
  },
]

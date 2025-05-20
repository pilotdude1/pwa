import Stripe from 'stripe';

// Only initialize Stripe if the secret key is available
let stripe: Stripe | null = null;
try {
  const { PRIVATE_STRIPE_API_KEY } = await import("$env/static/private");
  if (PRIVATE_STRIPE_API_KEY) {
    stripe = new Stripe(PRIVATE_STRIPE_API_KEY, {
      apiVersion: '2023-10-16'
    });
  }
} catch (e) {
  // Environment variable not available during build
  console.warn('Stripe API key not available');
}

export { stripe };

// Helper function to check if Stripe is available
export const isStripeEnabled = () => !!stripe;
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_STRIPE_KEY);

export { stripePromise };
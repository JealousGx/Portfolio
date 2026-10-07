import { ShoppingCart } from "lucide-react";

import type { ServicePageData } from "./types";

export const ecommerceWebsiteDevelopment: ServicePageData = {
    slug: "ecommerce-website-development",
    label: "E-commerce",
    icon: ShoppingCart,
    title: "Freelance E-commerce Website Developer",
    description:
        "I build online stores with product listings, cart, checkout and payments, on Next.js, WooCommerce or Shopify. Book a free scoping call.",
    h1: "E-commerce Website Development for Small Businesses and Startups",
    intro:
        "I build online stores for small businesses and startups that are ready to sell products online: product listings, cart, checkout and payment integration.",
    details: {
        audience: "Small businesses and startups that are ready to sell products online.",
        included: [
            "Product listings",
            "Cart and checkout",
            "Payment integration",
            "Shipping rates, email marketing, analytics and inventory sync (other integrations are quoted per project)",
        ],
        notIncluded: [
            "Anything not agreed in the scope (quoted separately)",
            "Product photos and descriptions (you supply them, or I quote them separately)",
            "Domain, hosting and payment processor fees (you pay these to the provider)",
            "Paid ads setup",
        ],
        timeline:
            "It depends on catalog size and integrations. I give you a firm date after the scoping call.",
        tools:
            "A custom build with Next.js, WordPress with WooCommerce, or Shopify. Payments through Stripe, PayPal and other providers, depending on your country.",
        priceNote: "Book a free scoping call for a real number.",
    },
    faqs: [
        { question: "How much does an online store cost?", answer: "Book a free scoping call for a real number." },
        { question: "Which platform do you use?", answer: "A custom build with Next.js, WordPress with WooCommerce, or Shopify." },
        { question: "Which payment methods can my store take?", answer: "Stripe, PayPal, and other providers depending on your country." },
        { question: "How long does it take?", answer: "It depends on catalog size and integrations. I give you a firm date after the scoping call." },
    ],
};

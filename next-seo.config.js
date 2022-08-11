const defaultSEOConfig = {
  title: "Matt | Front End Web Developer",
  description:
    "Final Year Engineering Student • Front End Web Developer • Gamer • Tech Enthusiast",
  cannonical: `https://${process.env.NEXT_PUBLIC_WEBAPP_LINK}/`,
  openGraph: {
    type: "website",
    url: `https://${process.env.NEXT_PUBLIC_WEBAPP_LINK}/`,
    site_name: "Matt",
    title: "Matt | Front End Web Developer",
    description:
      "Final Year Engineering Student • Front End Web Developer • Gamer • Tech Enthusiast",
    images: [
      {
        url: "https://res.cloudinary.com/jealousgx/image/upload/v1659721245/portfolio-cover.png",
        width: 1200,
        height: 630,
        alt: "Matt's Portfolio Cover Page",
      },
    ],
    profile: {
      firstName: "Abdul Mateen",
      lastName: "Khilji",
      username: "jealousgx",
      gender: "male",
    },
  },
  twitter: {
    handle: "@JealousGx",
    site: "@JealousGx",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;

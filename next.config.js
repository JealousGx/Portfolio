const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf/,
      type: "asset/resource",
      generator: {
        filename: "static/[hash][ext]",
      },
    });

    return config;
  },
  images: {
    domains: [
      "media.graphassets.com",
      "c5eq9h7e.directus.app",
      "res.cloudinary.com",
      "cdn.hashnode.com",
    ],
  },
});

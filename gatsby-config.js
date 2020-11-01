require("dotenv").config({ path: ".env" });

module.exports = {
  siteMetadata: {
    url: process.env.GATSBY_DOMAIN,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Damian Nowak",
        short_name: "Damian Nowak",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#2ed7b8",
        display: "standalone",
        icon: "static/logo.png",
      },
    },
    {
      resolve: "@directus/gatsby-source-directus",
      options: {
        url: process.env.DIRECTUS_URL,
        project: process.env.DIRECTUS_PROJECT,
        auth: {
          token: process.env.DIRECTUS_TOKEN,
        },
        targetStatuses: ["published", "__NONE__"],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/images\/svg/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: "gatsby-plugin-hotjar",
      options: {
        includeInDevelopment: false,
        id: process.env.HOTJAR_ID,
        sv: process.env.HOTJAR_SNIPPET_VERSION,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["DIRECTUS_URL", "DIRECTUS_PROJECT", "RECAPTCHA_KEY"],
      },
    },
  ],
};

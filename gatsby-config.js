const tailwind = require("tailwindcss");
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Camevents",
    separator: "|",
    baseTitle: "Camevents",
    author: `@Camevents`,
    lang: "en",
    siteUrl: `https://Camevents.pl`,
    themeColor: "#042428",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          tailwind,
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 1000,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: "Camevents",
        accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,
        // linkResolver: ({ doc }) => {
        //   if (doc.type === "page") {
        //     return `/${doc.uid}`;
        //   }

        //   // Backup for all other types
        //   return "/";
        // },
        schemas: {
          page: require("./custom_types/page.json"),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // purgeCSSOptions: {
        //   safelist: {
        //     deep: [
        //       /image-full$/,
        //       /contentImage$/,
        //       /gatsby-image-wrapper$/,
        //       /ul$/,
        //       /contact-slide-enter$/,
        //       /contact-slide$/,
        //       /contact-slide-enter-active$/,
        //       /contact-slide-exit$/,
        //       /contact-slide-exit-active$/,
        //       /nav-slide$/,
        //       /nav-slide-enter$/,
        //       /nav-slide-enter-active$/,
        //       /nav-slide-exit$/,
        //       /nav-slide-exit-active$/,
        //       /nav__menu$/,
        //       /markdown-content$/,
        //       /md-content$/,
        //       /strong$/,
        //       /em$/,
        //       /h1$/,
        //       /h2$/,
        //       /h3$/,
        //       /h4$/,
        //       /h5$/,
        //       /h6$/,
        //     ],
        //   },
        // },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};

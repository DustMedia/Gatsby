require("dotenv").config();
const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Dust Media`,
    description: `Al sinds jaar en dag heeft het maken van videos's, het bewerken ervan en komen tot het finale product een groot deel van mijn zijn in handen. `,
    author: `Roland Branten`,
    siteUrl: `https://www.dustmedia.nl/`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "v3lewksl",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
        graphqlTag: "default",
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src/assets"),
        mixins: path.join(__dirname, "src/style/Mixins"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dust Media`,
        short_name: `Dust`,
        start_url: `/`,
        background_color: `#E1C598`,
        theme_color: `#E1C598`,
        display: `standalone`,
        icon: `icon/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};

const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Logan Arnett | Software Engineer`,
    siteUrl: "https://loganarnett.com",
    description: "Full Stack Software Engineer with experience with React, Nodejs, SQL, NOSQL, and cloud providers like Amazon Web Services(AWS), Microsoft Azure, and Google Cloud Platform(GCP)"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Logan Arnett",
        short_name: "Logan Arnett",
        start_url: "/",
        background_color: "#333",
        theme_color: "#333",
        display: "standalone",
        icon: "src/assets/logo.png"
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        "components": path.join(__dirname, "src/components"),
        "helpers": path.join(__dirname, "src/helpers"),
        "hooks": path.join(__dirname, "src/hooks"),
        "layout": path.join(__dirname, "src/layout"),
        "styles": path.join(__dirname, "src/styles"),
        "pages": path.join(__dirname, 'src/pages')
      }
    }
  ],
};

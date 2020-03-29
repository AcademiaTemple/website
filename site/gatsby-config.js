module.exports = {
  siteMetadata: {
    title: `Courses`,
    description: `Courses Theme`,
    author: "Gatsby",
    //image: "https://gatsby-theme-serena.netlify.com/og-image.webp",
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Courses`,
    //     short_name: `Courses`,
    //     start_url: `/`,
    //     background_color: `#fff`,
    //     theme_color: `#000`,
    //     icon: `content/assets/icon.png`,
    //     display: `standalone`,
    //   },
    // },
    {
      resolve: `gatsby-theme-courses`,
      options: {},
    },
  ],
}

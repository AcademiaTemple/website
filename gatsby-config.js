/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          {
            family:`Raleway`,
            variants:[`400`]

          },
          {
            family:`Roboto`,
            variants:[`400`]

          },
          {
            family:`Montserrat`,
            variants:[`400`]

          }
        ]
      }
    }

  ],
}

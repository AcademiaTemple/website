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
            `Raleway\:400`,
            `Roboto\:400`,
            `Montserrat\:400`
        ]
      }
    }

  ],
}

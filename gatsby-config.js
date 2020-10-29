/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Damian Nowak - Programista PHP, JavaScript',
    titleTemplate: '%s - Damian Nowak',
    description: 'Hogwarts Potions master, Head of Slytherin house and former Death Eater.',
    url: 'https://dnowak.dev',
    image: '/images/snape.jpg',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: '@directus/gatsby-source-directus',
      options: {
        url: 'https://cms.dnowak.dev/public',
        project: 'dnowakdev',
        auth: {
          token: 'ut9qEmxqtIDc13EqLi26FB4b',
        },
        targetStatuses: ['published', '__NONE__'],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/images\/svg/
        }
      }
    }
  ],
};

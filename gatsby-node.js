/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allIndexJson {
          edges {
            node {
              path
              title
            }
          }
        }
        allCvJson {
          edges {
            node {
              path
              title
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const indexTemplate = `${__dirname}/src/templates/index.js`
  result.data.allIndexJson.edges.forEach(({ node }) => {
    createPage({
      path: `${node.path}`,
      component: indexTemplate,
      context: {
        slug: node.path,
      },
    })
  })
}

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
        allAboutJson {
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

  result.data.allIndexJson.edges.forEach(({ node }) => {
    createPage({
      path: `${node.path}`,
      component: `${__dirname}/src/templates/index.js`,
      context: {
        slug: node.path,
      },
    })
  })

  result.data.allAboutJson.edges.forEach(({ node }) => {
    createPage({
      path: `${node.path}`,
      component: `${__dirname}/src/templates/about.js`,
      context: {
        slug: node.path,
      },
    })
  })
}

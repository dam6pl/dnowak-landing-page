exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const allPages = await graphql(`
    {
      allPages {
        edges {
          node {
            path
            template
            title
          }
        }
      }
    }
  `)

  if (allPages.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  allPages.data.allPages.edges.forEach(({ node }) => {
    if (node.path === null) return

    createPage({
      path: `${node.path}`,
      component: `${__dirname}/src/templates/${node.template}.js`,
      context: {
        slug: node.path,
      },
    })
  })
}

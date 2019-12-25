const path = require('path')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  const projectTemplate = path.resolve('src/templates/project.tsx')

  const { data, errors } = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `projects${node.frontmatter.slug}`,
      component: projectTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}

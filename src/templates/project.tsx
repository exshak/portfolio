import { graphql } from 'gatsby'
import React, { Fragment } from 'react'
import SEO from '../components/layout/seo'
import OtherProjects from './otherProjects'
import ProjectContent from './projectContent'
import ProjectHeader from './projectHeader'

export default ({ data }) => {
  const {
    client,
    title,
    slug,
    color,
    content,
    featuredimage,
  } = data.markdownRemark.frontmatter

  const projects = data.allMarkdownRemark.edges.filter(
    ({ node }) => node.frontmatter.slug !== slug
  )

  return (
    <Fragment>
      <SEO title={client} />
      <ProjectHeader
        client={client}
        title={title}
        color={color}
        image={featuredimage.childImageSharp.fluid}
      />
      <ProjectContent client={client} color={color} content={content} />
      <OtherProjects projects={projects} />
    </Fragment>
  )
}

export const query = graphql`
  query Project($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        client
        title
        color
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        content {
          layout
          head
          main
          image {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            client
            slug
            color
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

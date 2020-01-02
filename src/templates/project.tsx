import { graphql } from 'gatsby'
import React, { Fragment } from 'react'
import SEO from '../components/layout/seo'
import ProjectHeader from './projectHeader'

export default ({ data }) => {
  const {
    client,
    title,
    color,
    featuredimage,
  } = data.markdownRemark.frontmatter

  return (
    <Fragment>
      <SEO title={client} />
      <ProjectHeader
        client={client}
        title={title}
        color={color}
        image={featuredimage.childImageSharp.fluid}
      />
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
      }
    }
  }
`

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import React from 'react'
import { Card, Image, OtherProjectList } from './styles'

const OtherProjects = ({ projects }) => (
  <OtherProjectList>
    {projects.map(({ node }) => (
      <AniLink
        key={node.frontmatter.slug}
        to={`/projects${node.frontmatter.slug}`}
        aria-label={`Read more about ${node.frontmatter.title}`}
        bg={node.frontmatter.color}
        cover
        direction="right"
      >
        <Card client={node.frontmatter.client} color={node.frontmatter.color}>
          <p>{node.frontmatter.client}</p>
          <h4>{node.frontmatter.title}</h4>
          <Image fluid={node.frontmatter.featuredimage.childImageSharp.fluid} />
        </Card>
      </AniLink>
    ))}
  </OtherProjectList>
)

export default OtherProjects

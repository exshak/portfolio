import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { animations } from '../common/animations'
import ProjectCard from './projectCard'
import { Grid, ProjectsContainer } from './styles'

const Projects = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query Projects {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              client
              slug
              color
              outline
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ProjectsContainer style={animations.verticleSlide(`15rem`, 0)}>
      <h1>Projects</h1>
      <Grid>
        {allMarkdownRemark.edges.map(({ node }, index) => (
          <ProjectCard
            index={index}
            key={node.frontmatter.slug}
            project={node.frontmatter}
          />
        ))}
      </Grid>
    </ProjectsContainer>
  )
}

export default Projects

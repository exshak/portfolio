import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { animations } from '../common/animations'
import ProjectCard from './projectCard'
import { ProjectsContainer, ProjectsGrid } from './styles'

const Projects = () => {
  const { projects } = useStaticQuery(graphql`
    query Projects {
      projects: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              stack
              link
              repo
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 80) {
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
    <ProjectsContainer style={animations.verticalSlide('15rem', 0)}>
      <h1>Projects</h1>
      <ProjectsGrid>
        {projects.edges.map(({ node: { id, html: body, frontmatter } }) => (
          <ProjectCard key={id} project={{ body, ...frontmatter }} />
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  )
}

export default Projects

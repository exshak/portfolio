import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import {
  Background,
  Button,
  Card,
  CardContainer,
  Client,
  Copy,
  ImageWrapper,
} from './styles'

const ProjectCard = ({ index, project }) => (
  <Card
    index={index + 1}
    color={project.color}
    bg={project.color}
    to={`/projects${project.slug}`}
    aria-label={`Read more about ${project.title}`}
    cover
    direction="right"
  >
    <CardContainer>
      <Copy client={project.client}>
        <Client color={project.color}>{project.client}</Client>
        <h2>{project.title}</h2>
      </Copy>
      <ImageWrapper index={index + 1} client={project.client}>
        <Img
          alt={project.title}
          fluid={project.featuredimage.childImageSharp.fluid}
        />
      </ImageWrapper>
      <Button color={project.color} client={project.client}>
        Read more
      </Button>
      <Background color={project.color} />
    </CardContainer>
  </Card>
)

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectCard

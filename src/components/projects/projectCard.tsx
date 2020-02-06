import PropTypes from 'prop-types'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { GoLinkExternal } from 'react-icons/go'
import { Buttons, Card, Content, IconLink, Image, Stack, Text } from './styles'

const ProjectCard = ({
  project: { title, body, stack, link, repo, featuredImage },
}) => (
  <Card>
    <Image fluid={featuredImage.childImageSharp.fluid} alt={title} />
    <Content>
      <h2>{title}</h2>
      Built with <span>{stack.split(', ')[1]}</span>
      <Text dangerouslySetInnerHTML={{ __html: body }} />
      <Stack>{stack.replace(/(, )/g, ' · ')}</Stack>
      <Buttons>
        <IconLink
          aria-label={`Visit ${repo}`}
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </IconLink>
        <IconLink
          aria-label={`Visit ${link}`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoLinkExternal />
        </IconLink>
      </Buttons>
    </Content>
  </Card>
)

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectCard

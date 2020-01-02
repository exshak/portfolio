import React from 'react'
import { animations } from '../components/common/animations'
import { HeaderContainer, HeaderCopy, HeaderImage } from './styles'

const ProjectHeader = ({ client, title, color, image }) => (
  <HeaderContainer
    style={animations.horizontalSlide('-15rem', 0)}
    client={client}
    color={color}
  >
    <HeaderImage fluid={image} />
    <HeaderCopy>
      <p>{client}</p>
      <h1>{title}</h1>
    </HeaderCopy>
  </HeaderContainer>
)

export default ProjectHeader

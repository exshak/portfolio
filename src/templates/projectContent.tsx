import React from 'react'
import {
  LeftContentBlock,
  MiddleContentBlock,
  RightContentBlock,
} from './contentBlocks'
import { ProjectContainer } from './styles'

const ProjectContent = ({ client, color, content }) => (
  <ProjectContainer client={client} color={color}>
    {content.map(({ layout, ...content }, i) => {
      if (layout === 'left') {
        return (
          <LeftContentBlock
            key={i}
            layout={layout}
            client={client}
            color={color}
            content={content}
          />
        )
      } else if (layout === 'right') {
        return (
          <RightContentBlock
            key={i}
            layout={layout}
            client={client}
            color={color}
            content={content}
          />
        )
      } else if (layout === 'middle') {
        return (
          <MiddleContentBlock
            key={i}
            layout={layout}
            client={client}
            color={color}
            content={content}
          />
        )
      } else {
        return null
      }
    })}
  </ProjectContainer>
)

export default ProjectContent

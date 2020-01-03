import Img from 'gatsby-image'
import React, { Fragment, useEffect, useState } from 'react'
import { animated, config, useSpring } from 'react-spring'
import { Waypoint } from 'react-waypoint'
import { LeftContent, MiddleContent, RightContent, Text } from './styles'

export const LeftContentBlock = props => (
  <LeftContent>
    <Content {...props} y="0" x="-30rem" />
  </LeftContent>
)

export const RightContentBlock = props => (
  <RightContent>
    <Content {...props} y="0" x="30rem" />
  </RightContent>
)

export const MiddleContentBlock = props => (
  <MiddleContent>
    <Content {...props} y="30rem" x="0" />
  </MiddleContent>
)

const AnimatedImage = animated(Img)
const AnimatedText = animated(Text)

const Content = props => {
  const [view, setView] = useState(false)
  const [textView, setTextView] = useState(false)

  useEffect(() => {
    setView(false)

    return () => {
      setView(false)
    }
  }, [])

  const {
    layout,
    client,
    color,
    content: { image, head, main },
  } = props

  return (
    <Fragment>
      <Waypoint onEnter={() => setView(true)} />
      {image && (
        <AnimatedImage
          style={useSpring({
            config: config.slow,
            opacity: view ? 1 : 0,
            transform: view
              ? 'translate3d(0, 0rem, 0)'
              : `translate3d(${props.x}, ${props.y}, 0)`,
          })}
          fluid={image.childImageSharp.fluid}
        />
      )}
      {head && (
        <AnimatedText
          style={useSpring({
            config: config.slow,
            opacity: textView ? 1 : 0,
            transform: textView
              ? 'translate3d(0, 0rem, 0)'
              : `translate3d(${props.x}, ${props.y}rem, 0)`,
          })}
          layout={layout}
          client={client}
          color={color}
        >
          <Waypoint onEnter={() => setTextView(true)} />
          <h3>{head}</h3>
          <p>{main}</p>
        </AnimatedText>
      )}
    </Fragment>
  )
}

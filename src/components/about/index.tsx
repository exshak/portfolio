import { Link } from 'gatsby'
import React from 'react'
import { animations } from '../common/animations'
import { ContentContainer } from '../common/container'

const About = () => (
  <ContentContainer style={animations.verticleSlide(`15rem`, 0)}>
    <h1>About</h1>
    <p>
      <Link to="/contact">get in touch.</Link>
    </p>
  </ContentContainer>
)

export default About

import { Link } from 'gatsby'
import React from 'react'
import { animations } from '../common/animations'
import { ContentContainer } from '../common/container'
import TitleCard from '../common/titleCard'

const About = () => (
  <ContentContainer style={animations.verticleSlide('15rem', 0)}>
    <TitleCard title="About" copy="" />
    <p>
      <Link to="/contact">get in touch.</Link>
    </p>
  </ContentContainer>
)

export default About

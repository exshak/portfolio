import { Link } from 'gatsby'
import React from 'react'
import { FaFilePdf } from 'react-icons/fa'
import { animations } from '../common/animations'
import { ContentContainer } from '../common/container'
import TitleCard from '../common/titleCard'

const About = () => (
  <ContentContainer style={animations.verticalSlide('15rem', 0)}>
    <TitleCard
      title="About"
      copy="Download a copy of my CV below."
      link="https://drive.google.com/open?id="
      linkText="Download CV"
      icon={<FaFilePdf />}
    />
    <p>
      I'm a self-taught frontend & backend software developer. I like working on
      anything from system design, user interface and experience prototyping, to
      creating scripts & tools.
      <br />
      <br />
      Outside of work I like to work on full-stack web applications with a
      combination of React and GraphQL with backend services like Firebase and
      Netlify.
      <br />
      <br />
      I'm a nerd who loves Vim/Emacs, Linux and OS X and enjoys customizing all
      of the development environment.
      <br />
      <br />
      If I'm not desiging or coding something I'll be enjoying a night out with
      friends and/or family.
      <br />
      <br />
      <Link to="/contact">get in touch.</Link>
    </p>
  </ContentContainer>
)

export default About

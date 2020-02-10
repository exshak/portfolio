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
      link="https://drive.google.com/file/d/1gA93vBRW7wZVRH09QQ1XSfByRe7Hjjj6/view"
      linkText="Download CV"
      icon={<FaFilePdf />}
    />
    <p>
      I'm a self-taught frontend & backend software developer with a passion for
      bringing ideas to life through code. I enjoy writing clean, well
      architected code and am a big proponent of test driven development. I like
      working on anything from UI/UX prototyping, system design, to creating
      scripts & tools.
      <br />
      <br />
      Outside of work I like to work on full-stack web applications with a
      combination of React and GraphQL on the client-side. Some backend
      frameworks I enjoy working with are Node.js and Express along with
      microservices like Docker and AWS.
      <br />
      <br />
      Ultimately I'm a nerd who loves Vim/Emacs, Linux and OSX. I enjoy
      customizing all parts of the development environment and I'm a believer in
      <i> dotfiles are meant to be shared</i>, you can check out mine
      <a
        href="https://github.com/exshak"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        here.
      </a>
      <br />
      <br />
      When I'm not behind my computer you can find me exploring the local food
      scene or enjoying a game night with friends.
      <br />
      <br />
      If that sounds like someone you’d like to collaborate with then
      <Link to="/contact"> get in touch.</Link>
    </p>
  </ContentContainer>
)

export default About

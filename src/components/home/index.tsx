import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { animations } from '../common/animations'
import { HomeContainer, Text } from './styles'

const Home = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <HomeContainer>
      <Text style={animations.verticleSlide(`15rem`, 0)}>
        <h1>Hi, my name’s Shak.</h1>
        <p>I’m a full-stack software developer based in Ontario, CA.</p>
      </Text>
    </HomeContainer>
  )
}

export default Home

import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { animations } from '../common/animations'
import { SiteMetadata } from '../common/siteMetadata'
import TextLink from '../common/textLink'
import { HomeContainer, SubTitle, Text } from './styles'
import WordWheel from './wordWheel'

const Home = () => {
  const { description, username, keywords, navigation } = SiteMetadata()

  const { file } = useStaticQuery(graphql`
    query Logo {
      file(relativePath: { eq: "images/logo.svg" }) {
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
      <Text style={animations.verticalSlide('15rem', 0)}>
        <h1>
          Hello <span>👋🏻</span>, I'm <span>{username}</span>
        </h1>
        <SubTitle>
          A <WordWheel words={keywords} /> {description}
        </SubTitle>
        {navigation.map(
          ({ to, textLong }, i) =>
            textLong && <TextLink key={to + i} to={to} text={textLong} />
        )}
      </Text>
    </HomeContainer>
  )
}

export default Home

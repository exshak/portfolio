import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { animations } from '../common/animations'
import { SiteMetadata } from '../common/siteMetadata'
import TextLink from '../common/textLink'
import { HomeContainer, SubTitle, Text } from './styles'
import WordsWheel from './wordsWheel'

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
      <Text style={animations.verticleSlide('15rem', 0)}>
        <h1>
          {/* Hi <span>👋🏻</span>, my name’s <span>{username}</span> */}
          Hello <span>👋🏻</span>, I'm <span>{username}</span>
        </h1>
        <SubTitle>
          A <WordsWheel words={keywords} /> {description}
        </SubTitle>
        {navigation.map(
          (item, key) =>
            item.textLong && (
              <TextLink key={key} to={item.to} text={item.textLong} />
            )
        )}
      </Text>
    </HomeContainer>
  )
}

export default Home

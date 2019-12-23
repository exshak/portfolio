import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { animations } from '../common/animations'
import { SiteMetadata } from '../common/siteMetadata'
import TextLink from '../common/textLink'
import { HomeContainer, Text } from './styles'

const Home = () => {
  const { description, username, navigation } = SiteMetadata()

  const { file } = useStaticQuery(graphql`
    query Logo {
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
      <Text style={animations.verticleSlide('15rem', 0)}>
        <h1>{`Hi, my name’s ${username}.`}</h1>
        <p>{description}</p>
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

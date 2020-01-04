import Img from 'gatsby-image'
import { animated } from 'react-spring'
import styled from 'styled-components'

export const HeaderContainer = styled(animated.header)`
  background-color: ${({ color }) => color};
  grid-column: 1 / -1;
  height: 40vh;
  position: relative;
  color: ${props => props.theme.colors.white};
`

export const HeaderImage = styled(Img)`
  bottom: 0;
  opacity: 0.25;
  overflow: hidden;
  position: absolute !important;
  right: 0;
  width: 80vh;
`

export const HeaderCopy = styled.div`
  bottom: -1rem;
  left: calc(100vw / 12);
  position: absolute;
  text-shadow: 0 0 5rem rgba(0, 0, 0, 0.25);

  ${props => props.theme.breakpoints.tablet} {
    left: calc((100vw / 12) * 2);
  }

  ${props => props.theme.breakpoints.desktop} {
    bottom: -2rem;

    h1 {
      font-size: 8rem;
    }

    p {
      margin-bottom: -0.5rem;
    }
  }
`

export const ProjectContainer = styled.div`
  display: grid;
  grid-column: 1 / -1;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  margin-top: 6rem;
  overflow: hidden;
  position: relative;
`

export const Content = styled.div`
  box-sizing: content-box;
  grid-column: 2 / 12;
  margin-bottom: calc(100vh / 6);
  position: relative;

  iframe {
    width: 100%;
  }

  ${props => props.theme.breakpoints.tablet} {
    grid-column: 3 / 11;
  }

  ${props => props.theme.breakpoints.desktop} {
    /* margin-bottom: calc(100vh / 3); */
  }
`

export const LeftContent = styled(Content)`
  ${props => props.theme.breakpoints.desktop} {
    grid-column: 1 / 10;
  }
`

export const RightContent = styled(Content)`
  ${props => props.theme.breakpoints.desktop} {
    grid-column: 4 / -1;
  }
`

export const MiddleContent = styled(Content)`
  ${props => props.theme.breakpoints.desktop} {
    grid-column: 3 / 11;
  }
`

export const Text = styled.div`
  background-color: ${({ color }) => color};
  box-shadow: 0 0 5rem rgba(0, 0, 0, 0.25);
  padding: 3rem;
  position: relative;
  width: calc(100% - 6rem);
  color: ${props => props.theme.colors.white};

  h3 {
    margin-bottom: 1rem;
  }

  ${props => props.theme.breakpoints.desktop} {
    bottom: calc(-100vh / 12);
    padding: 5rem;
    position: absolute;
    max-width: 25%;

    ${({ layout }) => {
      if (layout === 'left') {
        return 'right: calc(-100vh / 12);'
      }

      if (layout === 'right') {
        return 'left: calc(-100vh / 12);'
      }

      if (layout === 'middle') {
        return null
      }
    }}
  }
`

export const OtherProjectList = styled.div`
  display: grid;
  grid-column: 1 / -1;
  grid-row-gap: 0;
  margin-bottom: 0rem;

  ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: repeat(5, 1fr);
  }
`

export const Card = styled.div`
  background-color: ${({ color }) => color};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  overflow: hidden;
  padding: 2rem;
  padding-bottom: 4rem;
  position: relative;
  transform: translateY(0rem);
  ${props => props.theme.transitions.slowSnap};

  &:hover {
    transform: translateY(-2.5rem);
    ${props => props.theme.transitions.mediumSnap};
  }

  p,
  h4 {
    position: relative;
    z-index: 1;
  }

  ${props => props.theme.breakpoints.tablet} {
    min-height: 20rem;
  }
`

export const Image = styled(Img)`
  bottom: 0;
  opacity: 0.25;
  position: absolute !important;
  right: 0;
  width: 100%;
  z-index: 0;
`

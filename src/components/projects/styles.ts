import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'
import Container from '../common/container'

export const ProjectsContainer = styled(Container)`
  grid-row-gap: 0rem;
  margin-top: 30vh;

  h1 {
    position: relative;
    transform: translateY(1rem);
    z-index: 10000;

    ${props => props.theme.breakpoints.desktop} {
      font-size: 8rem;
      transform: translateY(2rem);
    }
  }
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
`

export const Card = styled(AniLink)`
  grid-column: span 2;
  overflow: hidden;
  padding-top: 100%;
  position: relative;

  ${props => props.theme.breakpoints.tablet} {
    grid-column: ${({ index }) => (index % 3 === 0 ? `span 2` : `span 1`)};
    padding-top: ${({ index }) => (index % 3 === 0 ? `50%` : `100%`)};
  }
`

export const Background = styled.span`
  background-color: ${({ color }) => color};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Copy = styled.div`
  left: 0;
  padding: 2rem;
  position: absolute;
  top: 0;
  z-index: 100;

  h2,
  p {
    font-size: 1.8rem;
  }

  color: ${props => props.theme.colors.white};

  ${props => props.theme.breakpoints.desktop} {
    padding: 4rem;
    top: auto;
    bottom: ${({ client }) =>
      client === '' || client === '' || client === '' ? `auto` : `0`};

    h2 {
      font-size: 4rem;
    }
  }
`

export const Client = styled.p`
  font-weight: 200;

  ${props => props.theme.breakpoints.desktop} {
    font-weight: 400;
  }
`

export const ImageWrapper = styled.div`
  bottom: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  transform: scale(1);
  ${props => props.theme.transitions.slowSnap};
  height: ${({ index }) => (index % 3 === 0 ? `50%` : `100%`)};
  width: ${({ index }) => (index % 3 === 0 ? `50%` : `100%`)};
  transform-origin: ${({ client }) => (client === '' ? `50% 100%` : `50%`)};

  ${Card}:hover & {
    transform: scale(1.1);
  }

  ${Card}:focus & {
    transform: scale(1.1);
  }

  ${props => props.theme.breakpoints.tablet} {
    height: 100%;
  }
`

export const Button = styled.button`
  background-color: ${props => props.theme.colors.black};
  bottom: 0;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  padding: 1.5rem 4rem;
  position: absolute;
  right: 2rem;
  text-align: right;
  transform: translateY(6rem);
  ${props => props.theme.transitions.mediumSnap};

  ${Card}:hover & {
    transform: translateY(0rem);
  }

  ${Card}:focus & {
    transform: translateY(0rem);
  }

  ${props => props.theme.breakpoints.desktop} {
    right: 4rem;
    bottom: ${({ client }) =>
      client === '' || client === '' || client === '' ? `0` : `auto`};

    transform: ${({ client }) =>
      client === '' || client === '' || client === ''
        ? `translateY(6rem)`
        : `translateY(-6rem)`};
  }
`

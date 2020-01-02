import Img from 'gatsby-image'
import { animated } from 'react-spring'
import styled from 'styled-components'

export const HeaderContainer = styled(animated.header)`
  background-color: ${({ color }) => color};
  grid-column: 1 / -1;
  height: 40vh;
  position: relative;
  color: ${({ client }) =>
    client === '' ? '' : props => props.theme.colors.white};
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

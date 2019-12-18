import { animated } from 'react-spring'
import styled from 'styled-components'

export const HomeContainer = styled.div`
  align-items: center;
  display: flex;
  display: grid;
  grid-column: 2 / 12;
  grid-row-gap: 8rem;
  margin-bottom: 0rem;
  position: relative;

  ${props => props.theme.breakpoints.tablet} {
    grid-column: 3 / 11;
  }
`

export const Text = styled(animated.div)`
  p {
    margin: 1rem 0 5rem 0;

    ${props => props.theme.breakpoints.desktop} {
      margin: 1rem 0 8rem 0;
    }
  }
`

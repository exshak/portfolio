import { animated } from 'react-spring'
import styled from 'styled-components'

const Container = styled(animated.div)`
  display: grid;
  grid-column: 2 / 12;
  grid-row-gap: 8rem;
  margin-bottom: 8rem;
  position: relative;

  ${props => props.theme.breakpoints.tablet} {
    grid-column: 3 / 11;
  }
`

export const ContentContainer = styled(Container)`
  grid-row-gap: 2rem;
  margin-top: 30vh;

  ${props => props.theme.breakpoints.desktop} {
    grid-auto-rows: min-content;
    grid-template-columns: 1fr 1fr;

    .full {
      grid-column: span 2;
    }

    h1,
    .left {
      grid-column: span 1;
    }

    article,
    p,
    .right {
      grid-column-start: 2;
    }
  }
`

export const FullContainer = styled.div`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: repeat(12, 1fr);
  padding: calc(100vh / 6) 0;
  position: relative;

  div {
    grid-column: 2 / 12;

    ${props => props.theme.breakpoints.tablet} {
      grid-column: 3 / 11;
    }

    ${props => props.theme.breakpoints.desktop} {
      grid-column: 3 / 6;
    }
  }

  form {
    grid-column: 2 / 12;

    ${props => props.theme.breakpoints.tablet} {
      grid-column: 3 / 11;
    }

    ${props => props.theme.breakpoints.desktop} {
      grid-column: 7 / 11;
    }
  }
`

export default Container

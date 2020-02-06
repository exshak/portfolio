import { animated } from 'react-spring'
import styled from 'styled-components'

const Container = styled(animated.div)`
  display: grid;
  grid-column: 3 / 11;
  grid-row-gap: 8rem;
  margin-bottom: 8rem;
  position: relative;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    grid-column: 2 / 12;
  }
`

export const ContentContainer = styled(Container)`
  grid-auto-rows: min-content;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30vh;

  h1 {
    grid-column: span 1;
  }

  p {
    grid-column-start: 2;
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: auto;

    p {
      grid-column-start: auto;
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
    grid-column: 3 / 6;

    @media ${({ theme }) => theme.breakpoints.mobile} {
      grid-column: 2 / 12;
    }

    @media ${({ theme }) => theme.breakpoints.tablet} {
      grid-column: 3 / 11;
    }
  }

  form {
    grid-column: 7 / 11;

    @media ${({ theme }) => theme.breakpoints.mobile} {
      grid-column: 2 / 12;
    }

    @media ${({ theme }) => theme.breakpoints.tablet} {
      grid-column: 3 / 11;
    }
  }
`

export default Container

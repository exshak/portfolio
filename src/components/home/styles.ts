import { animated } from 'react-spring'
import styled from 'styled-components'

export const HomeContainer = styled.div`
  align-items: center;
  display: flex;
  /* display: grid; */
  grid-column: 3 / 11;
  grid-row-gap: 8rem;
  margin-bottom: 0rem;
  position: relative;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    grid-column: 2 / 12;
  }
`

export const Text = styled(animated.div)`
  h1 {
    font-weight: 500;

    span {
      color: var(--primary);
      font-size: 4.8rem;
      font-weight: 900;
    }

    @media ${({ theme }) => theme.breakpoints.mobile} {
      span {
        font-size: 3.6rem;
      }
    }

    @media ${({ theme }) => theme.breakpoints.tablet} {
      span {
        font-size: 4rem;
      }
    }
  }

  h2,
  p {
    margin: 1rem 0.5rem 8rem;

    @media ${({ theme }) => theme.breakpoints.tablet} {
      margin: 1rem 0.5rem 5rem;
    }
  }
`

export const SubTitle = styled(animated.h2)`
  color: var(--text);
  font-size: 2rem;
  font-weight: 500;
  transition: color 0.2s ease-out;
`

export const WordsContainer = styled.div`
  color: var(--text-highlight);
  display: inline-block;
  font-size: 2rem;
  font-style: italic;
  font-weight: 700;
  position: relative;
  text-align: center;
  transition: color 0.2s ease-out;
  width: 10rem;

  & span {
    font-size: 2rem;
    text-align: center;
    width: 100%;
  }
`

import { animated } from 'react-spring'
import styled from 'styled-components'

export const HomeContainer = styled.div`
  align-items: center;
  /* display: flex; */
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
  h1 {
    font-weight: 500;

    span {
      color: ${props => props.theme.colors.blue};
      font-size: 3.6rem;
      font-weight: 900;
    }

    ${props => props.theme.breakpoints.tablet} {
      span {
        font-size: 4rem;
      }
    }

    ${props => props.theme.breakpoints.desktop} {
      span {
        font-size: 4.8rem;
      }
    }
  }

  h2,
  p {
    margin: 1rem 0.5rem 5rem;

    ${props => props.theme.breakpoints.desktop} {
      margin: 1rem 0.5rem 8rem;
    }
  }
`

export const SubTitle = styled(animated.h2)`
  color: ${props => props.theme.colors.white};
  font-size: 2rem;
  font-weight: 500;
  transition: color 0.2s ease-out;
`

export const WordsContainer = styled.div`
  color: #fff;
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

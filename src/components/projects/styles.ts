import Img from 'gatsby-image'
import styled from 'styled-components'
import Container from '../common/container'

export const ProjectsContainer = styled(Container)`
  grid-row-gap: 0rem;
  margin-top: 30vh;

  h1 {
    margin-bottom: 2rem;
  }
`

export const ProjectsGrid = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Card = styled.div`
  box-shadow: rgba(2, 12, 27, 0.7) 0 10px 30px -15px;
  width: 100%;
`

export const Image = styled(Img)`
  height: 250px;
`

export const Content = styled.div`
  background-color: var(--background);
  color: var(--text);
  font-size: 1.8rem;
  font-weight: 500;
  padding: 2rem;
  position: relative;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  span {
    color: var(--primary);
    font-size: 1.8rem;
    font-weight: 600;
  }
`

export const Text = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  margin: 1rem 0;

  p {
    line-height: 1.5;

    & a {
      color: var(--text-highlight);
      font-weight: 500;

      &:hover {
        color: var(--primary);
      }
    }
  }
`

export const Stack = styled.div`
  color: var(--text-highlight);
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    letter-spacing: 0rem;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const IconLink = styled.a`
  cursor: pointer;
  padding: 1rem 1rem 0;
  transition: all 0.2s ease-out;

  &:hover {
    color: var(--primary);
    transform: translateY(-3px);
  }

  svg {
    height: 2rem;
  }
`

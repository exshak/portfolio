import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

export const theme = {
  breakpoints: {
    tablet: '@media (min-width: 600px)',
    tablet768: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1025px)',
  },

  colors: {
    black: '#222222',
    blue: '#1aa0cb',
    white: '#fbfbfb',
  },

  transitions: {
    fastSnap: `
      transition: all 0.222s;
      transition-timing-function: cubic-bezier(0.060, 0.975, 0.195, 0.985);`,
    mediumSnap: `
      transition: all 0.444s;
      transition-timing-function: cubic-bezier(0.060, 0.975, 0.195, 0.985);`,
    slowSnap: `
      transition: all 0.666s;
      transition-timing-function: cubic-bezier(0.060, 0.975, 0.195, 0.985);`,
  },
}

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-size: 10px;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-smooth: always;
    scrollbar-width: none;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 900;
    line-height: 1.1;
  }

  h1 {
    font-size: 3.6rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
    font-size: 1.8rem;
  }

  a,
  p,
  li,
  svg,
  label,
  input,
  button,
  textarea {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.2rem;
  }

  ol,
  ul {
    list-style: none;
  }

  button {
    background: none;
    outline: none;
    border: none;
  }

  input,
  textarea {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    background: none;
  } 

  a {
    color: ${theme.colors.white};
    font-weight: 700;
    text-decoration: none;
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 3.2rem;
    }

    h3 {
      font-size: 2.8rem;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 4.8rem;
    }

    h2 {
      font-size: 4rem;
    }

    h3 {
      font-size: 3.4rem;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    display: none;
  }

  ::-webkit-scrollbar-thumb:hover {
    display: none;
  }
`

export const Main = styled(animated.main)`
  .tl-edges {
    overflow-x: visible;

    .tl-wrapper {
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
      display: grid;
      grid-column-gap: 1rem;
      grid-template-columns: repeat(12, 1fr);
      min-height: 100vh;
      position: relative;
      z-index: 0;
    }
  }

  ${theme.breakpoints.desktop} {
    margin: 0 auto;
    max-width: 1280px;
  }
`

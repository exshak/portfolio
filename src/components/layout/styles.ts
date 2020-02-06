import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

export const theme = {
  breakpoints: {
    mobile: '(max-width: 600px)',
    tablet: '(max-width: 768px)',
    desktop: '(max-width: 1024px)',
  },

  colors: {
    main: '#1aa0cb',
    light: '#089eca',
    lighter: '#36a6ba',
    lightTheme: {
      text: '#575757',
      textHighlight: '#333333',
      background: '#fbfbfb',
    },
    darkTheme: {
      text: '#dadada',
      textHighlight: '#f0f0f0',
      background: '#212121',
    },
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
    background-color: var(--background);
    color: var(--text);
    font-family: 'Source Sans Pro', sans-serif;
    font-smooth: always;
    overflow: visible;
    scrollbar-width: none;
    transition: color 0.2s ease-out, background 0.2s ease-out;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
    --primary: ${theme.colors.main};
    --primary-light: ${theme.colors.light};
    --primary-lighter: ${theme.colors.lighter};
    --text: ${theme.colors.darkTheme.text};
    --text-highlight: ${theme.colors.darkTheme.textHighlight};
    --background: ${theme.colors.darkTheme.background};
    --white: #ffffff;
    --offwhite: #f9f9f9;
    --navbar: rgba(33, 33, 33, 0.95);
    --shadow-btn: rgba(7, 49, 69, .1);
    --shadow-color: rgba(0, 0, 0, 0.1);
    
    &.light-mode {
      --navbar: rgba(255, 255, 255, 0.95);
      --text: ${theme.colors.lightTheme.text};
      --text-highlight: ${theme.colors.lightTheme.textHighlight};
      --background: ${theme.colors.lightTheme.background};
    }
    
    &.dark-mode {
      --navbar: rgba(33, 33, 33, 0.95);
      --text: ${theme.colors.darkTheme.text};
      --text-highlight: ${theme.colors.darkTheme.textHighlight};
      --background: ${theme.colors.darkTheme.background};
    }
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 900;
    line-height: 1.1;
  }

  h1 {
    font-size: 4.8rem;
  }

  h2 {
    font-size: 4rem;
  }

  h3 {
    font-size: 3.4rem;
  }

  h4 {
    font-size: 1.8rem;
  }

  a,
  i,
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

  a {
    color: var(--text);
    font-weight: 700;
    text-decoration: none;
  }

  i {
    color: var(--text-highlight);
    font-weight: 500;
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

  @media ${theme.breakpoints.desktop} {
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

  @media ${theme.breakpoints.mobile} {
    h1 {
      font-size: 3.6rem;
    }

    h2 {
      font-size: 2.8rem;
    }

    h3 {
      font-size: 2.4rem;
    }
  }

  ::-webkit-scrollbar,
  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-thumb:hover {
    display: none;
  }
`

export const Main = styled(animated.main)`
  margin: 0 auto;
  max-width: 1280px;

  .tl-edges {
    overflow-x: visible;

    .tl-wrapper {
      display: grid;
      grid-column-gap: 1rem;
      grid-template-columns: repeat(12, 1fr);
      min-height: 100vh;
      position: relative;
      z-index: 0;
    }
  }
`

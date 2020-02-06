import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import 'typeface-source-sans-pro'
import Nav from '../nav'
import { GlobalStyle, Main, theme } from './styles'

const Layout = ({ children }) => {
  const changeVhVariable = () => {
    // Get the viewport height and multiply it by 1% to get a value for vh
    let vh = typeof window !== 'undefined' && window.innerHeight * 0.01
    // Set the value in the --vh custom property to the document root
    typeof document !== 'undefined' &&
      document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  useEffect(() => {
    window.addEventListener('resize', changeVhVariable)
    return () => window.removeEventListener('resize', changeVhVariable)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
      <Main>{children}</Main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

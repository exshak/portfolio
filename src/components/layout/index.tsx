import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { config, useSpring } from 'react-spring'
import { ThemeProvider } from 'styled-components'
import 'typeface-source-sans-pro'
import Nav from '../nav'
import NavDrawer from '../nav/navDrawer'
import { GlobalStyle, Main, theme } from './styles'

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false)

  const toggleNav = () => setVisible(!visible)

  const animation = useSpring({
    positive: visible ? 100 : 0,
    negative: visible ? 0 : 100,
    config: config.slow,
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav animation={animation} toggleNav={toggleNav} visible={visible} />
        <Main
          style={{
            transform: animation.positive.interpolate(
              y => `translate3d(0, ${y}vh, 0)`
            ),
          }}
        >
          {children}
        </Main>
        <NavDrawer animation={animation} toggleNav={toggleNav} />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

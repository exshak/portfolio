import PropTypes from 'prop-types'
import React from 'react'
import { useSpring } from 'react-spring'
import useDarkMode from 'use-dark-mode'
import { Container, Label, Span } from './styles'

const ThemeToggle = ({ mobile }) => {
  const darkMode = useDarkMode(false)

  const ThemeToggleSpring = useSpring({
    delay: 200,
    from: { opacity: 0 },
    opacity: 1,
  })

  return (
    <Container style={ThemeToggleSpring} mobile={mobile}>
      <input
        id="theme"
        type="checkbox"
        checked={darkMode.value}
        onChange={darkMode.toggle}
      />
      <Label htmlFor="theme" className="toggle">
        <Span className="toggle_handler">
          <span className="crater crater-1" />
          <span className="crater crater-2" />
          <span className="crater crater-3" />
        </Span>
        <span className="star star-1" />
        <span className="star star-2" />
        <span className="star star-3" />
        <span className="star star-4" />
        <span className="star star-5" />
        <span className="star star-6" />
      </Label>
    </Container>
  )
}

ThemeToggle.propTypes = {
  mobile: PropTypes.any,
}

export default ThemeToggle

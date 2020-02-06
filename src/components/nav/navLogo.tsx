import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { animated, useTransition } from 'react-spring'
import useDarkMode from 'use-dark-mode'
import logoDark from '../../assets/images/logo-dark.svg'
import logoLight from '../../assets/images/logo-light.svg'
import { Logo } from './styles'

const NavLogo = ({ title }) => {
  const { value: darkMode } = useDarkMode(false)

  const navLogoTransition = useTransition(darkMode, null, {
    config: { duration: 200 },
    from: { opacity: 0, position: 'absolute' },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <Fragment>
      {navLogoTransition.map(({ item, key, props }) => (
        <animated.div key={key} style={props}>
          <Link to="/">
            {item ? (
              <Logo src={logoDark} alt={title + ' - Logo'} />
            ) : (
              <Logo src={logoLight} alt={title + ' - Logo'} />
            )}
          </Link>
        </animated.div>
      ))}
    </Fragment>
  )
}

NavLogo.propTypes = {
  title: PropTypes.string,
}

export default NavLogo

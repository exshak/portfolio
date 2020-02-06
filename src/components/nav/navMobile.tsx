import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { config, useTransition } from 'react-spring'
import NavDrawer from './navDrawer'
import { Box, Lines, MenuButton } from './styles'

const NavMobile = ({ visible, toggleNav }) => {
  const navDrawerTransition = useTransition(visible, null, {
    config: config.stiff,
    from: { opacity: 0, transform: 'translateX(-50%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(50%)' },
  })

  return (
    <Fragment>
      {navDrawerTransition.map(
        ({ item, key, props }) =>
          item && <NavDrawer key={key} style={props} toggleNav={toggleNav} />
      )}
      <MenuButton aria-label="Nav Menu" isActive={visible} onClick={toggleNav}>
        <Box>
          <Lines isActive={visible} />
        </Box>
      </MenuButton>
    </Fragment>
  )
}

NavMobile.propTypes = {
  visible: PropTypes.bool,
  toggleNav: PropTypes.func,
}

export default NavMobile

import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import { IconContainer, IconLink } from './styles'

const NavIcon = ({ to, icon, mouseOver }) => {
  const containerRef = useRef(null)

  return (
    <IconContainer
      ref={containerRef}
      onFocus={() => mouseOver(containerRef.current)}
      onMouseOver={() => mouseOver(containerRef.current)}
    >
      <IconLink
        aria-label={`Visit ${to}`}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        activeClassName="active"
      >
        {icon}
      </IconLink>
    </IconContainer>
  )
}

NavIcon.propTypes = {
  to: PropTypes.string,
  mouseOver: PropTypes.func,
}

NavIcon.defaultProps = {
  to: '/',
}

export default NavIcon

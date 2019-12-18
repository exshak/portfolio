import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import { CustomLink, LinkContainer } from './styles'

const NavLink = ({ text, to, mouseOver }) => {
  const containerRef = useRef(null)

  return (
    <LinkContainer
      ref={containerRef}
      onFocus={() => mouseOver(containerRef.current)}
      onMouseOver={() => mouseOver(containerRef.current)}
    >
      <CustomLink to={to} activeClassName="active">
        {text}
      </CustomLink>
    </LinkContainer>
  )
}

NavLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  mouseOver: PropTypes.func,
}

NavLink.defaultProps = {
  to: '/',
}

export default NavLink

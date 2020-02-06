import PropTypes from 'prop-types'
import React, { Fragment, useRef } from 'react'
import { animations } from '../common/animations'
import { CustomLink, LinkContainer } from './styles'

const NavLink = ({ nav, mouseOver }) => {
  const navLinksTrail = animations.verticalTrail(nav.length, '20px', 300)

  return (
    <Fragment>
      {navLinksTrail.map((props, index) => {
        const containerRef = useRef(null)

        return (
          <LinkContainer
            style={props}
            key={nav[index].to}
            ref={containerRef}
            onFocus={() => mouseOver(containerRef.current)}
            onMouseOver={() => mouseOver(containerRef.current)}
          >
            <CustomLink to={nav[index].to} activeClassName="active">
              {nav[index].text}
            </CustomLink>
          </LinkContainer>
        )
      })}
    </Fragment>
  )
}

NavLink.propTypes = {
  nav: PropTypes.array,
  mouseOver: PropTypes.func,
}

export default NavLink

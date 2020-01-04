import PropTypes from 'prop-types'
import React, { Fragment, useRef } from 'react'
import { config, useTrail } from 'react-spring'
import { CustomLink, LinkContainer } from './styles'

const NavLink = ({ nav, mouseOver }) => {
  const navItemsTrail = useTrail(nav.length, {
    config: config.wobbly,
    delay: 300,
    opacity: 1,
    transform: 'translateY(0px)',

    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
  })

  return (
    <Fragment>
      {navItemsTrail.map((props, index) => {
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

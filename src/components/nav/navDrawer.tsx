import PropTypes from 'prop-types'
import React, { useLayoutEffect } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { animations } from '../common/animations'
import { SiteMetadata } from '../common/siteMetadata'
import ThemeToggle from '../theme'
import {
  CustomLink,
  DrawerContainer,
  DrawerLinks,
  IconContainer,
  IconLink,
  LinkContainer,
} from './styles'

const NavDrawer = ({ toggleNav, ...rest }) => {
  const {
    navigation: nav,
    social: { github, linkedin },
  } = SiteMetadata()

  const navLinksTrail = animations.verticalTrail(nav.length, '20px', 300)

  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'visible')
  }, [])

  return (
    <DrawerContainer {...rest}>
      <DrawerLinks>
        {navLinksTrail.map((props, index) => (
          <LinkContainer key={nav[index].to} style={props}>
            <CustomLink
              to={nav[index].to}
              onClick={toggleNav}
              activeClassName="active"
            >
              {nav[index].text}
            </CustomLink>
          </LinkContainer>
        ))}
        <IconContainer>
          <IconLink
            aria-label={`Visit ${github}`}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleNav}
          >
            <FaGithub />
          </IconLink>
          <IconLink
            aria-label={`Visit ${linkedin}`}
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleNav}
          >
            <FaLinkedinIn />
          </IconLink>
        </IconContainer>
      </DrawerLinks>
      <ThemeToggle mobile="true" />
    </DrawerContainer>
  )
}

NavDrawer.propTypes = {
  toggleNav: PropTypes.func,
}

export default NavDrawer

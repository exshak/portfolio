import { Link } from 'gatsby'
import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiteMetadata } from '../common/siteMetadata'
import {
  DrawerContainer,
  DrawerLink,
  DrawerList,
  DrawerLogo,
  IconList,
} from './styles'

const NavDrawer = ({ animation, toggleNav }) => {
  const { navArray } = SiteMetadata()

  return (
    <DrawerContainer
      style={{
        transform: animation.negative.interpolate(
          y => `translate3d(0, -${y}vh, 0)`
        ),
      }}
    >
      <DrawerList>
        <DrawerLink onClick={toggleNav}>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </DrawerLink>
        {navArray.map((item, key) => (
          <DrawerLink key={key} onClick={toggleNav}>
            <Link to={item.to} activeClassName="active">
              {item.text}
            </Link>
          </DrawerLink>
        ))}
      </DrawerList>
      <IconList>
        <DrawerLink onClick={toggleNav}>
          <a
            href="https://github.com/exshak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </DrawerLink>
        <DrawerLink onClick={toggleNav}>
          <a
            href="https://www.linkedin.com/in/exshak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </DrawerLink>
      </IconList>
      <DrawerLogo src="../../assets/images/logo.png" alt="exshak - Logo" />
    </DrawerContainer>
  )
}

export default NavDrawer

import { Link } from 'gatsby'
import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import logo from '../../assets/images/logo.svg'
import { SiteMetadata } from '../common/siteMetadata'
import {
  DrawerContainer,
  DrawerLink,
  DrawerList,
  DrawerLogo,
  IconList,
} from './styles'

const NavDrawer = ({ animation, toggleNav }) => {
  const { navigation, social } = SiteMetadata()

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
        {navigation.map((item, key) => (
          <DrawerLink key={key} onClick={toggleNav}>
            <Link to={item.to} activeClassName="active">
              {item.text}
            </Link>
          </DrawerLink>
        ))}
      </DrawerList>
      <IconList>
        <DrawerLink onClick={toggleNav}>
          <a href={social.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </DrawerLink>
        <DrawerLink onClick={toggleNav}>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </DrawerLink>
      </IconList>
      <DrawerLogo src={logo} alt="exshak - Logo" />
    </DrawerContainer>
  )
}

export default NavDrawer

import { Link } from 'gatsby'
import React, { useState } from 'react'
import { FaBars, FaGithub, FaLinkedinIn, FaTimes } from 'react-icons/fa'
import { animated, config, useTrail } from 'react-spring'
import logo from '../../assets/images/default.svg'
import { SiteMetadata } from '../common/siteMetadata'
import NavIcon from './navIcon'
import NavLink from './navLink'
import { Bar, LinkList, Logo, MenuButton, NavContainer } from './styles'

const Nav = ({ animation, toggleNav, visible }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
  })

  const [active, setActive] = useState(0)

  const mouseOver = target => {
    const barRect = target.getBoundingClientRect()

    setPosition({
      left: barRect.left + window.scrollX - (window.innerWidth - barRect.width),
      width: barRect.width,
    })
  }

  const mouseEnterList = () => {
    setActive(1)
  }

  const mouseLeaveList = () => {
    setActive(0)
  }

  const { navigation, social } = SiteMetadata()

  const navItemsTrail = useTrail(navigation.length, {
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
    <NavContainer>
      <Link to="/">
        <Logo
          style={{
            transform: animation.positive.interpolate(
              y => `translate3d(0, ${y}rem, 0)`
            ),
          }}
          src={logo}
          alt="exshak - Logo"
        />
      </Link>
      <LinkList
        onFocus={mouseEnterList}
        onBlur={mouseLeaveList}
        onMouseOver={mouseEnterList}
        onMouseOut={mouseLeaveList}
      >
        {navItemsTrail.map((props, index) => (
          <animated.div key={navigation[index]} style={props}>
            <NavLink
              key={navigation[index]}
              to={navigation[index].to}
              text={navigation[index].text}
              mouseOver={mouseOver}
            />
          </animated.div>
        ))}
        <NavIcon to={social.github} icon={<FaGithub />} mouseOver={mouseOver} />
        <NavIcon
          to={social.linkedin}
          icon={<FaLinkedinIn />}
          mouseOver={mouseOver}
        />
      </LinkList>
      <Bar active={active} position={position} />
      <MenuButton aria-label="Nav Menu" onClick={toggleNav}>
        {!visible ? <FaBars /> : <FaTimes />}
      </MenuButton>
    </NavContainer>
  )
}

export default Nav

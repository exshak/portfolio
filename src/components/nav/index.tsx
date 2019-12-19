import { Link } from 'gatsby'
import React, { useState } from 'react'
import { FaBars, FaGithub, FaLinkedinIn, FaTimes } from 'react-icons/fa'
import NavIcon from './navIcon'
import NavLink from './navLink'
import { Bar, LinkList, Logo, MenuButton, NavContainer } from './styles'

const navArray = [{ text: 'Home', to: '/' }]

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

  return (
    <NavContainer>
      <Link to="/">
        <Logo
          style={{
            transform: animation.positive.interpolate(
              y => `translate3d(0, ${y}rem, 0)`
            ),
          }}
          src="../../assets/images/logo.png"
          alt="exshak - Logo"
        />
      </Link>
      <LinkList
        onFocus={mouseEnterList}
        onBlur={mouseLeaveList}
        onMouseOver={mouseEnterList}
        onMouseOut={mouseLeaveList}
      >
        {navArray.map((item, key) => (
          <NavLink
            key={key}
            to={item.to}
            text={item.text}
            mouseOver={mouseOver}
          />
        ))}
        <NavIcon
          to="https://github.com/exshak"
          icon={<FaGithub />}
          mouseOver={mouseOver}
        />
        <NavIcon
          to="https://www.linkedin.com/in/exshak"
          icon={<FaLinkedinIn />}
          mouseOver={mouseOver}
        />
      </LinkList>
      <Bar active={active} position={position} />
      <MenuButton onClick={toggleNav}>
        {!visible ? <FaBars /> : <FaTimes />}
      </MenuButton>
    </NavContainer>
  )
}

export default Nav

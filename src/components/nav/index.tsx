import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { config, useSpring } from 'react-spring'
import { SiteMetadata } from '../common/siteMetadata'
import ThemeToggle from '../theme'
import NavIcon from './navIcon'
import NavLink from './navLink'
import NavLogo from './navLogo'
import NavMobile from './navMobile'
import { Bar, NavContainer, NavLinks, NavNormal } from './styles'

const Nav = () => {
  const [active, setActive] = useState(0)
  const [mobile, setMobile] = useState(null)
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
  })

  const mouseEnterList = () => setActive(1)
  const mouseLeaveList = () => setActive(0)
  const toggleNav = () => setVisible(!visible)

  const mouseOver = target => {
    const barRect = target.getBoundingClientRect()
    setPosition({
      left: barRect.left + window.scrollX - (window.innerWidth - barRect.width),
      width: barRect.width,
    })
  }

  const changeMobile = () => {
    window.matchMedia('(max-width: 600px)').matches
      ? setMobile(true)
      : setMobile(false)
  }

  useEffect(() => {
    changeMobile()
    window.addEventListener('resize', changeMobile)
    return () => window.removeEventListener('resize', changeMobile)
  }, [])

  const {
    title,
    navigation,
    social: { github, linkedin: link },
  } = SiteMetadata()

  const NavSpring = useSpring({
    config: config.wobbly,
    from: { height: '0rem', opacity: 0 },
    height: mobile ? '6rem' : '7rem',
    opacity: 1,
  })

  return (
    <NavContainer style={NavSpring}>
      <NavLogo title={title} />
      {!mobile ? (
        <NavNormal>
          <NavLinks
            onFocus={mouseEnterList}
            onBlur={mouseLeaveList}
            onMouseOver={mouseEnterList}
            onMouseOut={mouseLeaveList}
          >
            <NavLink nav={navigation} mouseOver={mouseOver} />
            <NavIcon to={github} icon={<FaGithub />} mouseOver={mouseOver} />
            <NavIcon to={link} icon={<FaLinkedinIn />} mouseOver={mouseOver} />
          </NavLinks>
          <Bar active={active} position={position} />
          <ThemeToggle mobile="" />
        </NavNormal>
      ) : (
        <NavMobile visible={visible} toggleNav={toggleNav} />
      )}
    </NavContainer>
  )
}

export default Nav

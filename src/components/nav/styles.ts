import { Link } from 'gatsby'
import { animated } from 'react-spring'
import styled from 'styled-components'

export const NavContainer = styled(animated.nav)`
  background-color: var(--background);
  box-shadow: 0 0.5rem 2rem var(--shadow-color);
  left: 0;
  position: fixed;
  top: -1px;
  transition: background 0.2s ease-out;
  width: 100vw;
  z-index: 10;
`

export const Logo = styled(animated.img)`
  left: calc(100vw / 12);
  margin-top: 1.8rem;
  position: absolute;
  top: 0;
  width: 14rem;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    width: 10rem;
  }
`

export const NavNormal = styled.div`
  width: 100%;
`

export const NavLinks = styled.div`
  display: flex;
  height: 7rem;
  position: absolute;
  right: calc(100vw / 12);
`

export const LinkContainer = styled(animated.div)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 2rem;
  padding: 2rem 0;

  .active {
    color: var(--primary);
    display: block;
    pointer-events: none;
    position: relative;
  }
`

export const CustomLink = styled(Link)`
  color: var(--text);
  ${({ theme }) => theme.transitions.slowSnap};
`

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
`

export const IconLink = styled.a`
  padding: 2rem 1rem;
  ${({ theme }) => theme.transitions.slowSnap};

  svg {
    fill: var(--text);
  }
`

export const Bar = styled.span`
  background-color: var(--primary);
  height: 0.2rem;
  position: absolute;
  right: 0;
  top: 6.8rem;
  opacity: ${({ active }) => active};
  width: ${({ position }) => position.width}px;
  ${({ theme }) => theme.transitions.slowSnap};

  transform: translateX(
    ${({ position, active }) => (active > 0 ? position.left : 0)}px
  );
`

const buttonWidth = 20

export const MenuButton = styled.button`
  cursor: pointer;
  display: inline-block;
  height: 6rem;
  outline: none;
  padding: ${buttonWidth * 0.375}px;
  position: absolute;
  right: calc(100vw / 24);
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  transition-timing-function: linear;
`

export const Box = styled.div`
  height: ${buttonWidth * 0.6}px;
  width: ${buttonWidth}px;
`

const active = `
  transform: rotate(225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
`

const activeBefore = `
  top: 0;
  opacity: 0;
  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
`

const activeAfter = `
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
`

export const Lines = styled.span`
  background-color: var(--text);
  border-radius: ${buttonWidth * 0.1}px;
  display: block;
  height: ${buttonWidth * 0.1}px;
  margin-top: ${-buttonWidth * 0.05}px;
  position: absolute;
  top: 50%;
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  width: ${buttonWidth}px;
  ${({ isActive }) => isActive && active};

  &::before,
  &::after {
    background-color: var(--text);
    border-radius: ${buttonWidth * 0.1}px;
    content: '';
    display: block;
    height: ${buttonWidth * 0.1}px;
    position: absolute;
    width: ${buttonWidth}px;
  }

  &::before {
    top: ${-buttonWidth * 0.25}px;
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
    ${({ isActive }) => isActive && activeBefore};
  }

  &::after {
    bottom: ${-buttonWidth * 0.25}px;
    transition: bottom 0.1s 0.25s ease-in,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    ${({ isActive }) => isActive && activeAfter};
  }
`

export const DrawerContainer = styled(animated.div)`
  align-items: center;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  /* min-height: calc(var(--vh, 1vh) * 100); */
  padding: 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
`

export const DrawerLinks = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`

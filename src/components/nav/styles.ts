import { Link } from 'gatsby'
import { animated } from 'react-spring'
import styled from 'styled-components'

export const NavContainer = styled.nav`
  height: 5rem;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1100;

  ${props => props.theme.breakpoints.desktop} {
    height: 7rem;
  }
`

export const Logo = styled(animated.img)`
  left: calc(100vw / 12);
  position: absolute;
  top: 0;
  width: 5rem;

  ${props => props.theme.breakpoints.desktop} {
    width: 7rem;
  }
`

export const LinkList = styled.ul`
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: none;
  height: 7rem;
  position: absolute;
  right: calc(100vw / 12);

  ${props => props.theme.breakpoints.desktop} {
    display: flex;
  }
`

export const Bar = styled.span`
  background-color: ${props => props.theme.colors.blue};
  height: 0.2rem;
  position: absolute;
  right: 0;
  top: 6.8rem;
  opacity: ${({ active }) => active};
  width: ${({ position }) => position.width}px;
  ${props => props.theme.transitions.slowSnap};

  transform: translateX(
    ${({ position, active }) => (active > 0 ? position.left : 0)}px
  );
`

export const MenuButton = styled.button`
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  cursor: pointer;
  display: flex;
  height: 5rem;
  position: absolute;
  right: calc(100vw / 12);

  svg {
    fill: ${props => props.theme.colors.white};
  }

  ${props => props.theme.breakpoints.desktop} {
    display: none;
  }
`

export const LinkContainer = styled.li`
  align-items: center;
  display: flex;
  height: 7rem;
  margin-left: 5rem;
  position: relative;

  .active {
    color: ${props => props.theme.colors.blue};
    display: block;
    pointer-events: none;
    position: relative;
  }
`

export const CustomLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  height: 100%;
  line-height: 7rem;
  position: relative;
  ${props => props.theme.transitions.slowSnap};
`

export const IconContainer = styled.li`
  align-items: center;
  display: flex;
  height: 7rem;
  margin-left: 5rem;
  position: relative;
`

export const IconLink = styled.a`
  height: 100%;
  line-height: 7rem;
  position: relative;
  ${props => props.theme.transitions.slowSnap};

  svg {
    /* FIXME: */
    font-size: 1.6rem;
    fill: ${props => props.theme.colors.white};
  }
`

export const DrawerContainer = styled(animated.div)`
  background-color: ${props => props.theme.colors.blue};
  height: 100vh;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;

  ${props => props.theme.breakpoints.desktop} {
    display: none;
  }
`

export const DrawerList = styled.ul`
  padding: 7rem calc(100vw / 12) 0rem;
  position: relative;
  text-align: right;
  width: calc(100vw - ((100vw / 12) * 2));
`

export const IconList = styled.ul`
  background-color: rgba(0, 0, 0, 0.2);
  height: calc(100% - 21rem);
  padding: 3.5rem calc(100vw / 12) 7rem;
  position: relative;
  text-align: right;
  width: calc(100vw - ((100vw / 12) * 2));
`

export const DrawerLink = styled.li`
  color: ${props => props.theme.colors.white};
  padding-bottom: 3.5rem;

  .active {
    color: ${props => props.theme.colors.black};
    opacity: 0.5;
  }
`

export const DrawerLogo = styled.img`
  bottom: -1rem;
  left: 0;
  opacity: 0.25;
  position: fixed;
  width: 50%;
  z-index: 5;
`

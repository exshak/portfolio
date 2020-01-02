import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import styled from 'styled-components'

const TextLink = ({ to, text }) => (
  <StyledLink to={to}>
    {text} <FaArrowRight />
  </StyledLink>
)

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  display: block;
  margin-bottom: 2rem;
  position: relative;
  transform: translate3d(0rem, 0, 0);
  ${props => props.theme.transitions.slowSnap}

  svg {
    color: ${props => props.theme.colors.blue};
    margin: 0 0 -0.3rem;
    transform: translate3d(0.5rem, 0, 0);
    ${props => props.theme.transitions.slowSnap}
  }

  ${props => props.theme.breakpoints.tablet} {
    &:hover,
    &:focus {
      color: ${props => props.theme.colors.blue};
      transform: translate3d(-0.5rem, 0, 0);
      ${props => props.theme.transitions.slowSnap}

      svg {
        transform: translate3d(1.5rem, 0, 0);
        ${props => props.theme.transitions.slowSnap}
      }
    }
  }
`

TextLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
}

TextLink.defaultProps = {
  to: '/',
}

export default TextLink

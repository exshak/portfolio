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
  color: var(--text);
  display: block;
  margin-bottom: 2rem;
  position: relative;
  transform: translate3d(0rem, 0, 0);
  ${({ theme }) => theme.transitions.slowSnap}

  svg {
    color: var(--primary);
    margin: 0 0 -0.3rem;
    transform: translate3d(0.5rem, 0, 0);
    ${({ theme }) => theme.transitions.slowSnap}
  }

  &:hover,
  &:focus {
    color: var(--primary);
    transform: translate3d(-0.5rem, 0, 0);
    ${({ theme }) => theme.transitions.slowSnap}

    svg {
      transform: translate3d(1.5rem, 0, 0);
      ${({ theme }) => theme.transitions.slowSnap}
    }
  }
`

TextLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

TextLink.defaultProps = {
  to: '/',
}

export default TextLink

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

export const PrimaryButton = ({ text }) => (
  <Button type="submit">
    <p>{text}</p>
    <ButtonSpan />
  </Button>
)

const Button = styled.button`
  background-color: var(--primary);
  color: var(--white);
  cursor: pointer;
  float: right;
  padding: 1.5rem 8rem;
  position: relative;
  width: auto;
  z-index: 0;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    width: 100%;
  }
`

const ButtonSpan = styled.span`
  background-color: var(--background);
  height: 100%;
  left: 0;
  opacity: 0.05;
  position: absolute;
  top: 0;
  transform: scale3d(1, 0, 1);
  transform-origin: 50% 100%;
  width: 100%;
  z-index: -1;
  ${({ theme }) => theme.transitions.mediumSnap}

  ${Button}:hover & {
    transform: scale3d(1, 1, 1);
  }
`

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
}

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
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  float: right;
  padding: 1.5rem 8rem;
  position: relative;
  width: 100%;
  z-index: 0;

  ${props => props.theme.breakpoints.tablet} {
    width: auto;
  }
`

const ButtonSpan = styled.span`
  background-color: ${props => props.theme.colors.black};
  height: 100%;
  left: 0;
  opacity: 0.05;
  position: absolute;
  top: 0;
  transform: scale3d(1, 0, 1);
  transform-origin: 50% 100%;
  width: 100%;
  z-index: -1;
  ${props => props.theme.transitions.mediumSnap}

  ${Button}:hover & {
    transform: scale3d(1, 1, 1);
  }
`

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
}

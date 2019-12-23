import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

export const TextInput = ({ id, label, required }) => (
  <Input>
    <label htmlFor={id}>
      <p>{label}</p>
    </label>
    <input type="text" name={id} id={id} required={required} />
  </Input>
)

export const EmailInput = ({ id, label, required }) => (
  <Input>
    <label htmlFor={id}>
      <p>{label}</p>
    </label>
    <input type="email" name={id} id={id} required={required} />
  </Input>
)

export const TextArea = ({ id, label, required }) => (
  <Input>
    <label htmlFor={id}>
      <p>{label}</p>
    </label>
    <textarea name={id} id={id} required={required} />
  </Input>
)

const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  p {
    background-color: ${props => props.theme.colors.black};
    padding: 0 1rem;
    transform: translate(1rem, 1rem);
    width: fit-content;
  }

  input,
  textarea {
    border: 0.1rem solid ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.white};
    padding: 2rem;
  }
`

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
}

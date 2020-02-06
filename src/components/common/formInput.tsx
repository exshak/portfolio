import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

export const TextInput = ({ id, label, required }) => (
  <Input>
    <label htmlFor={id}>
      <p>{label}</p>
    </label>
    <input type="text" id={id} name={id} required={required} />
  </Input>
)

export const EmailInput = ({ id, label, required }) => (
  <Input>
    <label htmlFor={id}>
      <p>{label}</p>
    </label>
    <input type="email" id={id} name={id} required={required} />
  </Input>
)

export const TextArea = ({ id, label, required }) => (
  <Input>
    <label htmlFor={id}>
      <p>{label}</p>
    </label>
    <textarea id={id} name={id} required={required} />
  </Input>
)

const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  p {
    background-color: var(--background);
    padding: 0 1rem;
    transform: translate(1rem, 1rem);
    width: fit-content;
  }

  input,
  textarea {
    border: 0.1rem solid var(--text);
    color: var(--text);
    padding: 2rem;
  }
`

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
}

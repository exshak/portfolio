import PropTypes from 'prop-types'
import React from 'react'
import { animations } from '../common/animations'
import { PrimaryButton } from '../common/button'
import { ContentContainer } from '../common/container'
import { EmailInput, TextArea, TextInput } from '../common/formInput'
import TitleCard from '../common/titleCard'

const Contact = ({ name }) => (
  <ContentContainer style={animations.verticalSlide('15rem', 0)}>
    <TitleCard title="Contact" copy="Leave a message and say hello!" />
    <form
      name={name}
      action="/"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value={name} />

      <TextInput id="name" label="Your name" required />
      <EmailInput id="email" label="Your email" required />
      <TextArea id="message" label="Message" required />
      <PrimaryButton text="Send" />
    </form>
  </ContentContainer>
)

Contact.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Contact

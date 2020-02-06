import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const TitleCard = ({ title, copy, link, linkText, icon }) => (
  <Card>
    <h1>{title}</h1>
    <p>{copy}</p>
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {linkText} {icon}
      </a>
    )}
  </Card>
)

const Card = styled.div`
  margin-bottom: 5rem;

  h1 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 2rem;
  }

  a {
    color: var(--primary);

    svg {
      transform: translate(0.75rem, 0.25rem);
    }
  }
`

TitleCard.propTypes = {
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkText: PropTypes.string,
  icon: PropTypes.object,
}

export default TitleCard

import React, { useEffect, useState } from 'react'
import { animated, config, useTransition } from 'react-spring'
import { WordsContainer } from './styles'

const WordsWheel = ({ words }) => {
  const [index, setIndex] = useState(0)

  const wordsTransition = useTransition(words[index], span => span.id, {
    config: config.stiff,
    delay: 450,
    duration: 100,

    from: {
      left: 0,
      margin: 0,
      opacity: 0,
      position: 'absolute',
      top: 0,
      transform: 'translateY(10px)',
    },

    enter: {
      opacity: 1,
      transform: 'translateY(0px)',
    },

    leave: {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
  })

  useEffect(
    () =>
      void setInterval(
        () => setIndex(current => (current + 1) % words.length),
        2500
      ),
    []
  )

  return (
    <WordsContainer>
      <i style={{ visibility: 'hidden' }}>full-stack</i>
      {wordsTransition.map(({ key, item, props }) => (
        <animated.span key={key} style={props}>
          {item.text}
        </animated.span>
      ))}
    </WordsContainer>
  )
}

export default WordsWheel

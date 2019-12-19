import { config, useSpring } from 'react-spring'

export const animations = {
  verticleSlide: (from, delay) =>
    useSpring({
      opacity: 1,
      transform: 'translate3d(0, 0rem, 0)',
      from: { opacity: 0, transform: `translate3d(0, ${from}, 0)` },
      config: config.slow,
      delay: delay,
    }),

  horizontalSlide: (from, delay) =>
    useSpring({
      opacity: 1,
      transform: 'translate3d(0rem, 0, 0)',
      from: { opacity: 0, transform: `translate3d(${from}, 0, 0)` },
      config: config.slow,
      delay: delay,
    }),
}

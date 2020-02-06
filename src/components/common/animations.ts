import { config, useSpring, useTrail } from 'react-spring'

export const animations = {
  verticalSlide: (from, delay) =>
    useSpring({
      config: config.snap,
      delay: delay,
      from: { opacity: 0, transform: `translate3d(0, ${from}, 0)` },
      opacity: 1,
      transform: 'translate3d(0, 0rem, 0)',
    }),

  horizontalSlide: (from, delay) =>
    useSpring({
      config: config.snap,
      delay: delay,
      from: { opacity: 0, transform: `translate3d(${from}, 0, 0)` },
      opacity: 1,
      transform: 'translate3d(0rem, 0, 0)',
    }),

  verticalTrail: (data, from, delay) =>
    useTrail(data, {
      config: config.wobbly,
      delay: delay,
      from: {
        cursor: 'pointer',
        display: 'flex',
        opacity: 0,
        transform: `translateY(${from})`,
      },
      opacity: 1,
      transform: 'translateY(0px)',
    }),
}

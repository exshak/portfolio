import { animated } from 'react-spring'
import styled from 'styled-components'

const Container = styled(animated.div)`
  display: grid;
  grid-column: 2 / 12;
  grid-row-gap: 8rem;
  margin-bottom: 8rem;
  position: relative;

  ${props => props.theme.breakpoints.tablet} {
    grid-column: 3 / 11;
  }
`

export default Container

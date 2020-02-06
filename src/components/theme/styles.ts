import { animated } from 'react-spring'
import styled from 'styled-components'

export const Container = styled(animated.div)`
  margin: ${({ mobile }) => (mobile ? '1rem 0' : '2.2rem 2rem')};
  position: ${({ mobile }) => (mobile ? 'relative' : 'absolute')};
  right: ${({ mobile }) => (mobile ? null : '0')};
  transform: ${({ mobile }) => (mobile ? 'scale(1)' : 'scale(0.7)')};
  top: 0;

  & input {
    position: absolute;
    right: -999rem;

    &:checked + .toggle {
      background-color: var(--primary);

      & .toggle_handler {
        background-color: #ffe5b5;
        transform: translate3d(24px, 0, 0) rotate(0);

        & .crater {
          opacity: 1;
        }
      }

      & .star-1 {
        height: 1px;
        width: 1px;
      }

      & .star-2 {
        height: 2px;
        transform: translate3d(-5px, 0, 0);
        width: 2px;
      }

      & .star-3 {
        height: 1px;
        transform: translate3d(-7px, 0, 0);
        width: 1px;
      }

      & .star-4,
      & .star-5,
      & .star-6 {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }

      & .star-4 {
        transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }

      & .star-5 {
        transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }

      & .star-6 {
        transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }
    }
  }
`

export const Label = styled.label`
  background-color: var(--primary-lighter);
  border-radius: 90px;
  cursor: pointer;
  display: inline-block;
  height: 26px;
  position: relative;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  width: 50px;

  & .star {
    background-color: #ffffff;
    border-radius: 50%;
    position: absolute;
    transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  & .star-1 {
    height: 2px;
    left: 24px;
    top: 6px;
    width: 13px;
    z-index: 0;
  }

  & .star-2 {
    height: 2px;
    left: 27px;
    top: 13px;
    width: 20px;
    z-index: 1;
  }

  & .star-3 {
    height: 2px;
    left: 23px;
    top: 20px;
    width: 20px;
    z-index: 0;
  }

  & .star-4,
  & .star-5,
  & .star-6 {
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  & .star-4 {
    height: 2px;
    left: 13px;
    top: 6px;
    transform: translate3d(3px, 0, 0);
    width: 2px;
    z-index: 0;
  }

  & .star-5 {
    height: 3px;
    left: 7px;
    top: 13px;
    transform: translate3d(3px, 0, 0);
    width: 3px;
    z-index: 0;
  }

  & .star-6 {
    height: 2px;
    left: 17px;
    top: 12px;
    transform: translate3d(3px, 0, 0);
    width: 2px;
    z-index: 0;
  }
`

export const Span = styled.span`
  background-color: #ffcf96;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  display: inline-block;
  height: 20px;
  left: 3px;
  position: relative;
  top: 3px;
  transform: rotate(-45deg);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  width: 20px;
  z-index: 1;

  & .crater {
    background-color: #e8cda5;
    border-radius: 100%;
    opacity: 0;
    position: absolute;
    transition: opacity 200ms ease-in-out;
  }

  & .crater-1 {
    height: 3px;
    left: 9px;
    top: 14px;
    width: 2px;
  }

  & .crater-2 {
    height: 5px;
    left: 5px;
    top: 5px;
    width: 5px;
  }

  & .crater-3 {
    height: 3px;
    left: 14px;
    top: 7px;
    width: 3px;
  }
`

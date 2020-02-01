import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      [key: string]: string
    }
    colors: {
      [key: string]: string | {}
    }
    transitions: {
      [key: string]: string
    }
  }
}

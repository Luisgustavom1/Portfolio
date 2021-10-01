import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
      title: string,
      colors: {
        background: string,
        primaryText: string,
        secondary: string
      },
      blue300: string,
      blue100: string,
      blue50: string,
      blue: string
    }
}
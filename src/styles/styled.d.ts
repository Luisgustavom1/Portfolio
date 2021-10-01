import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            background: string,
            primary: string,
            secondary: string
        },
        green: string,
        gray300: string,
        gray100: string,
        gray50: string,
        dark: string,
        white: string,
        blue50: string,
        blue: string
    }
}
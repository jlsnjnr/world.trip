import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    light: {
      "50": "#fff",
      "100": "#F5F8FA",
      "150": "#DADADA"
    },
    dark: {
      "50": "#000000",
      "100": "#999999",
      "150": "rgba(151, 153, 153, 0.5)",
      "200": "#47585B",
      "500": "linear-gradient(0deg, rgba(28, 20, 1, .6), rgba(28, 20, 1, .8))"
    },
    highlight: {
      "500": "#FFBA08",
      "300": "rgba(255, 186, 8, 0.5)"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'light.100',
        color: 'dark.200'
      }
    }
  }
});
import { theme as baseTheme, extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  initialColorMode: 'light',
  // useSystemColorMode: true,
  colors: {
    // brand: {
    //   50: '#ffe4eb',
    //   100: '#feb7c6',
    //   200: '#f689a1',
    //   300: '#f15a7b',
    //   400: '#ec2c55',
    //   500: '#d3133c',
    //   600: '#a50c2e',
    //   700: '#770620',
    //   800: '#490113',
    //   900: '#1e0006',
    // },
    primary: baseTheme.colors.blue,
    secondary: baseTheme.colors.red,
    background: baseTheme.colors.gray,
    foreground: baseTheme.colors.gray,
  },
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
});

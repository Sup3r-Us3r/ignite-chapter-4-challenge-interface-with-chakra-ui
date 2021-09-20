import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '50': '#EEEEF2',
      '100': '#D1D1D1',
      '200': '#B3B5C6',
      '300': '#9699B0',
      '400': '#797D9A',
      '500': '#616480',
      '600': '#4B4D63',
      '700': '#353646',
      '800': '#1F2029',
      '900': '#181B23',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.50',
      },
    },
  },
});

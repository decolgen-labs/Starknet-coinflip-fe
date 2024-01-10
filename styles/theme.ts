import { extendTheme } from '@chakra-ui/react';
import { StyleFunctionProps } from '@chakra-ui/system';
export const colors = {
  primary: {
    100: '#D5F0DB',
    200: '#81D192',
    300: '#57C16E',
    400: '#2DB24A',
    500: '#248E3B',
    600: '#1B6B2C',
  },
  secondary: {
    100: '#FF7D7D',
    200: '#FF5C5C',
  },
};
const styles = {
  // eslint-disable-next-line no-unused-vars
  global: (props: StyleFunctionProps) => ({
    body: {},
  }),
};
const theme = extendTheme({
  colors,
  styles,
  components: {
    Text,
  },
});

export default theme;

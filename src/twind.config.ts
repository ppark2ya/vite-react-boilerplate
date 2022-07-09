import { setup } from 'twind';
import * as colors from 'twind/colors';

setup({
  darkMode: 'class',
  hash: true,
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Georgia', 'serif'],
    },
    extend: {
      colors: {
        ...colors,
      },
      backgroundColor: {
        ...colors,
        tooltip: '#3e3434',
      },
      borderColor: {
        ...colors,
        tooltip: '#3e3434',
      },
    },
  },
});

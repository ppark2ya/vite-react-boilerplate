import { apply, css, theme } from 'twind/css';

const globalStyles = css({
  ':global': {
    body: {
      'background-color': theme('backgroundColor.tooltip'),
      '&:hover': apply`bg-red-500`,
    },
    p: {
      color: theme('colors.blue.500'),
      '&:hover': apply`text-gray-800`,
    },
  },
});

export default globalStyles;

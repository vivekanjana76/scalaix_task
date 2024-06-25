import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h1: {
      fontFamily: 'Inter',
      fontSize: '30px',
      fontWeight: 600,
      lineHeight: '38px',
    },
    h6: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
    },
    body1: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
    },
  },
});

export default theme;

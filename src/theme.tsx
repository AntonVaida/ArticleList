import { createTheme } from '@mui/material';
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {main: '#1565c0'},
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
  }
});
export default theme;
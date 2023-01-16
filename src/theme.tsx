import { createTheme } from '@mui/material';
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {main: '#E5E5E5'},
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          color: '#363636',
          fontFamily: 'Montserrat',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
          color: '#363636',
          fontSize: '16px',
        }
      }
    }
  }
});
export default theme;
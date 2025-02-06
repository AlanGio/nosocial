import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#f25f00',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#0091f2',
      dark: '#ba000d',
      contrastText: '#000'
    }
  }
});

export default theme;

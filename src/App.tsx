import { CssBaseline, Container, ThemeProvider, Box } from '@mui/material';
import Home from './pages/home';
import Header from './components/Header';
import theme from './config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          sx={{
            border: '1px solid #ccc',
            padding: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.9)'
          }}
        >
          <Home />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;

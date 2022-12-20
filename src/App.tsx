import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './Styles/Theme/default';
import { GlobalStyle } from './Styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

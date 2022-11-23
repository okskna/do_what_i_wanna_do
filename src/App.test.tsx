import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { store } from './app/store';
import { GlobalStyle } from './styles';
import { theme } from './styles/theme';

test('renders App', () => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={{ theme }}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  );

  expect(screen.getByText(/learn/i)).toBeInTheDocument();
});

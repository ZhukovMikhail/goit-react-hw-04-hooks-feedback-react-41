import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import './index.css';
import App from './Components/App/App';
const theme = {
  green: '#17a417',
  grey: '#b0b0b0',
  red: '#c91117',
};
const container = document.getElementById('root');
createRoot(container).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

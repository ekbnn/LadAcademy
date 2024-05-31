import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CounterProvider, ThemeProvider } from '@/Context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

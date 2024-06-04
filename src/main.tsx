import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider, ThemeProvider } from '@/Context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

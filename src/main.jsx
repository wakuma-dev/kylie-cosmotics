import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RouteProvider from './context/RouteProvider.jsx'
import CartProvider from './context/CartProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthProvider.jsx'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <AuthProvider>
        <RouteProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </RouteProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);

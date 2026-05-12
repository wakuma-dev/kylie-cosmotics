import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RouteProvider from './context/RouteProvider.jsx'
import CartProvider from './context/CartProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthProvider.jsx'
import SearchProvider from './context/SearchProvider.jsx'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/kylie-cosmotics/">
      <AuthProvider>
        <RouteProvider>
          <CartProvider>
            <SearchProvider>
              <App />
            </SearchProvider>
          </CartProvider>
        </RouteProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);

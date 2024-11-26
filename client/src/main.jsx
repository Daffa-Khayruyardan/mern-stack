import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// import contexts
import ContactContextProvider from './context/contactContextProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactContextProvider>
      <App />
    </ContactContextProvider>
  </StrictMode>,
)

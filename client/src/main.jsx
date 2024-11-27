import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// import contexts
import ContactContextProvider from './context/contactContextProvider';
import AuthContextProvider from './context/authContextProvider.jsx';

createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
      <ContactContextProvider>
        <App />
      </ContactContextProvider>
    </AuthContextProvider>
)

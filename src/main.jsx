import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { KeranjangProvider } from './context/KeranjangContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { PesananProvider } from './context/PesananContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <KeranjangProvider>
        <PesananProvider>
          <App />
        </PesananProvider>
      </KeranjangProvider>
    </AuthProvider>
  </StrictMode>,
)
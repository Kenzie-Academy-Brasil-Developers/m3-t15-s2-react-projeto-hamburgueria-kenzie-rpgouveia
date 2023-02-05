import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Reset } from './styles/reset'
import { GlobalStyles } from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { HistoryContextProvider } from './context/HistoryContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HistoryContextProvider>
      <App />
    </HistoryContextProvider>
  </React.StrictMode>,
)

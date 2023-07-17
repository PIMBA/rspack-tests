import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './test-exports'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

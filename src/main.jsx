import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Zadanie1 from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Zadanie1 />
  </StrictMode>,
)

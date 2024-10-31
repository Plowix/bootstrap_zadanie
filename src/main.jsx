import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Zadanie1 from './Zadanie1.jsx'
import Zadanie2 from './Zadanie2.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Zadanie1 />
    <Zadanie2 />
  </StrictMode>,
)

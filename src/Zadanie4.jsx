import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './appStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Zadanie4/Cards';
import BackButton from './components/BackButton';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackButton/>
    <Cards/>
  </StrictMode>,
)

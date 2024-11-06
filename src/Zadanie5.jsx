import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './appStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alerts from './components/Zadanie5/Alerts';
import BackButton from './components/BackButton';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackButton/>
    <Alerts/>
  </StrictMode>,
)

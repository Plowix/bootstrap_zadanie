import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './appStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Zadanie1 from './components/Zadanie1.jsx'
import Zadanie2 from './components/Zadanie2.jsx';

import Navbar from './components/Zadanie3/Navbar.jsx';
import Footer from './components/Zadanie3/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />

    <Zadanie1 />
    <hr />
    <Zadanie2 />
    <hr />

    <Footer />
  </StrictMode>,
)

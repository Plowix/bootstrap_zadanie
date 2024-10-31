import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './appStyle.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header/>
      <MainSection/>
      <Contact/>
    </>
  )
}

export default App

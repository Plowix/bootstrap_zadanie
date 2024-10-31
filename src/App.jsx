import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './appStyle.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Contact from './components/Contact';

function Zadanie1() {
  return (
    <>
      <Header/>
      <MainSection/>
      <Contact/>
    </>
  )
}

export default Zadanie1;

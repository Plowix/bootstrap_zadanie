import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './appStyle.css';
import Header from './components/Zadanie1/Header';
import MainSection from './components/Zadanie1/MainSection';
import Contact from './components/Zadanie1/Contact';

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

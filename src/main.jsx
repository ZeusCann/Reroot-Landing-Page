import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Features from './Features.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Features />
  </StrictMode>,
)

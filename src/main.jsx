import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {gsap} from 'gsap'

gsap.registerPlugin(ScrollTrigger)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Landing from './componentes/Landing'
import injectContext from './store/AppContext'
import ListaDePersonajes from './componentes/ListaDePersonajes'
import Staff from './componentes/Staff'
import ListaDeHechizos from './componentes/ListaDeHechizos.JSX'


function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/personajes" element={<ListaDePersonajes/>} />
    <Route path="/staff" element={<Staff/>} />
    <Route path="/hechizos" element={<ListaDeHechizos/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default injectContext(App)

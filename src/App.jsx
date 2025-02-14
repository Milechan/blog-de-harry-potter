
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Landing from './componentes/Landing'
import injectContext from './store/AppContext'
import ListaDePersonajes from './componentes/ListaDePersonajes'
import imagendefondo from "./assets/Tcui.gif"
import ListaDeHechizos from './componentes/ListaDeHechizos.JSX'
import ListaDeStaff from './componentes/ListaDeStaff'
import Navbar from './componentes/Navbar'
import ListaDeFavoritos from './componentes/ListaDeFavoritos'
import InfoPersonaje from './componentes/InfoPersonaje'


function App() {


  return (
    <>
      <img className="fondoDePagina" src={imagendefondo} alt="fondoo" />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/personajes" element={<ListaDePersonajes />} />
          <Route path="/personaje/:id" element={<InfoPersonaje />} />
          <Route path="/staff" element={<ListaDeStaff />} />
          <Route path="/hechizos" element={<ListaDeHechizos />} />
          <Route path="/favoritos" element={<ListaDeFavoritos/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default injectContext(App)

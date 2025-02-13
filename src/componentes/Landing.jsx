import Navbar from "./Navbar"
import fondo from "../assets/HarryPotter.webp"

import "../styles/Landing.css"

const Landing =() => {
    return(<div>
        <div className="contenedor-img">
            <a href="https://www.harrypotter.com/es" target="_blank"><img className="harryPotter" src={fondo} alt="logodeharry" /></a>
        </div>
        
    </div>)
}
export default Landing
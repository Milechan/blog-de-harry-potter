import Navbar from "./Navbar"
import fondo from "../assets/HarryPotter.webp"

import "../styles/Landing.css"

const Landing =() => {
    return(<div>
        <Navbar/>
        <div className="contenedor-img">
            <img className="harryPotter" src={fondo} alt="logodeharry" />
        
        </div>
        
    </div>)
}
export default Landing
import '../styles/CartaDePersonaje.css'
import sinfoto from "../assets/sinfoto.jpg"
import "../styles/botonDeFavoritos.css"
import { useContext } from 'react'
import { Context } from '../store/AppContext'
import { useNavigate } from 'react-router'

const CartaDePersonaje = (props) => {
  
    const navigate = useNavigate()
    function verInfo(idPersonaje) {
        navigate(`/personaje/${idPersonaje}`)
    }
    return (
        <div className="card-personaje" onClick={() => {
            verInfo(props.personaje.id)
        }} key={props.personaje.id}>
            <div className="nombre">{props.personaje.name}</div>
            <img className="imagenPersonaje" src={props.personaje.image ? props.personaje.image : sinfoto} alt="imagen del personaje" />
        </div >
    )
}
export default CartaDePersonaje
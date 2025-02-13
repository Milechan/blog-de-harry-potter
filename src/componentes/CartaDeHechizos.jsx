import { useContext } from "react"
import sinfoto from "../assets/sinfoto.jpg"
import "../styles/CartaDeHechizos.css"
import "../styles/botonDeFavoritos.css"
import { Context } from "../store/AppContext"

const CartaDeHechizos = (props) => {
    const{actions}=useContext(Context)
    function hechizoFavorito(hechizo) {
        actions.agregarHechizoFavorito(hechizo)
    }
    return (
        <div className="card-hechizos" key={props.hechizo.id}>

            <div className="detalle">
                <div className="detalleHechizo"><strong>Nombre: </strong></div>
                <div className='detalleContenido'>{props.hechizo.name}</div>
            </div>
            <div className="detalle">
                <div className="detalleHechizo"><strong>Descripcion: </strong></div>
                <div className='detalleContenido'>{props.hechizo.description}</div>
            </div>
            <div className="contenedor-boton">

                <button class=" boton-hechizos btn btn-primary"onClick={()=>hechizoFavorito(props.hechizo)}>Favorito <i class="fa-solid fa-heart"></i> </button>
            </div>
        </div>
    )
}
export default CartaDeHechizos
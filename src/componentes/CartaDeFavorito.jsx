import { useContext } from "react"
import "../styles/CartaDeFavorito.css"
import { Context } from "../store/AppContext"

const CartaDeFavoritos = (props) => {
    const { actions } = useContext(Context)
    function eliminarFavorito(favorito, tipo) {
        if (tipo === 'hechizo') {
            actions.eliminarHechizoFavorito(favorito)
        } else if (tipo === 'personaje') {
            actions.eliminarPersonajeFavorito(favorito)
        } else if (tipo === 'staff') {
            actions.eliminarStaffFavorito(favorito)
        }
    }
    return (

        <div className="card-favoritos" key={props.favorito.id}>
            <div className="nombreDeFavorito">{props.favorito.name}</div>

            <div className="contenedor-boton-favoritos">
                <button className=" boton-favoritos btn btn-primary" onClick={() => eliminarFavorito(props.favorito, props.tipo)}> Eliminar<i className="fa-solid fa-heart ms-2"></i> </button>
            </div>
        </div>
    )
}
export default CartaDeFavoritos
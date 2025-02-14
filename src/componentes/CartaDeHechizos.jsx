import { useContext, useEffect, useState } from "react"
import sinfoto from "../assets/sinfoto.jpg"
import "../styles/CartaDeHechizos.css"
import "../styles/botonDeFavoritos.css"
import { Context } from "../store/AppContext"
import "../styles/FavoritosTitulos.css"

const CartaDeHechizos = (props) => {
    const { actions, store } = useContext(Context)
    const [esFavorito, setEsFavorito] = useState(false)
    function hechizoFavorito(hechizo) {
        if (esFavorito) {
            actions.eliminarHechizoFavorito(hechizo)
            setEsFavorito(false)
        } else {
            actions.agregarHechizoFavorito(hechizo)
            setEsFavorito(true)
        }
    }

    useEffect(() => {
        let favoritosActuales = store.hechizosFavoritos
        let exists = favoritosActuales.filter((favorito) => favorito.id === props.hechizo.id)
        if (exists.length > 0) {
            setEsFavorito(true)
        }
    }, [])
    return (
        <div className="card-hechizos" key={props.hechizo.id}>
            <div className="detalle">
                <div className="detalleHechizo"><strong>Nombre: </strong></div>
                <div className='detalleContenido'>{props.hechizo.name}</div>
            </div>
            <div className="detalleHechizoText">
                <div className="detalleHechizo"><strong>Descripcion: </strong></div>
                <div className='detalleContenido'>{props.hechizo.description}</div>
            </div>
            <div className={!esFavorito ? "contenedor-boton-hechizo" : "contenedor-boton-hechizo-fav"} onClick={() => hechizoFavorito(props.hechizo)}>
                {!esFavorito ? "Favorito" : "Eliminar Favorito"}<i class="fa-solid fa-heart ms-2"></i>
            </div>
        </div>
    )
}
export default CartaDeHechizos
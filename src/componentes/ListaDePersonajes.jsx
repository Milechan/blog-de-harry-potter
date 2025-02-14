import { useContext, useEffect } from "react"
import Navbar from "./Navbar"
import { Context } from "../store/AppContext"
import "../styles/ListaDePersonajes.css"
import InfoPersonaje from "./InfoPersonaje"
import CartaDePersonaje from "./CartaDePersonaje"

const ListaDePersonajes = () => {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.obtenerPersonajes()

    }, [])
    return (
        <div>
            <div className="scroll-container-personajes">
                <div className="contenedor-Personajes">
                    {store.personajes.map((personaje) => {
                        
                        // return <InfoPersonaje personaje={personaje} />
                        return <CartaDePersonaje personaje={personaje} />
                    })}
                </div>
            </div>
        </div>
    )
}
export default ListaDePersonajes
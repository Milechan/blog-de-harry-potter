import { useContext, useEffect } from "react"
import Navbar from "./Navbar"
import { Context } from "../store/AppContext"
import CartaDePersonaje from "./CartaDePersonaje"
import "../styles/ListaDePersonajes.css"

const ListaDePersonajes = () => {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.obtenerPersonajes()

    }, [])
    return (
        <div>
            <div className="scroll-container">
                <div className="contenedor-Personajes">
                    {store.personajes.map((personaje) => {

                        return <CartaDePersonaje personaje={personaje} />
                    })}
                </div>
            </div>
        </div>
    )
}
export default ListaDePersonajes
import { useContext, useEffect } from "react"
import Navbar from "./Navbar"
import { Context } from "../store/AppContext"
import CartaDeHechizos from "./CartaDeHechizos"
import "../styles/ListaDeHechizos.css"

const ListaDeHechizos = () => {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.obtenerHechizos()

    }, [])
    return (
        <div>
            <div className="scroll-container-hechizos">
              
                <div className="contenedor-Tarjetas">
                    {store.hechizos.map((hechizo) => {

                        return <CartaDeHechizos hechizo={hechizo} />
                    })}
                </div>
            </div>
        </div>
    )
}
export default ListaDeHechizos
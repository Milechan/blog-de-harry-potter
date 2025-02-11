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
            <Navbar />
            <h1 className="tituloDeHechizos">Hechizos</h1>
            <div className="contenedor-Tarjetas">
                 {store.hechizos.map((hechizo) => {

                return <CartaDeHechizos hechizo={hechizo} />
            })}
            </div>
           
        </div>
    )
}
export default ListaDeHechizos
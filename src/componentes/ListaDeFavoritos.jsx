import { useContext } from "react"
import { Context } from "../store/AppContext"
import CartaDeFavoritos from "./CartaDeFavorito"
import "../styles/ListaDeFavoritos.css"

const ListaDeFavoritos = () => {
    const { store } = useContext(Context)


    return (

        <div className="scroll-favoritos">
            <div className="contenedor-favoritos">
                <div className="scroll-hechizos">
                    <h1 className="HechizoFavorito">Hechizos</h1>
                    <div className="contenedor-hechizos">
                        {store.hechizosFavoritos.map((favorito) => {
                            return <CartaDeFavoritos favorito={favorito} tipo={'hechizo'}/>
                        })}
                    </div>
                </div>
                <div className="scroll-personajes">
                    <h1 className="PersonajeFavorito">Personajes</h1>
                    <div className="contenedor-personajes">
                        {store.personajesFavoritos.map((favorito) => {
                            return <CartaDeFavoritos favorito={favorito} tipo={'personaje'}/>
                        })}
                    </div>
                </div>
                <div className="scroll-staff">
                    <h1 className="staffFavorito">Staff</h1>
                    <div className="contenedor-staff">
                        {store.staffFavoritos.map((favorito) => {
                            return <CartaDeFavoritos favorito={favorito} tipo={'staff'}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListaDeFavoritos
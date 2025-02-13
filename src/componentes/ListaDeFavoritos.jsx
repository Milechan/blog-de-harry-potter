import { useContext } from "react"
import { Context } from "../store/AppContext"
import CartaDeFavoritos from "./CartaDeFavorito"


const ListaDeFavoritos = () => {
    const { store } = useContext(Context)


    return (

        <div>

            <h1>hechizos</h1>
            {store.hechizosFavoritos.map((favorito)=>{
                return <CartaDeFavoritos favorito={favorito}/>
            })}

            <h1>personajes</h1>
            {store.personajesFavoritos.map((favorito)=>{
                return <CartaDeFavoritos favorito={favorito}/>
            })}

            <h1>staff</h1>
            {store.staffFavoritos.map((favorito)=>{
                return <CartaDeFavoritos favorito={favorito}/>
            })}
        </div>
    )
}
export default ListaDeFavoritos
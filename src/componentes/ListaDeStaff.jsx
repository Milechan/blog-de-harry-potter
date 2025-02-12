
import { useContext, useEffect } from "react"
import CartaDeStaff from "./CartaDeStaff"
import { Context } from "../store/AppContext"
import Navbar from "./Navbar"
import "../styles/ListaDeStaff.css"

const ListaDeStaff = () => {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.obtenerStaff()
    }, [])
    return (
        <div>
            <div className="scroll-container">
                <div className="contenedor-Staff">
                    {store.staff.map((staff) => {

                        return <CartaDeStaff staff={staff} />
                    })}
                </div>
            </div>
        </div>
    )
}
export default ListaDeStaff
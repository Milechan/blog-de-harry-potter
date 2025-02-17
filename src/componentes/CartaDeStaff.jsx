import { useContext, useEffect, useState } from "react"
import sinfoto from "../assets/sinfoto.jpg"
import "../styles/CartaDeStaff.css"
import "../styles/botonDeFavoritos.css"
import { Context } from "../store/AppContext"


const CartaDeStaff = (props) => {
    const { actions, store } = useContext(Context)
    const [esFavorito, setEsFavorito] = useState(false)

    function StaffFavorito(staff) {
        if (esFavorito) {
            actions.eliminarStaffFavorito(staff)
            setEsFavorito(false)
        } else {
            actions.agregarStaffFavorito(staff)
            setEsFavorito(true)
        }
    }
    useEffect(() => {
        let favoritosActuales = store.staffFavoritos
        let exists = favoritosActuales.filter((favorito) => favorito.id === props.staff.id)
        if (exists.length > 0) {
            setEsFavorito(true)
        }
    }, [])
    return (
        <div className="card-staff" key={props.staff.id}>
            <div className="nombreDeStaff">{props.staff.name}</div>

            <div className="detalle">
                <div className="detalleTituloStaff"><strong>Especie:</strong></div>
                <div className='detalleValorStaff'>{props.staff.species === "" ? "No se sabe" : props.staff.species}</div>
            </div>
            <div className="detalle">
                <div className="detalleTituloStaff"><strong>Genero:</strong></div>
                <div className='detalleValorStaff'>{props.staff.gender === "" ? "No se sabe" : props.staff.gender}</div>
            </div>
            <div className="detalle">
                <div className="detalleTituloStaff"><strong>La casa:</strong></div>
                <div className='detalleValorStaff'>{props.staff.house === "" ? "No pertenece a una Casa" : props.staff.house}</div>
            </div>
            <div className="contenedor-imagen">
                <img className="imagenstaff" src={props.staff.image ? props.staff.image : sinfoto} alt="imagen del staff" />
            </div>
            <div className={!esFavorito ? "contenedor-boton-staff" : "contenedor-boton-staff-fav"} onClick={() => StaffFavorito(props.staff)}>
                {!esFavorito ? "Favorito" : "Eliminar Favorito"} <i className="fa-solid fa-heart ms-2"></i>

            </div>
        </div>
    )
}
export default CartaDeStaff
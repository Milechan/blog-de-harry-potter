import { useContext } from "react"
import sinfoto from "../assets/sinfoto.jpg"
import "../styles/CartaDeStaff.css"
import "../styles/botonDeFavoritos.css"
import { Context } from "../store/AppContext"


const CartaDeStaff = (props) => {
const{actions}=useContext(Context)
    function StaffFavorito(staff) {
        actions.agregarPersonajeFavorito(staff)
    }
    return (
        <div className="card-staff" key={props.staff.id}>
            <div className="nombreDeStaff">{props.staff.name}</div>
            
            <div className="detalle">
                <div className="detalleTituloStaff"><strong>especie:</strong></div>
                <div className='detalleValorStaff'>{props.staff.species === "" ? "No se sabe" : props.staff.species}</div>
            </div>
            <div className="detalle">
                <div className="detalleTituloStaff"><strong>genero:</strong></div>
                <div className='detalleValorStaff'>{props.staff.gender === "" ? "No se sabe" : props.staff.gender}</div>
            </div>
            <div className="detalle">
                <div className="detalleTituloStaff"><strong>La casa:</strong></div>
                <div className='detalleValorStaff'>{props.staff.house === "" ? "No pertenece a una Casa" : props.staff.house}</div>
            </div>
            <div className="contenedor-imagen">
                <img className="imagenstaff" src={props.staff.image ? props.staff.image : sinfoto} alt="imagen del staff" />
            </div>
            <div className="contenedor-boton-staff">

                <button class=" boton-staff btn btn-primary"onClick={()=>StaffFavorito}> Favorito <i class="fa-solid fa-heart"></i> </button>
            </div>
        </div>
    )
}
export default CartaDeStaff
import sinfoto from "../assets/sinfoto.jpg"
import "../styles/CartaDeStaff.css"

const CartaDeStaff = (props) => {

    return (
        <div className="card-staff" key={props.staff.id}>
            <div className="nombreDeStaff">{props.staff.name}</div>
            <div className="detalle">
                <div className="detalleTituloStaff"><strong>apodos:</strong></div>
                <div className='detalleValorStaff'>{props.staff.alternate_names.length>0?props.staff.alternate_names:"No tiene Apodos"}</div>
            </div>
            <div className="detalle">
                <div className="detalleTituloStaff"><strong>especie:</strong></div>
                <div className='detalleValorStaff'>{props.staff.species===""?"No se sabe":props.staff.species}</div>
            </div>
            <div className="detalle">
                <div className="detalleTituloStaff"><strong>genero:</strong></div>
                <div className='detalleValorStaff'>{props.staff.gender===""?"No se sabe":props.staff.gender}</div>
            </div>
            <div className="detalle">
                <div className="detalleTituloStaff"><strong>La casa:</strong></div>
                <div className='detalleValorStaff'>{props.staff.house===""?"No pertenece a una Casa":props.staff.house}</div>
            </div>
            <img className="imagenstaff" src={props.staff.image?props.staff.image:sinfoto} alt="imagen del staff"/>

        </div>
    )
}
export default CartaDeStaff
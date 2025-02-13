import '../styles/CartaDePersonaje.css'
import sinfoto from "../assets/sinfoto.jpg"
import "../styles/botonDeFavoritos.css"
import { useContext } from 'react'
import { Context } from '../store/AppContext'

const CartaDePersonaje = (props) => {
    const{actions}=useContext(Context)
    function personajeFavorito(personaje) {
        actions.agregarPersonajeFavorito(personaje)
    }
    return (
        <div className="card-personaje" key={props.personaje.id}>
            <div className="nombre">{props.personaje.name}</div>
            {/* <div className="detalle">
                <div className="detalleTitulo"><strong>apodos:</strong></div>
                <div className='detalleValor'>{props.personaje.alternate_names.length>0?props.personaje.alternate_names:"No tiene Apodos"}</div>
            </div> */}
            <div className="detalle">
                <div className="detalleTitulo"><strong>especie:</strong></div>
                <div className='detalleValor'>{props.personaje.species === "" ? "No se sabe" : props.personaje.species}</div>
            </div>
            <div className="detalle">
                <div className="detalleTitulo"><strong>genero:</strong></div>
                <div className='detalleValor'>{props.personaje.gender === "" ? "No se sabe" : props.personaje.gender}</div>
            </div>
            <div className="detalle">
                <div className="detalleTitulo"><strong>La casa:</strong></div>
                <div className='detalleValor'>{props.personaje.house === "" ? "No pertenece a una Casa" : props.personaje.house}</div>
            </div>
            <div className="detalle">
                <div className="detalleTitulo"><strong>fecha de Cumpleaños:</strong></div>
                <div className='detalleValor'>{props.personaje.dateOfBirth === null ? "No se sabe" : props.personaje.dateOftBirth}</div>
            </div>
            <div className="detalle">
                <div className="detalleTitulo"><strong>Año de nacimiento:</strong></div>
                <div className='detalleValor'>{props.personaje.yearOfBirth === null ? "No se sabe" : props.personaje.yearOfBirth}</div>
            </div>
            <div className="detalle">
                <div className="detalleTitulo"><strong>Mago:</strong></div>
                <div className='detalleValor'>{props.personaje.wizard ? 'Si es Mago' : 'No es Mago'}</div>
            </div>
            <div className="detalle">
                <div className="detalleTitulo"><strong>Ascendencia:</strong></div>
                <div className='detalleValor'>{props.personaje.ancestry === "" ? "No se sabe" : props.personaje.ancestry}</div>
            </div>

            <div className="detalle">
                <div className="detalleTitulo"><strong>Color de ojos:</strong></div>
                <div className='detalleValor'>{props.personaje.eyeColour === "" ? "No se sabe" : props.personaje.eyeColour}</div>
            </div>

            <div className="detalle">
                <div className="detalleTitulo"><strong>Color de cabello:</strong></div>
                <div className='detalleValor'>{props.personaje.hairColour === "" ? "No se sabe" : props.personaje.hairColour}</div>
            </div>

            <div className="detalle">
                <div className="detalleTitulo"><strong>patronus:</strong></div>
                <div className='detalleValor'>{props.personaje.patronus ? props.personaje.patronus : "No tiene Patronus"}</div>
            </div>

            <div className="detalle">
                <div className="detalleTitulo"><strong>Estudiante de Hogwarts:</strong></div>
                <div className='detalleValor'>{props.personaje.hogwartsStudent ? "Si es Estudiante" : "No es Estudiante"}</div>
            </div>

            <div className="detalle">
                <div className="detalleTitulo"><strong>Hogwarts Staff:</strong></div>
                <div className='detalleValor'>{props.personaje.hogwartsStaff ? "Si es de Staff" : "No es de Staff"}</div>
            </div>

            {/* <div className="detalle">
                <div className="detalleTitulo"><strong>Nombre del Actor:</strong></div>
                <div className='detalleValor'>{props.personaje.actor===""?"No se sabe":props.personaje.actor}</div>
            </div> */}
            <img className="imagenPersonaje" src={props.personaje.image ? props.personaje.image : sinfoto} alt="imagen del personaje" />

            <div className="contenedor-boton-personaje">

                <button class=" boton-personajes btn btn-primary"onClick={()=>personajeFavorito(props.personaje)}>Favorito <i class="fa-solid fa-heart"></i></button>
            </div>
        </div>
    )
}
export default CartaDePersonaje
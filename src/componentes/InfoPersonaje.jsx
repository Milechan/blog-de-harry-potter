import '../styles/InfoPersonaje.css'
import sinfoto from "../assets/sinfoto.jpg"
import "../styles/botonDeFavoritos.css"
import { useContext, useEffect } from 'react'
import { Context } from '../store/AppContext'
import { useParams } from 'react-router'

const InfoPersonaje = () => {
    const { id } = useParams()
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.obtenerInfoPersonaje(id)
    }, [])
    function personajeFavorito(personaje) {
        actions.agregarPersonajeFavorito(personaje)
    }
    return (
        <div className="card-info-personaje" key={store.infoPersonaje.id}>
            <div className="nombre">{store.infoPersonaje.name}</div>
            {/* <div className="detalle">
                        <div className="detalleTitulo"><strong>apodos:</strong></div>
                        <div className='detalleValor'>{store.infoPersonaje.alternate_names.length>0?store.infoPersonaje.alternate_names:"No tiene Apodos"}</div>
                    </div> */}
            <div className="detalle">
                <div className="detalleTitulo"><strong>Especie:</strong></div>
                <div className='detalleValor'>{store.infoPersonaje.species === "" ? "No se sabe" : store.infoPersonaje.species}</div>
            </div>
            <div className="detalle">
                <div className="detalleTitulo"><strong>Genero:</strong></div>
                <div className='detalleValor'>{store.infoPersonaje.gender === "" ? "No se sabe" : store.infoPersonaje.gender}</div>
            </div>
            <div className="detalle">
                <div className="detalleTitulo"><strong>La casa:</strong></div>
                <div className='detalleValor'>{store.infoPersonaje.house === "" ? "No pertenece a una Casa" : store.infoPersonaje.house}</div>
            </div>
            <div className="detalle">
                <div className="detalleTitulo"><strong>Fecha de Cumpleaños:</strong></div>
                <div className='detalleValor'>{store.infoPersonaje.dateOfBirth === null ? "No se sabe" : store.infoPersonaje.dateOftBirth}</div>
            </div>
            <div className="detalle">
                <div className="detalleTitulo"><strong>Año de nacimiento:</strong></div>
                <div className='detalleValor'>{store.infoPersonaje.yearOfBirth === null ? "No se sabe" : store.infoPersonaje.yearOfBirth}</div>
            </div>
            <div className="detalle">
                <div className="detalleTitulo"><strong>Mago:</strong></div>
                <div className='detalleValor'>{store.infoPersonaje.wizard ? 'Si es Mago' : 'No es Mago'}</div>
            </div>
            <div className="detalle">
                <div className="detalleTitulo"><strong>Ascendencia:</strong></div>
                <div className='detalleValor'>{store.infoPersonaje.ancestry === "" ? "No se sabe" : store.infoPersonaje.ancestry}</div>
            </div>

            <div className="detalle">
                <div className="detalleTitulo"><strong>Color de ojos:</strong></div>
                <div className='detalleValor'>{store.infoPersonaje.eyeColour === "" ? "No se sabe" : store.infoPersonaje.eyeColour}</div>
            </div>

            <div className="detalle">
                <div className="detalleTitulo"><strong>Color de cabello:</strong></div>
                <div className='detalleValor'>{store.infoPersonaje.hairColour === "" ? "No se sabe" : store.infoPersonaje.hairColour}</div>
            </div>

            <div className="detalle">
                <div className="detalleTitulo"><strong>Patronus:</strong></div>
                <div className='detalleValor'>{store.infoPersonaje.patronus ? store.infoPersonaje.patronus : "No tiene Patronus"}</div>
            </div>

            <div className="detalle">
                <div className="detalleTitulo"><strong>Estudiante de Hogwarts:</strong></div>
                <div className='detalleValor'>{store.infoPersonaje.hogwartsStudent ? "Si es Estudiante" : "No es Estudiante"}</div>
            </div>

            <div className="detalle">
                <div className="detalleTitulo"><strong>Hogwarts Staff:</strong></div>
                <div className='detalleValor'>{store.infoPersonaje.hogwartsStaff ? "Si es de Staff" : "No es de Staff"}</div>
            </div>

            {/* <div className="detalle">
                        <div className="detalleTitulo"><strong>Nombre del Actor:</strong></div>
                        <div className='detalleValor'>{store.infoPersonaje.actor===""?"No se sabe":store.infoPersonaje.actor}</div>
                    </div> */}
            <img className="imagenPersonaje" src={store.infoPersonaje.image ? store.infoPersonaje.image : sinfoto} alt="imagen del personaje" />

            <div className="contenedor-boton-personaje" onClick={() => personajeFavorito(store.infoPersonaje)}>
                Favorito <i className="fa-solid fa-heart ms-2"></i>
            </div>
        </div >
    )
}
export default InfoPersonaje
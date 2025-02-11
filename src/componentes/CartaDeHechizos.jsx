import sinfoto from "../assets/sinfoto.jpg"
import "../styles/CartaDeHechizos.css"


const CartaDeHechizos =(props)=>{
    return (
            <div className="card-hechizos" key={props.hechizo.id}>
                
                <div className="detalle">
                    <div className="detalleHechizo"><strong>Nombre: </strong></div>
                    <div className='detalleContenido'>{props.hechizo.name}</div>
                </div>
                <div className="detalle">
                    <div className="detalleHechizo"><strong>Descripcion: </strong></div>
                    <div className='detalleContenido'>{props.hechizo.description}</div>
                </div>
    
            </div>
        )
    }
    export default CartaDeHechizos
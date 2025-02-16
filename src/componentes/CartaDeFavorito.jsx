import "../styles/CartaDeFavorito.css"

const CartaDeFavoritos = (props) => {

    return (
        
        <div className="card-favoritos" key={props.favorito.id}>
            <div className="nombreDeFavorito">{props.favorito.name}</div>

            <div className="contenedor-boton-favoritos">
                <button className=" boton-favoritos btn btn-primary" onClick={() => alert("borrar favorito")}> Favorito <i className="fa-solid fa-heart"></i> </button>
            </div>
        </div>
    )
}
export default CartaDeFavoritos
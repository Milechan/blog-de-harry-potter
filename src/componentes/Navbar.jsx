import { useNavigate } from "react-router"
import logo from "../assets/logo.png"
import "../styles/Navbar.css"

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="navbar-brand" onClick={() => navigate("/")}>
                        <img className="logo-navbar" src={logo} alt="imagenlogo" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="nav-link active home titulosNavbar" aria-current="page" onClick={() => navigate("/")}>Home</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link personajes titulosNavbar" onClick={() => navigate("/personajes")}>Personajes</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link staff titulosNavbar" onClick={() => navigate("/staff")}>Staff</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link titulosNavbar" onClick={() => navigate("/hechizos")}> Hechizos</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link titulosNavbar" onClick={() => navigate("/favoritos")}> Favoritos</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}
export default Navbar
import { useNavigate } from "react-router"
import logo from "../assets/logo.png"
import "../styles/Navbar.css"
import { useEffect, useRef, useState } from "react"
import musicaHP from '../assets/hp-theme.mp3'
const Navbar = () => {
    const navigate = useNavigate()
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true)
    const [hasInteracted, setHasInteracted] = useState(false);

    function toggleAudio() {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause(); // Pausar el audio si está reproduciendo
            } else {
                audioRef.current.play(); // Reproducir el audio si está pausado
            }
            setIsPlaying(!isPlaying); // Alternar el estado de reproducción
        }
    };

    useEffect(() => {
        function handleUserInteraction() {
            if (!hasInteracted && audioRef.current) {
                audioRef.current.play().catch(error => {
                    console.log("La reproducción automática está restringida: ", error);
                });
                setIsPlaying(true);
                setHasInteracted(true);
                document.removeEventListener("click", handleUserInteraction);
            }
        }

        document.addEventListener("click", handleUserInteraction);
        return () => document.removeEventListener("click", handleUserInteraction);
    }, [hasInteracted]);
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="navbar-brand" onClick={() => toggleAudio()}>
                        <img  className={isPlaying ? 'logo-navbar playing' : 'logo-navbar'} src={logo} alt="imagenlogo" />
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
            <audio ref={audioRef}>
                <source src={musicaHP} type="audio/mpeg" />
            </audio>
        </div >
    )
}
export default Navbar
export default function getState({ getStore, getActions, setStore }) {
    return {
        store: {
            personajes: [],
            infoPersonaje: {},
            hechizos: [],
            staff: [],
            hechizosFavoritos: [],
            personajesFavoritos: [],
            staffFavoritos: []
        },
        actions: {
            obtenerPersonajes: async () => {
                try {
                    const request = await fetch("https://hp-api.onrender.com/api/characters", {
                        method: "GET"

                    })
                    const data = await request.json()
                    console.log(data)
                    setStore({
                        personajes: data
                    })
                } catch (error) {
                    console.error("no se puedo obtener personajes")
                    console.error(error)
                }
            },
            obtenerInfoPersonaje: async (idPersonaje) => {
                try {
                    const request = await fetch(`https://hp-api.onrender.com/api/character/${idPersonaje}`, {
                        method: "GET"
                    })
                    const data = await request.json()
                    setStore({
                        infoPersonaje: { ...data[0] }
                    })
                } catch (error) {
                    console.error('no se obtuvo la informacion del personaje: ', idPersonaje);
                    console.error(error);

                }
            },
            obtenerHechizos: async () => {
                try {
                    const request = await fetch("https://hp-api.onrender.com/api/spells", {
                        method: "GET"

                    })
                    const data = await request.json()
                    // console.log(data)
                    setStore({
                        hechizos: data
                    })
                } catch (error) {
                    console.error("No se pudieron obtener los hechizos")
                    console.error(error)
                }
            },
            obtenerStaff: async () => {
                try {
                    const request = await fetch("https://hp-api.onrender.com/api/characters/staff", {
                        method: "GET"

                    })
                    const data = await request.json()
                    console.log(data)
                    setStore({
                        staff: data
                    })
                } catch (error) {
                    console.error("no se logro tener el staff")
                    console.error(error)
                }
            },
            agregarHechizoFavorito: (hechizo) => {
                console.log("agregarHechizoFavorito")
                const favoritosActuales = getStore().hechizosFavoritos
                setStore({
                    hechizosFavoritos: [...favoritosActuales, hechizo]
                })
                console.log("nuevos favoritos:", getStore().hechizosFavoritos);

            },
            eliminarHechizoFavorito: (hechizo) => {
                console.log("eliminarHechizoFavorito:", hechizo)
                const favoritosActuales = getStore().hechizosFavoritos
                console.log("favoritosActuales:", favoritosActuales);
                const favoritosFiltrados = favoritosActuales.filter((fav) => fav.id !== hechizo.id)
                console.log('favoritosFiltrados:', favoritosFiltrados);

                setStore({
                    hechizosFavoritos: favoritosFiltrados
                })

                console.log("nuevos hechizos fav", getStore().hechizosFavoritos);

            },
            agregarStaffFavorito: (staff) => {
                console.log("agregarStaffFavorito")
                const favoritosActuales = getStore().staffFavoritos
                setStore({
                    staffFavoritos: [...favoritosActuales, staff]
                })
                console.log("nuevos favoritos:", getStore().staffFavoritos);

            },
            eliminarStaffFavorito: (staff) => {
                console.log("eliminarStaffFavorito:", staff)
                const favoritosActuales = getStore().staffFavoritos
                console.log("favoritosActuales:", favoritosActuales);
                const favoritosFiltrados = favoritosActuales.filter((fav) => fav.id !== staff.id)
                console.log('favoritosFiltrados:', favoritosFiltrados);

                setStore({
                    staffFavoritos: favoritosFiltrados
                })

                console.log("nuevos staff fav", getStore().staffFavoritos);

            },
            agregarPersonajeFavorito: (personaje) => {
                console.log("agregarPersonajeFavorito")
                const favoritosActuales = getStore().personajesFavoritos
                setStore({
                    personajesFavoritos: [...favoritosActuales, personaje]
                })
                console.log("nuevos favoritos:", getStore().personajesFavoritos);

            },
            eliminarPersonajeFavorito: (personaje) => {
                console.log("eliminarPersonajeFavorito:", personaje)
                const favoritosActuales = getStore().personajesFavoritos
                console.log("favoritosActuales:", favoritosActuales);
                const favoritosFiltrados = favoritosActuales.filter((fav) => fav.id !== personaje.id)
                console.log('favoritosFiltrados:', favoritosFiltrados);

                setStore({
                    personajesFavoritos: favoritosFiltrados
                })

                console.log("nuevos personaje fav", getStore().personajesFavoritos);

            }

        }
    }
}

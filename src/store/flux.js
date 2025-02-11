export default function getState({ getStore, getActions, setStore }) {
    return {
        store: {
            personajes:[],
            hechizos:[]
        },
        actions: {
            obtenerPersonajes:async ()=>{
                try {
                    const request= await fetch("https://hp-api.onrender.com/api/characters",{
                        method:"GET"

                    })
                    const data=await request.json()
                    console.log(data)
                    setStore({
                        personajes:data
                    })
                } catch (error) {
                    console.error("no se puedo obtener personajes")
                    console.error(error)
                }
            },
            obtenerHechizos:async()=>{
                try {
                    const request= await fetch("https://hp-api.onrender.com/api/spells",{
                        method:"GET"

                    })
                    const data=await request.json()
                    console.log(data)
                    setStore({
                        hechizos:data
                    })
                } catch (error) {
                    console.error("No se pudieron obtener los hechizos")
                    console.error(error)
                }
            }

        }
    }
}
    
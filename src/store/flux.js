export default function getState({ getStore, getActions, setStore }) {
    return {
        store: {
            personajes:[],
            hechizos:[],
            staff:[]
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
            },
            obtenerStaff:async()=>{
                try {
                    const request= await fetch("https://hp-api.onrender.com/api/characters/staff",{
                        method:"GET"

                    })
                    const data=await request.json()
                    console.log(data)
                    setStore({
                        staff:data
                    })
                } catch (error) {
                    console.error("no se logro tener el staff")
                    console.error(error)
                }
            }

        }
    }
}
    
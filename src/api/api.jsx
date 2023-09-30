import axios from "axios" // axios es una librería para hacer peticiones

export const api = axios.create({
    baseURL: "https://api-vercel-serpientes.vercel.app/"
})

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
    
}
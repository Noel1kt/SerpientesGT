import axios from "axios" // axios es una librería para hacer peticiones

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
}
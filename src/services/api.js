import axios from "axios"

export const api = axios.create({
    baseURL: 'https://notesrocket-api.onrender.com/'
})
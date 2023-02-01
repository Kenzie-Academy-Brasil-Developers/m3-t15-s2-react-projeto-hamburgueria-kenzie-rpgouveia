import axios from 'axios'

// https://hamburgueria-kenzie-json-serve.herokuapp.com/products
export const api = axios.create({
    baseURL: 'https://hamburgueria-kenzie-json-serve.herokuapp.com/',
    timeout: 5000,
})
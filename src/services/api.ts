import axios from 'axios'

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/bmomose/hc2-moo-moo-project/produtos'
})

export default api
import axios from 'axios';

let local = "http://localhost:8080"

const api = axios.create({
    baseURL: local
})

export const get = async (endpoint) => {
    return new Promise(async (res, rej) => {
        try{
            let data = await api.get(endpoint).then( p => {return p.data})
            res(data)
        }catch(err){
            rej(err)
        }
    })
}

export const post = async (endpoint, bodyRequest) => {
    return new Promise(async (res, rej) => {
        try{
            let data = await api.post(endpoint, bodyRequest)
            console.log(data)
            res(data)
        }catch(err){
            rej(err)
        }
    })
}

export default api;
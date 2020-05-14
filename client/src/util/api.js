import axios from 'axios';

const api = axios.create({
    // baseURL: `http://localhost:5000`
    baseURL: `https://apicoalq.herokuapp.com`
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

export default api;
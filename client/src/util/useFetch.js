
let url = "https://apicoalq.herokuapp.com";
// url = "http://localhost:5000";

const useFetch = async (endpoint, bodyReq) => {
    return new Promise(async (res, rej) => {
        try{
            let data = await fetch( url+endpoint, bodyReq )
                                .then( res => res.json())
                                .then( json => {
                                    return json.data
                                })
            res(data)
        }catch(err){
            rej(err)
        }
    })
}

export default useFetch;

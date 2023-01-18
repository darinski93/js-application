import { del, get, post, put} from "./api.js";

export async function getAll(){

   return get('/data/products?sortBy=_createdOn%20desc')

}

export async function getById(id){

   return get('/data/products/' + id)
}

export async function deleteById(id){
    return del('/data/products/' + id)
}
export async function createById(userData){
    return post('/data/products', userData)
}

export async function editProduct(id,userData){
    return put('/data/products/' + id, userData)
}
import axios from "axios";

export const getProducts=async()=>{
    try {
        const url="http://localhost:8080/products"
        const response=await axios.get(url);
        return response.data;        
    } catch (error) {
        console.log(error);
    }
};

export const getProduct=async(id)=>{
    try{
        const url=`http://localhost:8080/products/${id}`
        const response=await axios.get(url);
        return response.data;
    }catch(error){
        console.log(error);
    }
}

export const uploadProduct=async(id,product)=>{
    try {
        const url=`http://localhost:8080/products/${id}`;
        const response=await axios.put(url,product);
        return response.data
    } catch (error) {
        console.log(error);
    }

}
export const getFilterProducts=async(search)=>{
    try {
        const url=`http://localhost:8080/products?name=${search}`;
        const response=await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const postProduct=async(productWrite)=>{
    try{
        const url='http://localhost:8080/products'
        const response= await axios.post(url,productWrite);
        return response.data;
    }catch(error){
        console.log(error)
    }
}
export const deleteProduct=async(id)=>{
    const url=`http://localhost:8080/products/${id}`
    
    try{
        const response=await axios.delete(url);
        return response.data;
    }catch(error){
        console.log(error);
    }

}
export const getProvinces=async()=>{
    try {
        const url='https://apis.datos.gob.ar/georef/api/provincias';
        const response=await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


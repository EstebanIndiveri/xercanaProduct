export const isEmail=(val)=>{
    // eslint-disable-next-line no-useless-escape
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEmail.test(val)){
      return false;
    }
}

export const isEmpty=(name,description,photo,price,owner,cuit,province,street,number)=>{
    if(name===''||description===''||photo===''|| price===''|| owner===''||cuit===''|| province===''||street===''||number===''){
        
        return false;
    }
}

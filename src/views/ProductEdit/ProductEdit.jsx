/* eslint-disable no-useless-computed-key */
import React, { Fragment, useEffect, useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import { getProduct,getProvinces, postProduct, uploadProduct } from '../../controllers/Api';
import { isEmpty } from '../../helpers/validations';
import './ProductEdit.css';

const ProductEdit = (props) => {
    let {id}=useParams();
    const [startEdit, setStartEdit] = useState(true);
    const [isValid,setIsValid]=useState(true);
    const [productWrite, setProductWrite] = useState({
        name:'',
        description:'',
        price:'',
        photo:'',
        owner:{
            full_name:'',
            cuit:'',
            address:{
                street:'',
                province:'',
                number:''
            }
        }
    
    });
    const [provincias,setProvincias]=useState([]);
    const history=useHistory();
    useEffect(()=>{
        if(id!=='new'){
            getProduct(id).then(res=>{
                setProductWrite(res);
            })
        }
        getProvinces().then(res=>{
            setProvincias(res.provincias);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    let{name,description,price,photo,owner}=productWrite ;
    if(owner===undefined)return 'loading';
// eslint-disable-next-line
    const{full_name,cuit,address}=owner ;
    const{province,street,number}=address;

const handleInputChanges = level => e => {
    setStartEdit(false);
    if (!level) {
      // Assume root level
      setProductWrite({
        ...productWrite,
        [e.target.name] : e.target.value
      })
    //   Assume level owner:
    } else if(level==='owner') {
      setProductWrite({
        ...productWrite,
        [level]: {
          ...productWrite[level],
          [e.target.name] : e.target.value
        }
      })
    } else if(level==='address') {
        setProductWrite({
          ...productWrite,
          ['owner']: {
            ...productWrite['owner'],
            [level]:{
            ...productWrite['owner'][level],
                [e.target.name] : e.target.value
            }
          }
        })
      }
  };



    const handleSubmit=async (e)=>{
        e.preventDefault();
        if(isEmpty(name,description,photo,price,owner,cuit,province,street,number)===false){
            setIsValid(false);
            window.scrollTo(0,0);
            setTimeout(() => {
                setIsValid(true);
            }, 2000);
            return;
        }
            productWrite.price=parseInt(price)
            productWrite.owner.cuit=parseInt(cuit);
            productWrite.owner.address.number=parseInt(number);

        if(id==='new'){
            productWrite.created_date=Date.now();
            productWrite.owner.id=parseFloat(Math.random().toFixed(10));
            productWrite.state='ready';
            await postProduct(productWrite);
        }
        productWrite.last_edit_date=Date.now();
        await uploadProduct(id,productWrite).then(res=>{alert(`${id==='new'?'Great! your product is ready ⚡️!': 'Great! your product is updated'}`)})
        setTimeout(() => {
            history.replace('/admin/products/1');            
        }, 1000);
    }
    
    return ( 
        <Fragment>
            <div className="productEdit_Container">
                <div className="productEdit_TitleContainer">
                        <div className="productEdit_btnBackContainer">
                            <button onClick={()=>history.goBack()} className="productEdit_btnBack">Back</button>
                        </div>
                        <h1 className="productEdit_title">{id==='new'?'Create your Product':'Edit your Product'}</h1>
                </div>
                <div className="productEditFormContainer">
                    <form onSubmit={(e)=>handleSubmit(e)} className="productEditForm">
                        {!isValid&&(
                            <div className="formLogin_modalAlert">All data are required</div>
                        )}
                        <div className="productEditFormInputContainer">
                            <label className="productEditForm_label" htmlFor="name">Name</label>
                            <input
                            className="productEditFormInput"
                            placeholder='Name of product'
                            name="name"
                            id="name"
                            value={name}
                            onChange={handleInputChanges()}
                            />
                        </div>
                        <div className="productEditFormInputContainer">
                            <label className="productEditForm_label" htmlFor="description">Description</label>
                            <input
                            className="productEditFormInput"
                            placeholder='Description of product'
                            name="description"
                            id="description"
                            value={description}
                            onChange={handleInputChanges()}
                            />
                        </div>
                        <div className="productEditFormInputContainer">
                            <label className="productEditForm_label" htmlFor="photo">Image</label>
                            <input
                            type="file"
                            className="productEditFormInput_image"
                            name="photo"
                            id="image"
                            value={id==='new'?photo:''}
                            onChange={handleInputChanges()}
                            />
                        </div>
                        <div className="productEditFormInputContainer">
                            <label className="productEditForm_label" htmlFor="price">Price</label>
                            <input
                            type="number"
                            min={0}
                            className="productEditFormInput"
                            placeholder='($) Price of product'
                            name="price"
                            id="price"
                            value={price}
                            onChange={handleInputChanges()}
                            />
                        </div>
                        <div className="productEditFormInputContainer">
                            <label className="productEditForm_label" htmlFor="owner">Owner</label>
                            <input
                            type="text"
                            className="productEditFormInput"
                            placeholder='Owner'
                            name="full_name"
                            id="owner"
                            value={owner.full_name}
                            onChange={handleInputChanges('owner')}
                            />
                        </div>
                        <div className="productEditFormInputContainer">
                            <label className="productEditForm_label" htmlFor="cuit">Cuit</label>
                            <input
                            type="number"
                            className="productEditFormInput"
                            placeholder='Cuit'
                            name="cuit"
                            id="cuit"
                            value={owner.cuit}
                            onChange={handleInputChanges('owner')}
                            />
                        </div>
                        <div className="productEditFormInputContainer">
                        <label className="productEditForm_label" htmlFor="province">Province</label>
                        <select
                        className="productEditFormInput"
                        id="province"
                        name="province"
                        value={address.province}
                        onChange={handleInputChanges('address')}
                        >
                        <option
                        >{owner?.address?.province?`${owner?.address?.province}`:'- Seleccione -'}</option>
                            {provincias.map(opcion=>(
                            <option key={opcion.id} value={opcion.nombre}>{opcion.nombre}</option>
                            ))}
                        </select>
                        </div>
                        <div className="productEditFormInputContainer">
                            <label className="productEditForm_label" htmlFor="street">Street</label>
                            <input
                            type="text"
                            className="productEditFormInput"
                            placeholder='Street'
                            name="street"
                            value={address.street}
                        onChange={handleInputChanges('address')}

                            id="street"
                            />
                        </div>
                            <div className="productEditFormInputContainer">
                            <label className="productEditForm_label" htmlFor="price">Nª Street</label>
                            <input
                            type="number"
                            min={0}
                            className="productEditFormInput"
                            placeholder='Street number'
                            name="number"
                            id="number"
                            value={address.number}
                        onChange={handleInputChanges('address')}
                            />
                        </div>
                        <input
                        type="submit"
                        className="productEdit_btnBack mt-4 w-5"
                        value={`${id!=='new'?'Update':'Create'}`}
                        disabled={startEdit}
                        />
                    </form>
                </div>
            </div>
        </Fragment>
     );
}
 
export default ProductEdit;
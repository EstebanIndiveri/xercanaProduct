import React, { Fragment,useState } from 'react';
import './ProductList.css';
import { deleteProduct, uploadProduct } from '../../controllers/Api';
import { useHistory } from 'react-router-dom';


const ProductList = ({product,setReload,setAlert}) => {
    const{name,price,state,description,id,owner}=product
    // eslint-disable-next-line no-unused-vars
    const{id:owner_id}=owner;
    const [newState,setNewState]=useState(state);
    const history=useHistory();
    const onHandleChange=(e)=>{
        setNewState(e.target.value);
        const cliente={
            ...product,
            state:e.target.value,
        }
        uploadProduct(id,cliente);
    };
const handleDelete=(id)=>{
    deleteProduct(id).then(res=>{
        setReload(true);
        window.scrollTo(0,0);
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 3000);
    })
}
const handleClick=(id)=>{
    const url=`/admin/product/${id}`
    setReload(true);
    history.push(url);
}
    return ( 
        <Fragment>
            <div className="adminPanel_grid">
                        <div className={`adminPanel_product-content ${newState?newState: ''}`}>
                            <div>
                                <h1 className="adminPanel_product_title">{name}</h1>
                                <p>{description}</p>
                                <p>$ {price}</p>
                                <select className="adminPanel_product_select" 
                                 onChange={e=>onHandleChange(e)}
                                value={newState}
                                >
                                    <option className="adminPanel_product_option"
                                    value="cancel"
                                    >
                                        Cancel
                                    </option>
                                    <option className="adminPanel_product_option"
                                    value="ready"
                                    >
                                        ready
                                    </option>
                                    <option className="adminPanel_product_option"
                                    value="send"
                                    >
                                        send
                                    </option>
                                    <option className="adminPanel_product_option"
                                    value="pending"
                                    >
                                        pending
                                    </option>
                                </select>
                                <div className="adminPanel_product_btnContainer" >
                                <button onClick={()=>handleClick(id)} className="adminPanel_product_btn">Edit all</button>
                                <button 
                            className="adminPanel_product_btn btnCancel"
                            onClick={()=>handleDelete(id)}>Delete
                            </button> 
                                </div>
                                
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1611738027468-129b8a3269ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" height="120px" width="120px"/>   
                            </div>
                            
                        </div>
                    </div>
        </Fragment>
     );
}
 
export default ProductList;
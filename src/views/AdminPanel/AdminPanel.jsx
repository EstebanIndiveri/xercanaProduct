import React, { Fragment,useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminPanelBar from '../../components/AdminPanelBar/AdminPanelBar';
import ProductList from '../../components/ProductList/ProductList';
import { getProducts } from '../../controllers/Api';
import './AdminPanel.css';

const AdminPanel = () => {
    const [navOpen, setNavOpen] = useState(true);
    const [productsadmin,setProductsadmin]=useState([]);
    const [reload,setReload]=useState(false);
    const [alert,setAlert]=useState(false);
    const handleMenuScroll=()=>{
        setNavOpen(!navOpen)
        if(navOpen){
            document.querySelector('.adminPanel_Wizard').classList.add('scrollview')
        }else{
            document.querySelector('.adminPanel_Wizard').classList.remove('scrollview')
        }
    }
    useEffect(()=>{
        getProducts().then(async(res)=>{
            await setProductsadmin(res);
        })
        setReload(false);
    },[reload])
    return ( 
        <Fragment>
            <div className="adminPanel_Container">
                <AdminPanelBar handleMenuScroll={handleMenuScroll}/>
                <div className="adminPanel_ProductSectionContainer" >
                {alert &&(
                    <div className="formLogin_modalAlert">Your product was deleted</div>
                    )}
                    <h1 className="adminPanel_ProductSectionContainer_title">All my products</h1>
                    <div className="adminPanel_ProductSectionContainer_btnNewContainer">
                    <button className="adminPanel_ProductSectionContainer_btnNew"><Link to="/admin/product/new">New product</Link></button>
                    </div>
                    {productsadmin.map(product=>(
                    <ProductList
                    key={product.id}
                    product={product}
                    setReload={setReload}
                    setAlert={setAlert}
                    />
                    ))}
                </div>
            </div>
        </Fragment>
     );
}
 
export default AdminPanel;
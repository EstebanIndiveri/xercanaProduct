import React, { Fragment,useState,useEffect } from 'react';
import Products from '../../components/Products/Products';
import SearchBar from '../../components/SearchBar/Searchbar';
import './ProductsScreen.css';
import {getFilterProducts, getProducts} from '../../controllers/Api';

const ProductsScreen = () => {
    const [products, setProducts] = useState([]);
    const [search,setSearch]=useState('');
    useEffect(() => {
        getProducts().then(async function(res){
            await setProducts(res); 
        });
    }, [search]);
    const handleSearch=async()=>{
        getFilterProducts(search).then(res=>{
            setProducts(res);
        })
    };
    return ( 
        <Fragment>
            <div className="productScreen_Container">
            <SearchBar setSearch={setSearch} handleSearch={handleSearch}/>
                <div className="productScreen_subnav">
                <h1 className="productScreen_title">New Products</h1>
                <div className="productScreen_listCatalogContainer">
                    <ul className="productScreen_listCatalogList">
                        <li className="productScreen_listCatalogItem active">All</li>
                        <li className="productScreen_listCatalogItem">Most Popular</li>
                        <li className="productScreen_listCatalogItem">Offer</li>
                    </ul>
                </div>
                </div>
            <main className="products_grid">
                {products.length===0?(<div>Can't find any products, try again</div>):null}
                {products.map((product)=>(
                    <Products key={product.id} product={product}/>
                ))}
            </main>
            </div>
        </Fragment>
     );
}
 
export default ProductsScreen;
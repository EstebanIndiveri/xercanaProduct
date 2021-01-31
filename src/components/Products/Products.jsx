import React, { Fragment } from 'react';
import productperfume from '../../assets/productperfume.webp';
import './Products.css';
const Products = ({product}) => {

// eslint-disable-next-line
    const{name,description,price,photo}=product;
    let random=Math.random().toFixed(10).toString();
    let idf='algo'+random;

    const handleExpand=()=>{
        document.getElementById(idf).classList.add('visible')

    }
    const handleContrain=()=>{
        document.getElementById(idf).classList.remove('visible');
    }
    return ( 
        <Fragment>
            <article onMouseEnter={handleExpand} onMouseLeave={handleContrain} className="articleContainer">
                <div className="products_article_containerImage">
                    <img className="products_article_image" src={productperfume} alt=""/>
                </div>
                <div className="article_productText">
                <h3 className="products_card_title">{name}</h3>
                <p id={idf}  className="products_card_description_invisible">{description}</p>
                <h4 className="products_card_price">$ {price}</h4>
                <div className="products_card_btn">Add Cart</div>
                </div>
            </article>
        </Fragment>
     );
}
 
export default Products;
import React, { Fragment } from 'react';
import clothe from '../../assets/clotheBanner.webp'
import './HeroBanner.css'; 

const HeroBanner = () => {
    return ( 
        <Fragment>
            <div className="homeScreen_hero">
                <div className="homeScreen_hero_imageContainer">
                    <img className="homeScreen_hero_image" src={clothe} alt=""></img>
                </div>
                <div className="homeScreen_hero_titleContainer">
                    <h1 className="homeScreen_hero_title">Find the product you were looking for right here</h1>
                </div>
            </div>
        </Fragment>

     );
}
 
export default HeroBanner;
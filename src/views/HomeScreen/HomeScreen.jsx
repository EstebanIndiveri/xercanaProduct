import React, { Fragment } from 'react';
import ArrowDown from '../../components/ArrowDown/ArrowDown';
import BannerLayout from '../../components/BannerLayout/BannerLayout';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import NavPayment from '../../components/NavPayment/NavPayment';

import './HomeScreen.css';

const HomeScreen = () => {
    return ( 
        <Fragment>
            <div className="homeScreen_Container">
                <HeroBanner/>
                <ArrowDown/>
                <NavPayment/>
                <Categories/>
                <BannerLayout/>    
            </div>
            <Footer/>
        </Fragment>
     );
}
 
export default HomeScreen;
import React, { Fragment } from 'react';
import creditCard from '../../assets/creditcard.png'
import debitCard from '../../assets/debitcard.png'
import cash from '../../assets/cash.png'
import morepay from '../../assets/morepay.png'



import './NavPayment.css';

const NavPayment = () => {
    return ( 
        <Fragment>
            <div className="HomeScreen_NavPayment">
                <div className="HomeScreen_NavPaymentContainer">
                    <div>
                        <ul className="HomeScreen_NavList">
                            <li className="HomeScreen_NavList_item"><img className="HomeScreen_NavList_Image" src={creditCard} alt=""/>Credit card</li>
                            <li className="HomeScreen_NavList_item"><img className="HomeScreen_NavList_Image" src={debitCard} alt=""/>Debit card</li>
                            <li className="HomeScreen_NavList_item"><img className="HomeScreen_NavList_Image" src={cash} alt=""/>Cash</li>
                            <li className="HomeScreen_NavList_item"><img className="HomeScreen_NavList_Image" src={morepay} alt=""/>More means of payment</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default NavPayment;
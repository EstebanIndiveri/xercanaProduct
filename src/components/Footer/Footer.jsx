import React, { Fragment } from 'react';

import './Footer.css';

const Footer = () => {
    return ( 
        <Fragment>
            <div className="footer_container">
                        <div>
                            <h2 >La more</h2>
                            <p>Shop</p>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>Pinterest</p>
                        </div>
                        <div>
                            <h2>Online Shop</h2>
                            <p>Whats New</p>
                            <p>Best selling</p>
                            <p>Gifts</p>
                            <p>The Brand</p>
                            <p>Magazine</p>
                        </div>
                        <div>
                            <h2>Customer Service</h2>
                            <p>Customer Service</p>
                            <p>Delivery</p>
                            <p>Email us</p>
                            <p>Chat now</p>
                        </div>
                        <div>
                            <h2>Privacy policy</h2>
                            <p>Items & conditions</p>
                            <p>Terms of sale</p>
                        </div>
                </div>
        </Fragment>
     );
}
 
export default Footer;
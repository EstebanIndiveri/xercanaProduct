import React, { Fragment } from 'react';
import aestetichperfume from '../../assets/aestetichperfume.webp';

import './BannerLayout.css';

const BannerLayout = () => {
    return ( 
        <Fragment>
            <div className="principalBanner_Container">
                    <div className="principalBanner_ContainerItems">
                        <div className="principalBanner_ImageContainer">
                            <img src={aestetichperfume} alt=""
                            className="principalBanner_Image"
                            />
                        </div>
                        <div className="principalBanner_TextContainer">
                            <h1 className="principalBanner_TextTitle">The best perfumes for you</h1>
                            <p className="principalBanner_TextParagraph">Perfect solution for everyday</p>
                        </div>
                    </div>
                </div>
                <div className="secondBanner_Container">
                    <div className="secondBanner_firstPanel">
                        <h2 >Why choose us</h2>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptas similique fugit dolore nam vitae veritatis et sed illum incidunt laudantium, architecto non accusantium dolores! Dignissimos error tempore numquam debitis.</p>
                    </div>
                    <div className="secondBanner_secondPanel">
                        <h2>simplicity and innovation</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque vitae, ducimus, accusantium magni debitis voluptates fugiat minus corporis saepe reiciendis itaque praesentium cupiditate aliquam non quibusdam nobis harum quo modi fugit hic laborum illum. Aspernatur provident totam laboriosam! Repellat, reprehenderit!</p>

                    </div>
                </div>
        </Fragment>
     );
}
 
export default BannerLayout;
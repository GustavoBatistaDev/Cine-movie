import React from 'react';

import './Styles.css';


function Footer(){
    return (
        <footer className='mt-5 main-footer ' id="footer-page">
            <div className="container">
                <div className="row ">
                    <div className="col-md-2">
                        <h2> Headline</h2>
                        <p>Sample footer text</p>
                    </div>
                    <div className="col-md-2">
                        <h2> Headline</h2>
                        <p>Sample footer text</p>
                    </div>
                    <div className="col-md-2">
                        <h2> Headline</h2>
                        <p>Sample footer text</p>

                    </div>
                    <div className="col-md-4 ml-auto">
                        <img height="120" className='' src="https://s2.glbimg.com/YZmm9KuxGZiPeMTSQdyQM0zpusM=/285x285/https://s2.glbimg.com/bJGBHfbR0EjG4HuU5D_DRly9xaE=/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2022/3/c/XbipmsR1GqcaCe5OVNkQ/cult.png" alt="" />
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;

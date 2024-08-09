import React from 'react';
import facebookLogo from '../images/facebookLogo.png'

const Footer = () => {
    return(
        <footer className='dogFooter'>
            <a href='https://www.facebook.com' target='_blank'><img src={facebookLogo} alt='facebbok logo' className ='footerImage'></img></a>
            <p>
                copyright Barking Lot
            </p>
        </footer>
    );
};

export default Footer;
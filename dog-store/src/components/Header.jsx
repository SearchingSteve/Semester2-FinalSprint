import React from 'react';
import headerImage from '../images/headerImage.jpg';

function Header(){
    return(
        <header>
            <img src={headerImage} alt='Barking Lot Logo' className ='headerImage'></img>
            <h3>
                The Barking Lot
            </h3>
            <p>
                <em>
                    we have something for every breed!
                </em>
            </p>
            <div class='dogBreedImages'>
                <img></img>
                <img></img>
                <img></img>
                <img></img>
                <img></img>
            </div>
        </header>
    )
}
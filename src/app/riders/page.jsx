import React from 'react';
import Hero from './Hero';
import Move from './Move';
import Rules from './Rules';
import Court from './Court';
import Power from './Power';
import Map from './Map';
import Footer from './Footer';

const page = () => {
    return (
        <div>
            <Hero/>
            <Move/>
            <Rules/>
            <Court/>
            <Power/>
            <Map/>
            <Footer/>
        </div>
    );
};

export default page;
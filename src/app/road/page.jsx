import React from 'react';
import Hero from './Hero';
import TreediTogether from './TreediTogether';
import Drive from './Drive';
import DataCollector from './DataCollector';
import Power from './Power';
import Map from './Map';
import Footer from './Footer';

const page = () => {
    return (
        <div>
            <Hero/>
            <TreediTogether/>
            <Drive/>
            <DataCollector/>
            <Power/>
            <Map/>
            <Footer/>
        </div>
    );
};

export default page;
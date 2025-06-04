import React from 'react';
import Hero from './Hero';
import TreediAPIs from './TreediApi';
import Mapping from './Mapping';
import TrafficAPICard from './ApiCard';
import TreedimapCard from './TreedimapCard';
import Footer from './Footer';

const page = () => {
    return (
        <div>
            <Hero/>
            <TreediAPIs/>
            <Mapping/>
            <TrafficAPICard/>
            <TreedimapCard/>
            <Footer/>
        </div>
    );
};

export default page;
import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Navbar from '../Navbar/Navbar';
import Pricing from '../Pricing/Pricing';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Features></Features>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;
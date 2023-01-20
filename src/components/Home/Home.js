import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Features></Features>
        </div>
    );
};

export default Home;
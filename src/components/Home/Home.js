import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Navbar from '../Navbar/Navbar';
import Pricing from '../Pricing/Pricing';
import ProfileSection from '../ProfileSection/ProfileSection';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Features></Features>
            <Pricing></Pricing>
            <ProfileSection></ProfileSection>
        </div>
    );
};

export default Home;
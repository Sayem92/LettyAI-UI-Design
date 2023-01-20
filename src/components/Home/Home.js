import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;
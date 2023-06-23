import React from 'react';

//Components
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Experiance from './Experiance';


const Home = () => {
    return (
        <>
            <About />
            <Experiance />
            <Portfolio />
            <Contact />
        </>
    );
};

export default Home;
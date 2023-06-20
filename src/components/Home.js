import React from 'react';

//Components
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';


const Home = () => {
    return (
        <>
            <About />
            <Services />
            <Portfolio />
            <Contact />
        </>
    );
};

export default Home;
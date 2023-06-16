
import { useEffect } from 'react';
import Aos from 'aos';

import './App.css';


//Components
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <Header />
        <main>
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </main>
      <Footer />
    </>
  );
}

export default App;

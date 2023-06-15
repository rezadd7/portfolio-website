
import { useEffect } from 'react';
import Aos from 'aos';

import './App.css';


//Components
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

function App() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <Header />
        <main>
          <Banner />
          <Services />
          <Portfolio />
        </main>
      <Footer />
    </>
  );
}

export default App;

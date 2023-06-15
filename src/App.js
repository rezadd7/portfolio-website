
import { useEffect } from 'react';
import Aos from 'aos';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <Header />
        <main>
          <Banner />
        </main>
      <Footer />
    </>
  );
}

export default App;

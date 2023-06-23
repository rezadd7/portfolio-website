
import { useEffect, useState } from 'react';
import { Route,Routes, Navigate } from 'react-router-dom';

//CSS
import Aos from 'aos';
import './App.css';


//Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';




function App() {

  useEffect(() => {
    Aos.init();
  }, [])


  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <main className=' bg-white dark:bg-[#1c2833]'>
              <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/*' element={<Navigate to="/"/>}/>
              </Routes>  
            </main>
        <Footer /> 
    </div>

  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';



//CSS
import './index.css';
import "aos/dist/aos.css";
import 'remixicon/fonts/remixicon.css';



//Component
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
);



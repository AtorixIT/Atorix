import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';


function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Atorix IT Solutions");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
          </Routes>
        </ScrollToTop>  
      </Router>
    </>
  );
}


export default App;





// import React from "react";
// import ReactDOM from "react-dom";
// // import LiquidSwipe from "./LiquidSwipe"; // Import the LiquidSwipe component

// const App = () => {
//   return (
//     <div>
//       <LiquidSwipe /> {/* Render the LiquidSwipe component */}
//     </div>
//   );
// };

// // Render the App component to the root element
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// export default App;

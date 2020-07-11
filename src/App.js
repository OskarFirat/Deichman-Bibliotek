import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/footer.js';
import Home from './Home';


function App() {
  return (
        <div>
          <Navbar/>
          <Home/>
          <Footer/> 
        </div>
  );
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Components/Home';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-wrap">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;

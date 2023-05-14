import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import VansList from './components/VansList';
import './server';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <main>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vans" element={<VansList />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </main>
    );
}

export default App;

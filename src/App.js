import React from 'react';
import Home from './components/Home';
import About from './components/About';
import VansList from './components/VansList';
import './server';
import DetailPage from './components/DetailPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Dashboard from './components/Host/Dashboard';
import Income from './components/Host/Income';
import Reviews from './components/Host/Reviews';
import Hostleyout from './components/Host/Hostleyout';

function App() {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        
                        <Route path="vans" element={<VansList />} />
                        <Route path="vans/:id" element={<DetailPage />} />

                        {/* Host start */}
                        <Route path="host" element={<Hostleyout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="incomes" element={<Income />} />
                            <Route path="reviews" element={<Reviews />} />
                        </Route>
                    </Route>
                    {/* Host end */}
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;

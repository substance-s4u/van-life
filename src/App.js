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
import HostLayout from './components/Host/HostLayout';
import HostVans from './components/Host/HostVans';
import HostVansDetail from './components/Host/HostVansDetail';
import HostVanDetail from './components/Host/HostVanDetail';
import HostVanPricing from './components/Host/HostVanPricing';
import HostVanPhotos from './components/Host/HostVanPhotos';

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
                        <Route path="host" element={<HostLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="incomes" element={<Income />} />
                            <Route path="reviews" element={<Reviews />} />
                            <Route path="vans" element={<HostVans />} />
                            <Route path="vans/:id" element={<HostVansDetail />}>
                                <Route index element={<HostVanDetail/>}/>
                                <Route path="pricing" element={<HostVanPricing/>}/>
                                <Route path="photos" element={<HostVanPhotos/>}/>
                            </Route>
                        </Route>
                    </Route>
                    {/* Host end */}
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';

import Home from './templates/Home/Index.jsx';
import { MovieDetail } from './templates/MovieDetail/index.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';




ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/filmes/:genero" element={<Home />} />
                <Route path="/filme/:id" element={<MovieDetail />} />
      
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

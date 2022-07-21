import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Portfolio from "./Portfolio"

function AppRouter() {
    return (
       <BrowserRouter>
        <Routes>
            <Route path="/personal-website/" element={
                <Home />
            }/>
            <Route path="/personal-website/portfolio" element={
                <Portfolio />
            }/>
        </Routes>
       </BrowserRouter>
    )
    
}

export default AppRouter
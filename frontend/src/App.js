import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/aboutme" index element={<AboutMePage />} />
        <Route path="/projects" index element={<ProjectsPage />} />
        <Route path="/contact" index element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

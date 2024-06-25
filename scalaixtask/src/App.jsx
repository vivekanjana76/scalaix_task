import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ImageDetailsPage from './pages/ImageDetailsPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:id" element={<ImageDetailsPage />} />
    </Routes>
  </Router>
);

export default App;

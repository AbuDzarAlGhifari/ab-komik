import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import DetailKomik from './pages/detail/DetailKomik';
import ChaptersPage from './pages/chapter/ChaptersPage';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:komikId" element={<DetailKomik />} />
        <Route path="/chapter/:chapterSlug" element={<ChaptersPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

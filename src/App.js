import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import NotFound from './components/other/NotFound';



function App() {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

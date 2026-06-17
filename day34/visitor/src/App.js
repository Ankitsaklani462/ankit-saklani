import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VisitorPass from './VisitorPass';
import AdminPanel from './AdminPanel'; // Ensure this file exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VisitorPass />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
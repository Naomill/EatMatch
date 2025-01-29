import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AdsPage from './pages/AdsPage';

function App() {
  return (
    <Router>
      <AdsPage />
    </Router>
  );
}

export default App;
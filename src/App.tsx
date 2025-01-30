import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdsPage from './pages/AdsPage';
import EatForEverymood from "./pages/MoodsPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/ads' element={<AdsPage />} />
        <Route path='/eats-for-every-mood' element={<EatForEverymood />} />
      </Routes>
    </Router>
  );
}

export default App;
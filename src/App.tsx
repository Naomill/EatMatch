import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdsPage from './pages/AdsPage';
import EatForEverymood from "./pages/MoodsPage"
import EatByDestiny from "./pages/DestinyPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/ads' element={<AdsPage />} />
        <Route path='/eats-for-every-mood' element={<EatForEverymood />} />
        <Route path='/eat-by-destiny' element={<EatByDestiny />} />
      </Routes>
    </Router>
  );
}

export default App;
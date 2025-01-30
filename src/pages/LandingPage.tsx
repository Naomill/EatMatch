import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-kodchasan mb-4">
          Welcome to EatMatch!
        </h1>
        <p className="text-lg text-gray-700 font-kodchasan mb-8 max-w-xl">
          Discover fun ways to choose your next meal, explore deals, and find the best food for your mood.
        </p>
        <Link to="/ads" className="bg-black text-white px-6 py-3 rounded-full font-kodchasan hover:bg-gray-800">
          Explore Deals
        </Link>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'

function App() {
  return (
    <div >
      <BrowserRouter>
        <nav className='bg-[darkgray] h-16 mb-6'>
          <Link to="/" className='text-3xl text-[white]  mr-3 font-semibold'>
            Home
            </Link>
          <Link to="/about" className='text-3xl text-[white] mr-3 font-semibold'>
            About
            </Link>
          <Link to="/doctor" className='text-3xl text-[white] mr-3 font-semibold'>
            Doctor
            </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<Doctors />} />
          <Route path="/about" element={<About></About>} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;

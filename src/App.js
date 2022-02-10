import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import About from './Pages/About/About';
import Admission from './Pages/Admission/Admission';
import Contact from './Pages/Contact/Contact';
import Courses from './Pages/Courses/Courses';
import Facilities from './Pages/Facilities/Facalities';
import Gallery from './Pages/Gallery/Gallery';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Reviews from './Pages/Reviews/Reviews';
import Services from './Pages/Services/Services';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/services' element={<Services />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

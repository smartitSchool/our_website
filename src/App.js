import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import About from './Pages/About/About';
import Admission from './Pages/Admission/Admission';
import Contact from './Pages/Contact/Contact';
import CourseDetails from './Pages/CourseDetails/CourseDetails';
import Courses from './Pages/Courses/Courses';
import Facilities from './Pages/Facilities/Facalities';
import Gallery from './Pages/Gallery/Gallery';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Reviews from './Pages/Reviews/Reviews';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Services from './Pages/Services/Services';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/admission' element={<PrivateRoute><Admission /></PrivateRoute>} />
          <Route path='/services' element={<Services />} />
          <Route path='/facilities' element={<Facilities />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/details/:id' element={<PrivateRoute><ServiceDetails/></PrivateRoute>}/>
          <Route path='/courseDetails/:id' element={<CourseDetails/>}/>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import './App.css';
import Home from './Pages/Home';
import CreateCourse from './ADMIN_PAGES/CreateCourse';
import ViewCourse from './ADMIN_PAGES/ViewCourse';
import SingleCourse from './Pages/SingleCourse';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Single/:id" element={<SingleCourse />} />
        <Route path="/admin" element={<CreateCourse />} />
        <Route path="/viewCourse" element={<ViewCourse />} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
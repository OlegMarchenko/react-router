import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from '../../pages/Home/Home';
import Layout from '../Layout/Layout';
import NotFound from '../../pages/NotFound/NotFound';
import Contact from '../../pages/Contact/Contact';
import About from '../../pages/About/About';
import AboutCharacter from '../../pages/AboutCharacter/AboutCharacter';
import Location from '../../pages/Location/Location';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="about-character/:id" element={<AboutCharacter />} />
          <Route path="about-character/:id/location/:locationId" element={<Location />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Component/Section/NavBar';
import HeroSection from './Component/Section/HeroSection';

import CTA from './Component/Section/CTA';
import Testimonial from './Component/Section/TestImonial';
import Show from './Component/Section/Show'
import Tvprog from './Component/Section/tvprog';
import News from './Component/Section/News'
import Footer from './Component/Section/Footer'
import AboutUs from './Component/Page/AboutUs';
import Contact from './Component/Page/Contact';
import Blog from './Component/Page/Blog';
import Home from './home';
import Article from './Component/Section/article';
const App = () => {
  return (
    <Router>
      <NavBar  />
      <Routes>
   
      <Route path="/" element={<Home />} />
      <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cta" element={<CTA />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/show" element={<Show />} />
        <Route path="/tvprog" element={<Tvprog />} />
        <Route path="/news" element={<News />} />
     
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article" element={<Article/>} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
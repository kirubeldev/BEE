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

import Home from './home';
import Article from './Component/Section/article';
import Chat from './Component/Page/chat';
import Blogs from './Component/Page/blogss';
import Movie from './Component/Page/movie';
import Vision from './Component/Section/Vision';
import Chatm1 from './Component/Page/chatm1';
import Chatm2 from './Component/Page/chatm2';
const App = () => {
  
  return (
    
    <Router>
      <NavBar  />
      <Routes>
   
      <Route path="/" element={<Home />} exact />

      <Route path="herosection" element={<HeroSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cta" element={<CTA />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/show" element={<Show />} />
        <Route path="/tvprog" element={<Tvprog />} />
        <Route path="/news" element={<News />} />
        <Route path="/chatm1" element={<Chatm1 />} />
        <Route path="/chatm2" element={<Chatm2 />} />
     
     
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/vision" element={<Vision />} />
       
        <Route path="/article" element={<Article/>} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/blogs" element={<Blogs />} />

          <Route path="/movie" element={<Movie />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

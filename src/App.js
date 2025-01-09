import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Home/Navbar';
import Footer from './Components/Home/Footer';
import AboutUs from './Components/Home/AboutUs';
import WhyChooseUs from './Components/Home/WhyChooseUs';
import BestCourse from './Components/Home/BestCourse';
import UiUxDesign from './Components/uiux/UiUxDesign';
import UiLearn from './Components/uiux/UiLearn';
import About from './Components/About/About';
import ContactSection from './Components/Contact/ContactSection';
import Carousel from './Components/Home/Carousel';
import UiUxRoadMap from './Components/uiux/UiUxRoadMap';
import Event from './Components/Home/Event';
import AbtCarousel from './Components/About/AbtCarousel';
import VideoIcon from './Components/Home/VideoIcon';
import Video from './Components/Home/Video';
import UiUxFaq from './Components/uiux/UiUxFaq';
import Refund from './Components/Policy/Refund';
import TermService from './Components/Policy/TermService';
import PrivacyPolicy from './Components/Policy/PrivacyPolicy';
import ShippingPolicy from './Components/Policy/ShippingPolicy';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Home /> <AboutUs/><BestCourse/> <WhyChooseUs/> <Carousel/> <Event/>   <VideoIcon/></>} />
          <Route path="/about" element={<> <About/> <AbtCarousel/> </>}/>
          <Route path="/ui-ux" element={<> <UiUxDesign/> <UiUxRoadMap/> <UiLearn/> <UiUxFaq/> </>}/>
          <Route path="/contact" element={<> <ContactSection/> </>}/>
          <Route path='/video' element={<><Video/></>}/>
          <Route path="/refund-policy" element={<Refund/>} />
          <Route path="/terms-service" element={<TermService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Home/Navbar';
import Footer from './Components/Home/Footer';
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
import Certification from './Components/Home/Certification';
import PythonFull from './Components/python-fullstack/Pythonfull';



import popupImage from './Components/images/pop.gif';

import Popup from './Components/Home/Popup';
import PyFullRoadMap from "./Components/python-fullstack/PyFullRoadMap";
import PythonLearn from "./Components/python-fullstack/PythonLearn";
import PythonFaq from "./Components/python-fullstack/PythonFaq";
import WhatsApp from "./Components/Contact/WhatsApp";
import ChatBot from "./Components/Contact/ChatBot";
import JavaFull from "./Components/Java-fullstack/JavaFull";
import JavaRoadMap from "./Components/Java-fullstack/JavaRoadMap";
import JavaLearn from "./Components/Java-fullstack/JavaLearn";
import JavaFaq from "./Components/Java-fullstack/JavaFaq";
import Software from "./Components/software/Software";
import SoftwareFaq from "./Components/software/SoftwareFaq";
import SoftwareLearn from "./Components/software/SoftwareLearn";
import SoftwareRoadMap from "./Components/software/SoftwareRoadMap";
import NodeRoadMap from "./Components/Nodejs/NodeRoadMap";
import NodeLearn from "./Components/Nodejs/NodeLearn";
import Node from "./Components/Nodejs/Node";
import NodeFaq from "./Components/Nodejs/NodeFaq";
import Frontend from "./Components/Frontend/Frontend";
import FrontendRoadMap from "./Components/Frontend/FrontendRoadMap";
import FrontendLearn from "./Components/Frontend/FrontendLearn";
import FrontendFaq from "./Components/Frontend/FrontendFaq";
import BackendJava from "./Components/BackendJava/BackendJava";
import BackJavaRoadMap from "./Components/BackendJava/BackJavaRoadMap";
import BackendJavaLearn from "./Components/BackendJava/BackendJavaLearn";
import BackendJavaFaq from "./Components/BackendJava/BackendJavaFaq";
import MernStack from "./Components/Mern-stack/MernStack";
import MernStackRoadMap from "./Components/Mern-stack/MernStackRoadMap";
import MernLearn from "./Components/Mern-stack/MernLearn";
import MernStackFaq from "./Components/Mern-stack/MernStackFaq";
import Digital from "./Components/Digital-Marketting/Digital";
import DigitalRoadMap from "./Components/Digital-Marketting/DigitalRoadMap";
import DigitalLearn from "./Components/Digital-Marketting/DigitalLearn";
import DigitalFaq from "./Components/Digital-Marketting/DigitalFaq";
import Aws from "./Components/Aws/Aws";
import AwsRoadMap from "./Components/Aws/AwsRoadMap";
import AWSLearn from "./Components/Aws/AwsLearn";
import AwsFaq from "./Components/Aws/AwsFaq";
import Analytics from "./Components/Business/Analytics";
import AnalyticsRoadMap from "./Components/Business/AnalyticsRoadMap";
import AnalyticsLearn from "./Components/Business/AnalyticsLearn";
import AnalyticsFaq from "./Components/Business/AnalyticsFaq";
import BackPy from "./Components/Backend-Python/BackPy";
import BackPyRoadMap from "./Components/Backend-Python/BackPyRoadMap";
import BackPyLearn from "./Components/Backend-Python/BackPyLearn";
import BackPyFaq from "./Components/Backend-Python/BackPyFaq";
import Science from "./Components/Data-Science/Science";
import ScienceRoadMap from "./Components/Data-Science/ScienceRoadMap";
import ScienceLearn from "./Components/Data-Science/ScienceLearn";
import ScienceFaq from "./Components/Data-Science/ScienceFaq";
import MobApp from "./Components/Mob-App/MobApp";
import MobAppRoadMap from "./Components/Mob-App/MobAppRoadMap";
import MobLearn from "./Components/Mob-App/MobLearn";
import MobFaq from "./Components/Mob-App/MobFaq";
import Data from "./Components/Data-Analytics/Data";
import DataRoadMap from "./Components/Data-Analytics/DataRoadMap";
import DataLearn from "./Components/Data-Analytics/DataLearn";
import DataFaq from "./Components/Data-Analytics/DataFaq";

function AppWrapper() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const location = useLocation(); 

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setPopupOpen(true); 
    } else {
      setPopupOpen(false); 
    }
  }, [location.pathname]);

  return (
    <div>
      <Navbar />

      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        imagePath={popupImage} 
      />

      <Routes>
        <Route path="/" element={<><Home />  <BestCourse /> <WhyChooseUs /> <Carousel /> <Certification /> <Event /> <VideoIcon /> <WhatsApp/> <ChatBot/></>} />
        <Route path="/about" element={<><About /> <AbtCarousel /></>} />
        <Route path="/python" element={<><PythonFull/><PyFullRoadMap/><PythonLearn/><PythonFaq/></>}/>
        <Route path="/java" element={<><JavaFull/><JavaRoadMap/><JavaLearn/><JavaFaq/></>}/>
        <Route path="/ui-ux" element={<><UiUxDesign /> <UiUxRoadMap /> <UiLearn /> <UiUxFaq /></>} />
        <Route path="/software-testing" element={<><Software/> <SoftwareRoadMap/> <SoftwareLearn/> <SoftwareFaq/></>}/>
        <Route path="/node" element={<><Node/><NodeRoadMap/><NodeLearn/><NodeFaq/></>}/>
        <Route path="/frontend-developer" element={<><Frontend/><FrontendRoadMap/><FrontendLearn/><FrontendFaq/></>}/>
        <Route path="/backend-java" element={<><BackendJava/> <BackJavaRoadMap/> <BackendJavaLearn/> <BackendJavaFaq/></>}/>
        <Route path="/mern-stack" element={<><MernStack/> <MernStackRoadMap/> <MernLearn/> <MernStackFaq/></>}/>
        <Route path="/digital-marketing" element={<><Digital/><DigitalRoadMap/><DigitalLearn/><DigitalFaq/></>}/>
        <Route path="/aws" element={<><Aws/><AwsRoadMap/><AWSLearn/><AwsFaq/></>}/>
        <Route path="/business-analytics" element={<><Analytics/><AnalyticsRoadMap/><AnalyticsLearn/><AnalyticsFaq/></>}/>
        <Route path="/backend-python" element={<><BackPy/><BackPyRoadMap/><BackPyLearn/><BackPyFaq/></>}/>
        <Route path="/data-science" element={<><Science/><ScienceRoadMap/><ScienceLearn/><ScienceFaq/></>}/>
        <Route path="/mobile-app" element={<><MobApp/><MobAppRoadMap/><MobLearn/><MobFaq/></>}/>
        <Route path="/data-analytics" element={<><Data/><DataRoadMap/><DataLearn/><DataFaq/></>}/>
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/video" element={<Video />} />
      </Routes>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;

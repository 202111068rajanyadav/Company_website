import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footers from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
// import Home from "./components/Home/Home";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Home/HeroSection";
import WhySupes from "./components/Home/WhySupes";
import WhatWeOffer from "./components/Home/WhatWeOffer";
import Map from "./components/Home/Map";
import Service from "./components/Services/service";
// import About from "./components/Home/About";
import Insights from "./components/Insights/insights";
import CaseStudies from "./components/CaseStudies/caseStudies";
import Career from "./components/Career/career";
import Contact from "./components/Contact/contact";
import Login from "./components/Login/Login";
import AboutUs from "./components/About/aboutUs";
import About from "./components/Home/About";



function App() {
  return (
    <Router>
      {/* Global Header */}
      <Header />

      {/* Define the Routes for the pages */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <> 
              {/* <Home />  */}
              <Hero />
              <About />
              <WhySupes />
              <WhatWeOffer />
              <Map />
            </>
          }
        />

        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/employee-login" element={<Login  />} />
      </Routes>

      {/* Global Footer */}
      <Footers />
    </Router>
  );
}

export default App;

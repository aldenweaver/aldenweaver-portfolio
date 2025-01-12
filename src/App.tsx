import { BrowserRouter } from "react-router-dom";

import { useEffect } from "react";
import {
  About,
  Certifications,
  EarthCanvas,
  // Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Certifications />
        <EarthCanvas/>
        <div className="relative z-0">
          {/* <Contact /> */}
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

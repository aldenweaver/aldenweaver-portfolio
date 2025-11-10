import { BrowserRouter } from "react-router-dom";

import { useEffect } from "react";
import {
  About,
  Certifications,
  // Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  // Works,
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
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <div className="bg-primary relative z-0">
        <header>
          <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
            <Navbar />
            <Hero />
          </div>
        </header>
        <main id="main-content">
          <About />
          <Experience />
          <Tech />
          {/* <Works /> */}
          <Certifications />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

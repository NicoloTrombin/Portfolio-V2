import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Preloader } from './components';
import { useEffect, useState } from "react";

const App = () => {
  const [isModelLoading, setIsModelLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setIsModelLoading(false);
      }, 2000);
    }, []);

  return (
    <BrowserRouter>
       {isModelLoading ? <Preloader /> : null}

      {!isModelLoading && (
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>

      )}
    </BrowserRouter>
  )
}

export default App

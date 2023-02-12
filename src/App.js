import { useState, useEffect } from "react";
import DotGroup from "./sceens/DotGroup";
import Landing from './sceens/Landing';
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./sceens/Navbar";
import LineGradient from './components/LineGradient';
import MySkills from './sceens/MySkills';
import Projects from './sceens/Projects';
import Testimonials from './sceens/Testimonials';
import Contact from './sceens/Contact';
import Footer from './sceens/Footer';

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY !== 0)
        setIsTopOfPage(false);
      if (window.scrollY === 0)
        setIsTopOfPage(true);
      if (window.scrollY >= 0 && window.scrollY <= 710) {
        setSelectedPage("home");
      }
      else if (window.scrollY <= 1455) {
        setSelectedPage("skills");
      }
      else if (window.scrollY <= 2277) {
        setSelectedPage("testimonials");
      }
      else {
        setSelectedPage("contact");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
          <MySkills />
      </div>
      <LineGradient />
      {/* <div className="w-5/6 mx-auto">
          <Projects />
      </div>
      <LineGradient /> */}
      <div className="w-5/6 mx-auto md:h-full">
          <Testimonials />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
          <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

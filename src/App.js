import Home from "./components/Home";
import NavBar from "./components/NavBar";
import DotGroup from "./components/DotGroup";
import Intro from "./components/Intro";
import Type from "./components/Type";
import Profile from "./components/Profile";
import Code from "./components/Code";
import LinearGradient from "./components/LineGradient"
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Footer from "./components/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-purple">
     <NavBar
     isTopOfPage={isTopOfPage}
     selectedPage={selectedPage} 
     setSelectedPage={setSelectedPage}/>
     <div className="w-5/6 mx-auto md:h-full">
      {isAboveMediumScreens && (
        <DotGroup
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
      )}
      <Home setSelectedPage={setSelectedPage}/>
     </div>
     <LinearGradient />
     <div className="w-5/6 mx-auto md:h-full"> 
     <Intro />
     </div>
     <div className="w-5/6 mx-auto md:h-full"/>
     <LinearGradient />
     <div className="w-5/6 mx-auto md:h-full"> 
     <Type />
     </div >
     <div className="w-5/6 mx-auto md:h-full"/>
     <LinearGradient />
     <br />
     <div className="w-5/6 mx-auto md:h-full">
      <Code />
     </div>
     <LinearGradient />
     <div className="w-5/6 mx-auto md:h-full">
      <Profile />
     </div>
     <div className="w-5/6 mx-auto md:h-1/4"></div>
     <LinearGradient />
     <Footer />
    </div>
  );
}

export default App;

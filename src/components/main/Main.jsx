import "./Main.css";

import Navbar from "./nav/Nav";
import Side from "../side/Side";
import Projects from "./projects/Projects";
import PageNav from "./pageNav/PageNav";

const Hero = () => {
  return (
    <div className="main-container">
      <div className="sub-main-container">
        <div className="side-container">
          <Side />
        </div>
        <div className="home-container">
          <Navbar />
          <Projects />
          <PageNav />
        </div>
      </div>
    </div>
  );
};

export default Hero;

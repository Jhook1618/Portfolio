import "./Main.css";

import Side from "../1.side/Side";
import Navbar from "./1.nav/Nav";
import Projects from "./2.projects/Projects";
import PageNav from "./3.pageNav/PageNav";
import About from "./4.about/About";
import ChargeSheet from "./5.chargeSheet/ChargeSheet";
import Contacts from "./6.contacts/Contacts";
import Footer from "./7.footer/Footer";

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
          <About />
          <ChargeSheet />
          <Contacts />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Hero;

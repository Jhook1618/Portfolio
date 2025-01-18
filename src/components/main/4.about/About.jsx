import "./About.css";
import "./Skills.css";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNode,
  FaReact,
  FaGithub,
  // FaExpress,
  // FaMongoDB,
  FaPython,
} from "react-icons/fa";

import flower from "../../../assets/images/rocks.avif";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image-cont">
        <img src={flower} alt="Flower" />
      </div>
      <div className="about-text-cont">
        <p>About me</p>
        <p>
          I am a fullstack developer with a passion for creating innovative and
          user-friendly web applications. With a strong background in web
          development, I have experience in building and maintaining complex
          applications. I have a heart of love and an interest of lorem ipsum
          and mauris neque quam blog. <br /> <br />I want to share my world with
          you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
          condimentum, porta lectus vitae, ultricies congue gravida diam non
          fringilla. Praesent tincidunt sed tellus ut rutrum. <br /> <br />
          Sed vitae justo condimentum, porta lectus vitae, ultricies congue
          gravida diam non fringilla.
        </p>
      </div>

      {/* Skills Section */}
      <div className="skills-container">
        {/* header */}
        <p className="skills-title">TECHNICAL SKILLS</p>

        {/* Skills List */}
        <div className="skills">
          {/* HTML5 */}
          <p className="skills-items">
            <span className="item-icon">
              <FaHtml5 />
            </span>
            HTML5
          </p>
          <div className="bg-container">
            <div className="bg">
              <p>90%</p>
            </div>
          </div>

          {/* CSS3 */}
          <p className="skills-items">
            <span className="item-icon">
              <FaCss3 />
            </span>
            CSS3
          </p>
          <div className="bg-container">
            <div className="bg">
              <p>70%</p>
            </div>
          </div>

          {/* JAVASCRIPT */}
          <p className="skills-items">
            <span className="item-icon">
              <FaJs />
            </span>
            JAVASCRIPT
          </p>
          <div className="bg-container">
            <div className="bg">
              <p>90%</p>
            </div>
          </div>

          {/* REACTJS */}
          <p className="skills-items">
            <span className="item-icon">
              <FaReact />
            </span>
            REACTJS
          </p>
          <div className="bg-container">
            <div className="bg">
              <p>85%</p>
            </div>
          </div>

          {/* NODEJS */}
          <p className="skills-items">
            <span className="item-icon">
              <FaNode />
            </span>
            NODEJS
          </p>
          <div className="bg-container">
            <div className="bg">
              <p>60%</p>
            </div>
          </div>

          {/* EXPRESSJS */}
          <p className="skills-items">
            {/* <FaExpress /> */}
            EXPRESSJS
          </p>
          <div className="bg-container">
            <div className="bg">
              <p>50%</p>
            </div>
          </div>

          {/* GITHUB */}
          <p className="skills-items">
            <span className="item-icon">
              <FaGithub />
            </span>
            GITHUB
          </p>
          <div className="bg-container">
            <div className="bg">
              <p>60%</p>
            </div>
          </div>

          {/* MONGODB */}
          <p className="skills-items">
            {/* <FaMongoDB /> */}
            MONGODB
          </p>
          <div className="bg-container">
            <div className="bg">
              <p>50%</p>
            </div>
          </div>

          {/* PYTHON3 */}
          <p className="skills-items">
            <span className="item-icon">
              <FaPython />
            </span>
            PYTHON3
          </p>
          <div className="bg-container">
            <div className="bg">
              <p>50%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

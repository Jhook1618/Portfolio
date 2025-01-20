import "./Side.css";
import { Link } from "react-router-dom";
import Photo from "../../assets/images/unnamed.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

import {
  faSquareGithub,
  faSquareFacebook,
  faSquareXTwitter,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-logo">
        <img src={Photo} alt="Passport" className="passport-photo" />
        <p className="name">James Ngari</p>
        <p>Fullstack Developer</p>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faLayerGroup} className="icon" />
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FontAwesomeIcon icon={faUser} className="icon" />
                About
              </Link>
            </li>
            <li>
              <Link to="/contacts">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        <div className="social-media-container">
          <div className="social-media">
            <FontAwesomeIcon icon={faSquareGithub} className="icon-social" />
            <FontAwesomeIcon icon={faLinkedin} className="icon-social" />
            <FontAwesomeIcon icon={faSquareFacebook} className="icon-social" />
            <FontAwesomeIcon icon={faSquareXTwitter} className="icon-social" />
            <FontAwesomeIcon icon={faSquareInstagram} className="icon-social" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import "./Nav.css";
import { useState } from "react";

const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  let links = [
    { index: 1, name: "ALL" },
    { index: 8, name: "HTML5" },
    { index: 9, name: "CSS3" },
    { index: 7, name: "JAVASCRIPT" },
    { index: 4, name: "REACT" },
    { index: 10, name: "GIT" },
    { index: 11, name: "GITHUB" },
    { index: 5, name: "NODEJS" },
    { index: 3, name: "EXPRESSJS" },
    { index: 2, name: "MONGODB" },
    { index: 6, name: "PYTHON3" },
  ];

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <h4>PORTFOLIO</h4>
      </div>
      <div>
        <div className="nav-filter">
          <h5>Tags:</h5>

          {/* Skills List */}
          {/* {items.map((item) => ())} */}
          {links.map((link) => (
            <p
              key={link.index}
              className={link.index === activeIndex ? "active" : "inactive"}
              onClick={() => {
                setActiveIndex(link.index);
              }}
            >
              {link.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;

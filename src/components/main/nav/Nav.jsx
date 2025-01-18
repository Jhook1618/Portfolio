import "./Nav.css";
import { useState } from "react";

const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  let links = [
    { index: 1, name: "ALL" },
    { index: 2, name: "MONGODB" },
    { index: 3, name: "EXPRESS" },
    { index: 4, name: "REACT" },
    { index: 5, name: "NODEJS" },
  ];

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <h4>PORTFOLIO</h4>
      </div>
      <div>
        <div className="nav-filter">
          <h5>Filter:</h5>

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

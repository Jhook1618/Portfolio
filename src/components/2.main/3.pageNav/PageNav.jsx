import "./PageNav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const PageNav = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(1);

  const items = Array.from({ length: 5 }, (_, index) => ({
    index: index + 1,
  }));

  return (
    <div className="PageNav-container">
      <div className="PageNav">
        <p>&lt;&lt;</p>
      </div>
      {items.map((item) => (
        <div
          className={
            item.index + 1 === activeNavIndex + 1 ? "activeNav" : "inactiveNav"
          }
          key={item.index}
          onClick={() => setActiveNavIndex(item.index)}
        >
          <div>
            <Link to="/">{item.index}</Link>
          </div>
        </div>
      ))}
      <div className="PageNav">
        <p>&gt;&gt;</p>
      </div>
    </div>
  );
};

export default PageNav;

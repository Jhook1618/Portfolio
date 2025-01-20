import "./Button.css";
import "../2.main/4.about/Skills.css";

import { FaDownload } from "react-icons/fa";

const Button = () => {
  return (
    <div className="button-container">
      <button className="btn">
        <span className="icon">
          <span className="item-icon">
            <FaDownload />
          </span>
        </span>
        Download Resume
      </button>
    </div>
  );
};

export default Button;

// import { useContext } from "react";
// import { ThemeContext } from "../../../context/ThemeContext";

// const Button = () => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div className="button-container">
//       <button className="btn" style={{ backgroundColor: theme.secondary }}>
//         Download CV
//       </button>
//     </div>
//   );
// };

// export default Button;

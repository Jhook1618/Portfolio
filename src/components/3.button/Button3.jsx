import "./Button3.css";

import { FaTelegramPlane } from "react-icons/fa";

const Button = () => {
  return (
    <div className="button-container">
      <button className="btn">
        <span className="item-icon">
          <FaTelegramPlane />
        </span>
        Submit
      </button>
    </div>
  );
};

export default Button;

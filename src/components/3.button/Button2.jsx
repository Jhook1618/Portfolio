import "./Button2.css";

import { BiSolidPurchaseTagAlt } from "react-icons/bi";

const Button = () => {
  return (
    <div className="button-container">
      <button className="btn">
        <span className="item-icon">
          <BiSolidPurchaseTagAlt />
        </span>
        Purchase Now
      </button>
    </div>
  );
};

export default Button;

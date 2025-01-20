import "./ChargeSheet.css";

import Button2 from "../../3.button/Button2";

const ChargeSheet = () => {
  return (
    <div className="chargeSheet-container">
      <h4>Charges</h4>

      {/* Basic */}
      <div className="chargeSheet-sub-container">
        <div className="chargeSheet">
          <div className="chargeSheet-header">
            <h5>Basic</h5>
          </div>
          <div className="chargeSheet-body">
            <p>Web Design</p>
            <p>Frontend Development</p>
            <p>Backend Development</p>
            <p>Data Management</p>
            <p>Database Management</p>
            <p>Testing</p>
            <p>Deployment</p>
            <p>Support</p>
            <p>Training</p>
          </div>
          <div className="chargeSheet-price">
            <h5>$25</h5>
            <p>Per Month</p>
          </div>

          {/* Button */}
          <div className="chargeSheet-button">
            <Button2 />
          </div>
        </div>

        {/* Pro */}
        <div className="chargeSheet">
          <div className="chargeSheet-header">
            <h5>Pro</h5>
          </div>
          <div className="chargeSheet-body">
            <p>Web Design</p>
            <p>Frontend Development</p>
            <p>Backend Development</p>
            <p>Data Management</p>
            <p>Database Management</p>
            <p>Testing</p>
            <p>Deployment</p>
            <p>Support</p>
            <p>Training</p>
          </div>
          <div className="chargeSheet-price">
            <h5>$45</h5>
            <p>Per Month</p>
          </div>

          {/* Button */}
          <div className="chargeSheet-button">
            <Button2 />
          </div>
        </div>

        {/* Premium */}
        <div className="chargeSheet">
          <div className="chargeSheet-header">
            <h5>Premium</h5>
          </div>
          <div className="chargeSheet-body">
            <p>Web Design</p>
            <p>Frontend Development</p>
            <p>Backend Development</p>
            <p>Data Management</p>
            <p>Database Management</p>
            <p>Testing</p>
            <p>Deployment</p>
            <p>Support</p>
            <p>Training</p>
          </div>
          <div className="chargeSheet-price">
            <h5>$100</h5>
            <p>Per Month</p>
          </div>

          {/* Button */}
          <div className="chargeSheet-button">
            <Button2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargeSheet;

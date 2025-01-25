import "./Contacts.css";
import "./Forms.css";

import Button3 from "../../3.button/Button3";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <h4>Contacts</h4>
      </div>

      {/* My Contacts Info */}
      <div className="contacts-info-container-main">
        <div className="contacts-info-container">
          <div className="contacts-info">
            <p>Email</p>
            <p>jhook1.618@gmail.com</p>
          </div>
          <div className="contacts-info">
            <p>Location</p>
            <p>Nairobi, Kenya</p>
          </div>
          <div className="contacts-info">
            <p>Phone Number</p>
            <p>+254 796 333 828</p>
          </div>
        </div>
      </div>

      {/* Forms */}
      <div className="contacts-form-container-main">
        <div className="contacts-form-container">
          {/* First Name */}
          <input
            type="text"
            placeholder="First Name: John"
            className="contacts-input"
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name: Doe"
            className="contacts-input"
          />

          {/* Email */}
          <input
            type="text"
            placeholder="Email: example@email.com"
            className="contacts-input"
          />

          {/* Phone Number */}
          <input
            type="text"
            placeholder="Phone Number: +123 456 789 012"
            className="contacts-input"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password: **********"
            className="contacts-input"
          />

          {/* Message */}
          <textarea
            type="text"
            placeholder="Message: Enter Your message here..."
            className="contacts-input"
          />
        </div>
      </div>
      <div className="contacts-button-container">
        <Button3 />
      </div>
    </div>
  );
};

export default Contacts;

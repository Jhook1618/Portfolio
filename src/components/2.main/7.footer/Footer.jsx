import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-content-container">
      <div className="footer-content">
        <div className="footer-content-text">
          <h4>FOOTER</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="footer-content-text">
          <h4>BLOG POSTS</h4>
          <p>PROJECTS</p>
          <p>CONTACTS</p>
          <p>TERMS</p>
          <p>PRIVACY POLICY</p>
        </div>
        <div className="footer-content-text">
          <h4>POPULAR TAGS</h4>
          <div className="footer-content-tags">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Git</p>
            <p>GitHub</p>
            <p>Node JS</p>
            <p>Express JS</p>
            <p>Mongo DB</p>
            <p>Python 3</p>
            <p>GIT</p>
          </div>
        </div>
      </div>
      <div className="footer-footnote">
        <p>© 2024 JHook. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

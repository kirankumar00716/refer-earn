import { useState } from "react";

const Hero = ({ onReferClick }) => {
  const [dark, setDark] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <main>
      <div
        className={`big-wrapper ${dark ? "dark" : "light"} ${
          menuActive ? "active" : ""
        }`}
      >
        <img src="./shape.png" alt="" className="shape" />

        <header>
          <div className="container">
            <div className="logo">
              <img src="./logo.png" alt="Logo" />
              <h3>Refer & Earn</h3>
            </div>

            <div className="links">
              <ul>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#" className="btn">
                    Sign up
                  </a>
                </li>
              </ul>
            </div>

            <div className="overlay"></div>

            <div className="hamburger-menu" onClick={toggleMenu}>
              <div className="bar"></div>
            </div>
          </div>
        </header>

        <div className="showcase-area">
          <div className="container">
            <div className="left">
              <div className="big-title">
                <h1>Refer & Earn:</h1>
                <h1>Your Gateway to Opportunities.</h1>
              </div>
              <p className="text">
                Share our courses with your network and help others embark on
                their learning journey. Earn more with every successful referral
                – start sharing today!
              </p>
              <div className="cta">
                <button className="btn" onClick={onReferClick}>
                  Refer Now
                </button>
              </div>
            </div>

            <div className="right">
              <img src="./person.png" alt="Person Image" className="person" />
            </div>
          </div>
        </div>

        <div className="bottom-area">
          <div className="container">
            <button className="toggle-btn" onClick={toggleTheme}>
              <i className="far fa-moon"></i>
              <i className="far fa-sun"></i>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

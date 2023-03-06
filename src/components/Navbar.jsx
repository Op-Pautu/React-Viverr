import React, { useEffect } from "react";
import "./Navbar.scss";
const Navbar = () => {
  const [active, setActive] = React.useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">viverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Viverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>

          <span>Become a seller</span>

          <button>Join</button>
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span></span>
            <span></span>
            <span></span>
            <span>Test2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;

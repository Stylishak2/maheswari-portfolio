import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li>
          <a href="#home" className="anchor-link">
            <p onClick={() => setMenu("home")}>Home</p>
          </a>
        </li>
        <li>
          <a href="#about" className="anchor-link">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="anchor-link">
            Services
          </a>
        </li>
        <li>
          <a href="#portfolio" className="anchor-link">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="anchor-link">
            Contact Me
          </a>
        </li>
      </ul>
      <div
        className="hero-connect"
        onClick={() =>
          document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Contact Me
      </div>{" "}
    </div>
  );
};

export default Navbar;

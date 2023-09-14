import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  const navbarStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "end",
    marginRight: "10px",
    position: "sticky",
    top: "100", 
    backgroundColor: "#fff", 
    zIndex: "1000", 
    
  };

  return (
    <div style={navbarStyle}>
      <Link to="/about" className="navbar-link">About</Link>
      <Link to="/contact" className="navbar-link">Contact</Link>
      <Link to="/blog" className="navbar-link">Projects</Link>
      <Link to="/signup" className="navbar-link">Experience</Link>
    </div>
  );
}

export { Navbar };

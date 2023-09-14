import React, { useEffect, useState } from "react";
import './Welcome.css'

export const Welcome = () => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const text = "Thank You For Visiting My PORTFOLIO.Feel free to explore and learn more about my work and projects.Please Go through About and Projects.";
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="welcome" style={{ backgroundImage: 'url(/assets/background.jpeg)', backgroundSize: "cover", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div>
        <h1>{typedText}</h1>
      </div>
    </div>
  );
}

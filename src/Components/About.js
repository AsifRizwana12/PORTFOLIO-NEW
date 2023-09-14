import React, { useEffect, useState } from "react";
import './About.css'

function About() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const text = "Hello My Name is Asif Rizwana. Basically I'm from Zaheerbad but currently living in Hyderabad.I recently(2023) graduated from Computer Science at JNTUH College of Engineering Sultanpur. While there, I learned  theory subjects like Data Structures ,Information Theory, Artificial Intelligence, Database Systems, Operating Systems , Machine Learning, Web Technologies and programming languages like C , Cpp , Python , JavaScript. I have practical Knowledge in HTML , CSS , JavaScript ,React js and python. I have done Internship from ZigyPrints as Web Developer, there I have learnt Typescript and worked on canverro web app. Currently, I'm working in Zaps Marketing as Python Developer. While I have nearly 8 months real-life work experience, I have a lot of exposure to the techical skills . A lot of my courses involved working with real companies to solve real problems.  Now, I'm looking to leverage everything I have learned  and get some hands-on work experience.";
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
    <div>
      <div className="box">
     <img src='/assets/Image.jpeg' alt=""  />
    
        <div className="text">
          <div> <h1>ASIF RIZWANA</h1></div>
       
        <p style={{fontsize:"30px"}}>{typedText}</p>
        </div></div>
       
       
       
      </div>
      
      
   
  );
}

export { About };

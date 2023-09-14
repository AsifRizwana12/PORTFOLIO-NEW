import React, { useEffect, useState } from "react";
import "./Contacts.css";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

function Contact() {

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const text="Hey Hi ,here I'm providing my contact details You can Contact me from here.You can also check my projects in Github."
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
      <div className="boxes">
        <h1>Contact Me!</h1>
        <div className="content">
         
        <div className="border">
   <div className="items">
        <a href="https://www.linkedin.com/in/asif-rizwana-1a7569227">
          <LinkedInIcon />
        </a>
        <a href="mailto:asifrizwana128@gmail.com">
          <EmailIcon />
        </a>
        <a href="tel:+919398259541">
          <PhoneIcon />
        </a>
        <a href="https://github.com/AsifRizwana12">
          <GithubIcon />
        </a>
      </div></div>
      <h4>
            {typedText}
          </h4>
        </div>
     
     
      </div>
  
    </div>
  );
}

export { Contact };

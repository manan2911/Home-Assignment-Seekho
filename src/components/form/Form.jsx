import React from "react";
import "../form/From.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Form = () => {
  return (
    <div>
      <div className="main-title-form">
        <h2>ASK US ANYTHING</h2>
      </div>

      <div className="input-text-area">
        <textarea placeholder="Ask us anything" />
      </div>

      <button className="whatsapp-button">
        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
        WhatsApp
      </button>
      <div className="contact-us">
        <p>
          Or just email us at{" "}
          <a href="mailto:info@seekhoapp.com">info@seekhoapp.com</a>
        </p>
      </div>
    </div>
  );
};

export default Form;

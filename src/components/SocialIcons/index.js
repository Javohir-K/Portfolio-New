import React from "react";
import "./Social.css";

function index() {
  return (
    <div className="social">
      <div className="social-inner">
        <p>Follow Me</p>
        <span></span>
        <a href="https://www.facebook.com/javohir.komiljonov.77/" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com/in/javohir-komiljonov-03090621b" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/javohir0105/" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.t.me/notsoaveragee" target="_blank" rel="noreferrer">
          <i className="fab fa-telegram-plane"></i>
        </a>
      </div>
    </div>
  );
}

export default index;

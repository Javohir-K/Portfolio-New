import React from "react";
import "./Contact.css";

function index() {
  return (
    <div className="contactpage container">
      <h2 className="title">Get In Touch</h2>
      <div className="contactpage-inner">
        <div className="cpage-left">
          <div className="cpage-info">
            <div className="c-info">
              <i className="fa fa-phone-alt">
                <span>Phone</span>
              </i>
              <p>+99893-740-70-44</p>
            </div>
            <div className="c-info">
              <i className="fa fa-envelope">
                <span>Email</span>
              </i>
              <p>javoxir2000k@.gmail.com</p>
            </div>
            <div className="c-info">
              <i className="fa fa-map-marker-alt">
                <span>Address</span>
              </i>
              <p>Tashkent, Uzbekistan</p>
            </div>
            <div className="c-info">
              <i className="fab fa-telegram-plane">
                <span>Telegram</span>
              </i>
              <p>@notsoavaragee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;

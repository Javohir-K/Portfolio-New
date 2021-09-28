import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import DevImg from "../../images/developer.png"
import Logo from "../../images/logo.png";

function Header() {
  window.onscroll = function () {
    myFunction();
  };

  // var height = navbar.style.height;
  function myFunction() {
    var navbar = document.getElementById("navbar");
    var sticky = 1;
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("header-bg");
    } else {
      navbar.classList.remove("header-bg");
    }
  }

  function ButtonHandler() {
    var navbar = document.getElementById("navbar");

    var btn = document.getElementById("navButton");
    var x = document.getElementById("item1");
    var y = document.getElementById("item2");
    var z = document.getElementById("item3");
    var w = document.getElementById("navAnimDark");
    var q = document.getElementById("navAnimRed");

    var e = document.getElementById("navBig");
    if (!btn.classList.contains("clicked")) {
      x.classList.add("item1t");
      y.classList.add("item2t");
      z.classList.add("item3t");
      btn.classList.add("clicked");
      btn.classList.add("nav-rotate");
      w.classList.add("nav-main-show");
      q.classList.remove("nav-main-show");

      navbar.classList.add("header-b");
      e.classList.add("nav-Big-show");
    } else if (btn.classList.contains("clicked")) {
      x.classList.remove("item1t");
      y.classList.remove("item2t");
      z.classList.remove("item3t");
      btn.classList.remove("clicked");
      btn.classList.remove("nav-rotate");
      w.classList.remove("nav-main-show");
      navbar.classList.remove("header-b");
      e.classList.remove("nav-Big-show");
      q.classList.add("nav-main-show");
    
    }
  }
  return (
    <div className="header">
      <div className="header-inner" id="navbar">
        <Link to="/">
          <img src={Logo} alt="" className="header-logo" />
        </Link>
        <div className="nav-button" id="navButton" onClick={ButtonHandler}>
          <span id="item1" className="item1"></span>
          <span id="item2" className="item2"></span>
          <span id="item3" className="item3"></span>
        </div>
      </div>
      <div className="nav-main-dark" id="navAnimDark"></div>
      <div className="nav-main-red" id="navAnimRed"></div>

      <div className="nav-Big" id="navBig">
        <div className="nav-big-wrap">

        <div className="nav-big-inner">
          <a href="#topsec" onClick={ButtonHandler}><span>01</span> Home</a>
          <a onClick={ButtonHandler} href="#aboutme"><span>02</span> About me</a>
          <a href="#projects" onClick={ButtonHandler} ><span>03</span> Projects</a>
          <a href="#services" onClick={ButtonHandler}><span>04</span> Services</a>
          <a href="#resume"  onClick={ButtonHandler}><span>05</span> Resume</a>
          <img src={DevImg} alt=""  className="dev-img"/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

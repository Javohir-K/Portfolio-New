import "./App.css";
import React from "react";
//Components
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="welcome-page" id="welcomePage">
        <p>javokhir</p>
        <div className="bg-line1"></div>
      <div className="bg-line2"></div>
      <div className="bg-line3"></div>
      <div className="bg-line4"></div>
      <div className="bg-line5"></div>

        <button className="intro-btn" onClick={WelcomeBtn}>
          javokhir
        </button>
      </div>
      <div className="overlay" id="overlay"></div>
      <div className="app-inner" id="appMain">
        <Header />
        <HomePage />
        <Footer />
        <div className="cursor-p" id="MyCursor">
          <div className="cursor-inner"></div>
        </div>
      </div>
    </div>
  );
}


document.addEventListener("mousemove", (e) => {
  var cursor = document.getElementById("MyCursor");
  var x = e.pageX;
  var y = e.pageY;
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
});
export default App;

function WelcomeBtn() {
  const main = document.getElementById("appMain");
  const wpage = document.getElementById("welcomePage");
  const overlay = document.getElementById("overlay");
  // main.style.display = "block";
  // main.style.opacity = 1;
  main.classList.add("app-inner-show");
  overlay.style.top = "-110vh";
  wpage.classList.add("welcome-page-hide");
}

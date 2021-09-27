import "./App.css";
import React from "react";
//Components
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";


document.addEventListener("mousemove", (e) => {
  var cursor = document.getElementById("MyCursor");
  var x = e.pageX;
  var y = e.pageY;
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  // console.log(x, y);
});
function App() {
  return (
    <div className="app">
      <Header />
      <HomePage />
      <Footer />
      <ScrollTop />
      <div className="cursor-p" id="MyCursor">
        <div className="cursor-inner"></div>
      </div>
    </div>
  );
}

const ScrollTop = () => {
  function ScrollToTop() {
    window.scrollTo(0, 0);
  }
  window.addEventListener("scroll", function () {
    const x = document.getElementById("BtnScroll");
    let val = window.scrollY;

    if (val > 400) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  });
  return (
    <button id="BtnScroll" className="btn-scroll" onClick={ScrollToTop}>
      <i className="fa fa-angle-up"></i>
    </button>
  );
};

export default App;

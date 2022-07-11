//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import SimpleCounter from "./component/simplecounter";

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import Home from "./component/home.jsx";



let counter = 0;
setInterval(function () {
  const cuatro = Math.floor(counter / 1000);
  const tres = Math.floor(counter / 100);
  const dos = Math.floor(counter / 10);
  const uno = Math.floor(counter / 1);
  console.log(uno, dos, tres, cuatro);
  counter++;
  ReactDOM.render(
    <SimpleCounter digFour={cuatro} digThree={tres} digTwo={dos} digOne={uno} />,
    document.querySelector("#app")
  );
}, 1000);
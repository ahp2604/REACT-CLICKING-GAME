import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (

  <div className="jumbotron jumbotron-fluid text-center">

      <h2><span className="span">Don't Click the Same Friend Twice. Do it and you are DONE!</span></h2>

      <h3><span className="span">Score: {props.score} | Top Score: {props.highestScore}</span></h3>
    </div>

  
);



  export default Jumbotron;
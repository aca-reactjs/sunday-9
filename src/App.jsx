import { useState, useRef, useEffect } from "react";
import "./App.css";

const array = ["one", "two", "three"];

const buttonType = {
  next: "next",
  prev: "prev",
};

function App() {
  const handleButtonClick = (type) => () => {};

  return (
    <div>
      <div className="screen">
        <div className="slider-wrapper">
          {array.map((el) => (
            <div className="slider-item" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>

      <div className="button-wrapper" style={{}}>
        <button
          onClick={handleButtonClick(buttonType.next)}
          className="slider-control"
        >
          prev
        </button>
        <button
          onClick={handleButtonClick(buttonType.next)}
          className="slider-control"
        >
          next
        </button>
      </div>
    </div>
  );
}

export default App;

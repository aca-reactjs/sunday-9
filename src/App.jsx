import { useState, useRef, useEffect } from "react";
import "./App.css";

const buttonType = {
  plus: "plus",
  minus: "minus",
  show: "show",
};

function App() {
  const [result, setResult] = useState();

  const ref = useRef({
    plusClicked: 0,
    minusClicked: 0,
  });

  const handleButtonClick = (type) => () => {
    if (type === buttonType.plus) {
      ref.current.plusClicked += 1;

      return;
    }

    if (type === buttonType.minus) {
      ref.current.minusClicked += 1;

      return;
    }

    setResult(JSON.stringify(ref.current));
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick(buttonType.plus)}>Plus</button>
      <button onClick={handleButtonClick(buttonType.minus)}>Minus</button>
      <button onClick={handleButtonClick(buttonType.show)}>showResult</button>
      <div>{result}</div>
    </div>
  );
}

export default App;

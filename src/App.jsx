import { useState, useRef, useEffect } from "react";
import "./App.css";

const array = ["one", "two", "three"];

const buttonType = {
  next: "next",
  prev: "prev",
};

function App() {
  const [activeElementPosition, setActiveElementPosition] = useState(0);
  const nextButtonRef = useRef();
  const prevButtonRef = useRef();

  // const [disabledButton, setDisabledButton] = useState(buttonType.prev);

  const handleButtonClick = (type) => () => {
    if (type === buttonType.next) {
      if (activeElementPosition <= 1) {
        setActiveElementPosition((prev) => prev + 1);
        // setDisabledButton(false);
        prevButtonRef.current.disabled = false;
      } else {
        // setDisabledButton(buttonType.next);
        nextButtonRef.current.disabled = true;
      }

      return;
    }

    if (activeElementPosition >= 1) {
      setActiveElementPosition((prev) => prev - 1);
      nextButtonRef.current.disabled = false;
      // setDisabledButton(false);
    } else {
      prevButtonRef.current.disabled = true;
      // setDisabledButton(buttonType.prev);
    }
  };

  useEffect(() => {
    prevButtonRef.current.disabled = true;
  }, []);

  return (
    <div>
      <div className="screen">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(-${activeElementPosition * 200}px)`,
            transition: "transform 200ms linear",
          }}
        >
          {array.map((el) => (
            <div className="slider-item" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>

      <div className="button-wrapper">
        <button
          ref={prevButtonRef}
          // disabled={disabledButton === buttonType.prev}
          onClick={handleButtonClick(buttonType.prev)}
          className="slider-control"
        >
          prev
        </button>
        <button
          ref={nextButtonRef}
          // disabled={disabledButton === buttonType.next}
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

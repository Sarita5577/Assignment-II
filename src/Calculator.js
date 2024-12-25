import React, { useState } from "react";
import Button from "./Button";
import "./Calculator.css";
import MyImage from "./img.jpg"
function KeyPadComponent() {
  const [text1, setText] = useState("");
  const [showImage, setShowImage] = useState(false); // State for "Show Me"
  const handleSquare = () => {
    const number = parseFloat(text1);
    if (!isNaN(number)) {
      setText(number * number); // Calculate square
      } 
      else {
      setText("Invalid Input");
    }
  };
  const ClickHandle = (e) => {
    if (e.target.value === "C") {
      setText("");
    } else if (e.target.value === "=") {
      try {
        setText(eval(text1)); // Evaluate the expression
        alert(eval(text1));
      } catch {
        setText("Error");
      }
    } else {
      setText(text1 + e.target.value);
    }
  };

  const handleShowMe = () => {
    setShowImage(!showImage); // Toggle image visibility
  };

  return (
    <div className="Calculator">
      <div className="screen-row">
        <input type="text" readOnly value={text1} />
      </div>

      <div>
        <Button label="(" ClickHandle={ClickHandle} />
        <Button label="CE" ClickHandle={ClickHandle} />
        <Button label=")" ClickHandle={ClickHandle} />
        <Button label="C" ClickHandle={ClickHandle} />
      </div>

      <div>
        <Button label="1" ClickHandle={ClickHandle} />
        <Button label="2" ClickHandle={ClickHandle} />
        <Button label="3" ClickHandle={ClickHandle} />
        <Button label="+" ClickHandle={ClickHandle} />
      </div>
      <div>
        <Button label="4" ClickHandle={ClickHandle} />
        <Button label="5" ClickHandle={ClickHandle} />
        <Button label="6" ClickHandle={ClickHandle} />
        <Button label="-" ClickHandle={ClickHandle} />
      </div>
      <div>
        <Button label="7" ClickHandle={ClickHandle} />
        <Button label="8" ClickHandle={ClickHandle} />
        <Button label="9" ClickHandle={ClickHandle} />
        <Button label="*" ClickHandle={ClickHandle} />
      </div>
      <div>
        <Button label="." ClickHandle={ClickHandle} />
        <Button label="0" ClickHandle={ClickHandle} />
        <Button label="=" ClickHandle={ClickHandle} />
        <Button label="/" ClickHandle={ClickHandle} />
      </div>
      {/* Add Show Me Button */}
      <div className="show-me">
        <Button label="Show Me" ClickHandle={handleShowMe} />
        <Button label="Square" ClickHandle={handleSquare} />
      </div>
      {/* Conditional Rendering of Image */}
      {showImage && (
        <div className="ImageContainer">
          <img src={MyImage}  className="ImageStyle"/>
        </div>
      )}
    </div>
  );
}
export default KeyPadComponent;

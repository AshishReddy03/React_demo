import React, { useState } from "react";

function Formbox(props) {
  const [text, setText] = useState("");
  const handleClick = () => {
    console.log("BUTTON CLICKED" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("CONVERTED TO UPPERCASE");
  };
  const onChanged = (event) => {
    console.log("BUTTON CLICKED");
    setText(event.target.value);
  };
  const handleClear = () => {
    let newtext = " ";
    setText(newtext);
    props.showalert("TEXT CLEARED!!");
  };

  const handleFind = () => {
    let find = prompt("enter the value to find");
    let replace = prompt("enter the value to replace");
    if (find && replace) {
      let newtext = text.replaceAll(find, replace);
      setText(newtext);
    }
  };
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            rows="8"
            onChange={onChanged}
            style={{
              backgroundColor: props.mode === "light" ? "grey" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleFind}>
          Find & Replace
        </button>
      </div>

      <div className="container my-3">
        <h3 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          YOUR TEXT SUMMARY
        </h3>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
      <div className="container">
        <h3 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          PREVIEW
        </h3>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {text.length > 0 ? text : "ENTER SOMETHING TO PREVIEW"}
        </p>
      </div>
    </>
  );
}

export default Formbox;

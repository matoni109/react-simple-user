import React from "react";
import "./Button.css";

function App(props) {
  return (
    <div>
      <button className="button" onClick={props.onClick} type={props.type}>
        {props.children}
      </button>
    </div>
  );
}

export default App;

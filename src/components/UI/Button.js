import React from "react";

function App(props) {
  return (
    <div>
      <button className="button" onClick={props.onclick} type={props.type}>
        {props.children}
      </button>
    </div>
  );
}

export default App;

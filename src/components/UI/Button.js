import React from "react";

function App(props) {
  const onClickHandler = (event) => {};
  return (
    <div>
      <button className="button" onClick={props.onclick} type={props.type}>
        {props.children}
      </button>
    </div>
  );
}

export default App;

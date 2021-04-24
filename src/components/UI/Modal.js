import React, { useState } from "react";
import "./Modal.css";

const Modal = (props) => {
  // set the state
  const [showForm, setFormState] = useState(false);

  // set state handler
  const changeStateHandler = () => {
    setFormState((showForm) => !showForm);
  };

  return (
    <div>
      {/* {passes saveExpenseDateHandler to the child element } */}
      {showForm && null}

      {!showForm && (
        <div class="modal" id="modal">
          <h2>Modal Window</h2>
          <div class="content">{props.children}</div>
          <div class="actions">
            <button class="toggle-button" onClick={changeStateHandler}>
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Modal;

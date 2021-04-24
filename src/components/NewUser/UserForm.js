import React, { useState } from "react";
import Button from "../UI/Button";
import "./UserForm.css";
import Modal from "../UI/Modal";
//
const UserForm = (props) => {
  const [enteredName, setEnteredTitle] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  const titleChangedHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const ageChangedHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // userData object gets passed as an args to props going UP to parent
    const userData = {
      title: enteredName,
      age: +enteredAge,
    };

    // if (userData.age > 0 && userData.title !== "") {
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "please enter a valid name and age ( non-emply values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid age",
        message: "please enter a valid  age ( > 0 ).",
      });
      return;
    }

    // user is NOT empty
    props.onSaveUserData(userData);
    setEnteredTitle("");
    setAge("");
  };

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className="new-user__controls">
          <div className="new-user__control">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={enteredName}
              onChange={titleChangedHandler}
            />
          </div>
          <div className="new-user__control">
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              min="0"
              step="1"
              onChange={ageChangedHandler}
            />
          </div>
        </div>
        <div className="new-user__actions">
          {/* <button type="submit">Add user</button> */}

          <Button onClick={submitHandler}>Add User</Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;

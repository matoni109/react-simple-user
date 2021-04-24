import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
import "./UserForm.css";
import Modal from "../UI/Modal";
//
const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredName, setEnteredTitle] = useState("");
  // const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  // const titleChangedHandler = (event) => {
  //   setEnteredTitle(event.target.value);
  // };
  // const ageChangedHandler = (event) => {
  //   setAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    // userData object gets passed as an args to props going UP to parent
    const userData = {
      title: enteredUserName,
      age: +enteredUserAge,
    };

    // if (userData.age > 0 && userData.title !== "") {
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "invalid input",
        message: "please enter a valid name and age ( non-emply values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "invalid age",
        message: "please enter a valid  age ( > 0 ).",
      });
      return;
    }

    // user is NOT empty
    props.onSaveUserData(userData);
    // setEnteredTitle("");
    // setAge("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <Wrapper>
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
              // value={enteredName}
              // onChange={titleChangedHandler}
              ref={nameInputRef}
            />
          </div>
          <div className="new-user__control">
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              // value={enteredAge}
              min="0"
              step="1"
              // onChange={ageChangedHandler}
              ref={ageInputRef}
            />
          </div>
        </div>
        <div className="new-user__actions">
          {/* <button type="submit">Add user</button> */}

          <Button onClick={submitHandler}>Add User</Button>
        </div>
      </form>
    </Wrapper>
  );
};

export default UserForm;

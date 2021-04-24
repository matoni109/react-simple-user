import React, { useState } from "react";
import Button from "../UI/Button";
import "./UserForm.css";
//
const UserForm = (props) => {
  const [enteredName, setEnteredTitle] = useState("");
  const [enteredAge, setAge] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const titleChangedHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const ageChangedHandler = (event) => {
    setAge(event.target.value);
  };

  // const dateChangedHandler = (event) => {
  //   setEnteredDate(event.target.value);
  // };
  // state end //

  const submitHandler = (event) => {
    event.preventDefault();
    // userData object gets passed as an args to props going UP to parent
    const userData = {
      title: enteredName,
      age: +enteredAge,
    };

    // alert("yay");
    if (userData.age >= 0 && userData.title != "") {
      // user is NOT empty
      props.onSaveUserData(userData);
      setEnteredTitle("");
      setAge("");
    } else {
      alert("Pleaes Fill out the Values !!");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-user__controls">
        <div className="new-user__control">
          <label>Username</label>
          <input
            type="text"
            value={enteredName}
            onChange={titleChangedHandler}
          />
        </div>
        <div className="new-user__control">
          <label>Age (Years)</label>
          <input
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
        <Button onClick={submitHandler} />
      </div>
    </form>
  );
};

export default UserForm;

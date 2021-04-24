import React from "react";
import Card from "../UI/Card";
import UserForm from "./UserForm";
import "./NewUser.css";

const NewUser = (props) => {
  // save expense object
  const saveUserHandler = (enteredUserData) => {
    // expenseData object gets passed as an args to props going UP to parent
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    // console.log(userData);
    // execute the fuction from the props up to theparent !!
    // onAddExpese from App.JS
    props.onAddUser(userData);
  };
  return (
    <div>
      <Card className="new-user">
        {/* {passes saveExpenseDateHandler to the child element } */}
        <UserForm onSaveUserData={saveUserHandler} />
      </Card>
    </div>
  );
};

export default NewUser;

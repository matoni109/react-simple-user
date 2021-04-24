import React, { useState } from "react";
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/UserList/UserList";
// import Modal from "./components/UI/Modal";

function App() {
  const [enteredUsers, setNewUser] = useState([]);

  const addUserHandler = (expense) => {
    console.log("In App.JS");
    // console.log(expense);
    // saveExpenseDateHandler(enteredUser, expense);
    // console.log(enteredUser);
    setNewUser((prevUser) => {
      // add expense to existing arr
      return [expense, ...prevUser];
    });
  };

  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <UserList users={enteredUsers} />
      {/* <Modal /> */}
    </div>
  );
}

export default App;

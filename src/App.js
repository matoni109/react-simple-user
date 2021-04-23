import React, { useState } from "react";
import NewUser from "./components/NewUser/NewUser";

function App() {
  const [enteredUser, setNewExpense] = useState([]);

  const addUserHandler = (expense) => {
    console.log("In App.JS");
    // console.log(expense);
    // saveExpenseDateHandler(enteredUser, expense);
    // console.log(enteredUser);
    setNewExpense((prevUser) => {
      // add expense to existing arr
      return [expense, ...prevUser];
    });
  };
  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
    </div>
  );
}

export default App;

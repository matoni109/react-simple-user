import React from "react";

function App(props) {
  const onClickHandler = (event) => {
    console.log(props);
    // props.submitHandler();
    // console.log(expense);
    // saveExpenseDateHandler(enteredUser, expense);
    // console.log(enteredUser);
    // setNewExpense((prevUser) => {
    //   // add expense to existing arr
    //   return [expense, ...prevUser];
    // });
  };
  return (
    <div>
      <button onClick={onClickHandler}>Add user</button>
    </div>
  );
}

export default App;

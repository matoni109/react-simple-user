import React from "react";
import UserItem from "./UserItem";
import Card from "../UI/Card";
import "./UserList.css";
const ExpensesList = (props) => {
  if (props.users.length === 0) {
    return <h2 className="user-list__fallback">Found no users.</h2>;
  }

  return (
    <Card className="user-list">
      <ul>
        {props.users.map((expense) => (
          <UserItem title={expense.title} age={expense.age} key={expense.id} />
        ))}
      </ul>
    </Card>
  );
};

export default ExpensesList;

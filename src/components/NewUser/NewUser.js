import React from "react";
import Card from "../UI/Card";
import UserForm from "./UserForm";
import "./NewUser.css";

const NewUser = (props) => {
  return (
    <div>
      <Card className="new-user">
        {/* {passes saveExpenseDateHandler to the child element } */}
        <UserForm />
      </Card>
    </div>
  );
};

export default NewUser;

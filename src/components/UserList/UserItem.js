import React from "react";
import "./UserItem.css";

function UserItem(props) {
  return (
    <div className="new-item">
      <p>
        {props.title} ({props.age} years old)
      </p>
    </div>
  );
}
export default UserItem;

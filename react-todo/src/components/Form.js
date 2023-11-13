import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";

// -------------Form Component , here user has to add Task Name and Deadline for that Task and
// click on Add Task to List button, Now the list gets updated, To view updated list user has to
//  click on View List button--------------

// props->handleAddItem

export default function Form(props) {
  return (
    <div className="Form">
      <h1>To-Do-App</h1>
      <form action="">
        <label htmlFor={"taskname"}>Task:</label>
        <input type="text" name={"taskname"} id={"taskname"} />
        <p
          style={{ color: "red" }}
          className="visibility-hidden"
          id="name-error"
        >
          Enter Valid Task Name! <i className="fa-regular fa-face-frown"></i>
        </p>
        <br />
        <label htmlFor={"taskdate"}>Deadline:</label>
        <input type="date" name={"taskdate"} id={"taskdate"} />
        <p
          style={{ color: "red" }}
          className="visibility-hidden"
          id="date-error"
        >
          Enter Valid Date! <i className="fa-regular fa-face-frown"></i>
        </p>

        <br />
      </form>
      <div className="buttons">
        <button className="btn-hover color-11" onClick={props.handleAddItem}>
          Add Task to List
        </button>
        <Link to="/list" className="navigate">
          View List
        </Link>
      </div>
    </div>
  );
}

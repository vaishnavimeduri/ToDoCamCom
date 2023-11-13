import React from "react";
import "./List.css";
import { Link } from "react-router-dom";

// ---------------List Component is responsible to display list of tasks, edit tasks, delete tasks,
// user can mark a task as completed by clicking on Mark as Completed button------------

//props->arr,handleStatus,handleDeleteItem,handleEditItem,handleAddEditTask

export default function List(props) {
  return (
    <div className="List">
      <Link to="/" className="navigate">
        Add To Do Item
      </Link>
      <h1>To Do List</h1>
      {props.arr.map((element, index) => {
        return (
          <div className="list-element" key={index}>
            <h2>
              {`${index + 1}. ${element.name} ${element.date} `}
              <small>
                {element.status === "pending" ? `(${element.status})` : ""}
              </small>
            </h2>
            <div className="buttons">
              <button
                className="btn-hover color-11"
                onClick={() => props.handleStatus(index)}
              >
                {element.status === "pending"
                  ? "Mark As Completed"
                  : "Completed "}
                {element.status === "pending" ? (
                  ""
                ) : (
                  <i className="fa-solid fa-check"></i>
                )}
              </button>
              <button
                className="btn-hover color-11"
                onClick={() => props.handleDeleteItem(index)}
              >
                Delete <i className="fa-solid fa-trash"></i>
              </button>
              <button
                className="btn-hover color-11"
                onClick={() => props.handleEditItem(index)}
              >
                Edit
              </button>
            </div>
            <form
              action=""
              className={`visibility-hidden`}
              id={`edit-form-${index}`}
            >
              <label
                htmlFor={`edit-taskname-${index}`}
                style={{ color: "white", fontWeight: "bolder" }}
              >
                Task:
              </label>
              <input
                type="text"
                name={`edit-taskname-${index}`}
                id={`edit-taskname-${index}`}
                defaultValue={element.name}
              />
              <p
                style={{ color: "red" }}
                className="visibility-hidden"
                id={`name-error-${index}`}
              >
                Enter Valid Task Name!{" "}
                <i className="fa-regular fa-face-frown"></i>
              </p>
              <br />
              <label
                htmlFor={`edit-taskdate-${index}`}
                style={{ color: "white", fontWeight: "bolder" }}
              >
                Deadline:
              </label>
              <input
                type="date"
                name={`edit-taskdate-${index}`}
                id={`edit-taskdate-${index}`}
                defaultValue={element.date}
              />
              <p
                style={{ color: "red" }}
                className="visibility-hidden"
                id={`date-error-${index}`}
              >
                Enter Valid Date! <i className="fa-regular fa-face-frown"></i>
              </p>
              <br />
            </form>
            <button
              className="btn-hover color-11 visibility-hidden"
              id={`add-edited-item-${index}`}
              onClick={() => props.handleAddEditTask(index)}
            >
              Add +
            </button>
          </div>
        );
      })}
    </div>
  );
}

// App.js
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";
import "./App.css";

const App = () => {
  // To do list items
  const [list, setList] = useState([
    { name: "project1", date: "2024-05-23", status: "completed" },
    { name: "project2", date: "2024-06-23", status: "completed" },
    { name: "project3", date: "2024-07-24", status: "pending" },
    { name: "project4", date: "2024-08-24", status: "pending" },
    { name: "project5", date: "2024-09-24", status: "pending" },
  ]);
  // This function is responsible to create a new task and deadline for that task and add it list of task items
  const handleAddItem = () => {
    let ele = ["name-error", "date-error"];
    addVisibilityHidden([...ele]);
    let name = document.getElementById("taskname").value;
    let date = document.getElementById("taskdate").value;
    let status = "pending";
    if (Validate(name, date, "name-error", "date-error")) {
      addVisibilityHidden([...ele]);
    } else {
      return;
    }
    let obj = {};
    obj.name = name;
    obj.date = date;
    obj.status = status;
    let arr = [...list];
    arr.push(obj);
    setList(arr);
    alert("List updated");
    document.getElementById("taskname").value = "";
    document.getElementById("taskdate").value = "";
    for (let i = 0; i < arr.length; i++) {
      let ele = [
        `edit-form-${i}`,
        `add-edited-item-${i}`,
        `name-error-${i}`,
        `date-error-${i}`,
      ];
      addVisibilityHidden([...ele]);
    }
  };
  // This function is responsible to add visibility-hidden class to all id names provide in the form of array
  const addVisibilityHidden = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      document.getElementById(arr[i]).classList.add("visibility-hidden");
    }
  };
  // This function is responsible to provide validations for the form where we create new task
  const Validate = (name, date, x, y) => {
    let a = false;
    if (name === "") {
      a = true;
      document.getElementById(x).classList.remove("visibility-hidden");
    }
    if (date === "") {
      a = true;
      document.getElementById(y).classList.remove("visibility-hidden");
    }
    if (a === false) {
      return true;
    }
    return false;
  };
  //This function is responsible to delete corresponding task
  const handleDeleteItem = (index) => {
    let arr = [...list];
    let arr1 = arr.filter((element, ind) => {
      return ind !== index;
    });
    setList(arr1);
    for (let i = 0; i < arr1.length; i++) {
      let ele = [
        `edit-form-${i}`,
        `add-edited-item-${i}`,
        `name-error-${i}`,
        `date-error-${i}`,
      ];
      addVisibilityHidden([...ele]);
    }
  };
  //This function is responsible to handle status change after clicking on Mark as Completed button.
  const handleStatus = (index) => {
    let arr = [...list];
    let arr1 = arr.map((element, ind) => {
      if (ind === index && element.status === "pending") {
        element.status = "completed";
      }
      return element;
    });
    setList(arr1);
    for (let i = 0; i < arr1.length; i++) {
      let ele = [
        `edit-form-${i}`,
        `add-edited-item-${i}`,
        `name-error-${i}`,
        `date-error-${i}`,
      ];
      addVisibilityHidden([...ele]);
    }
  };
  // This function is responsible to open a form for editing the current task
  const handleEditItem = (index) => {
    let len = list.length;
    for (let i = 0; i < len; i++) {
      if (i === index) {
        document
          .getElementById(`edit-form-${i}`)
          .classList.remove("visibility-hidden");
        document
          .getElementById(`add-edited-item-${i}`)
          .classList.remove("visibility-hidden");
      } else {
        let ele = [`edit-form-${i}`, `add-edited-item-${i}`];
        addVisibilityHidden([...ele]);
      }
    }
  };
  // This function is responsible to update list according to the edited form
  const handleAddEditTask = (index) => {
    let ele1 = [`name-error-${index}`, `date-error-${index}`];
    addVisibilityHidden([...ele1]);
    let name = document.getElementById(`edit-taskname-${index}`).value;
    let date = document.getElementById(`edit-taskdate-${index}`).value;
    if (Validate(name, date, `name-error-${index}`, `date-error-${index}`)) {
      addVisibilityHidden([...ele1]);
    } else {
      return;
    }
    let arr = [...list];
    let arr1 = arr.map((element, ind) => {
      if (ind === index) {
        element.name = name;
        element.date = date;
      }
      return element;
    });
    let ele = [`edit-form-${index}`, `add-edited-item-${index}`];
    addVisibilityHidden([...ele]);
    alert("List updated");
    setList(arr1);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Form handleAddItem={handleAddItem} />} />
        <Route
          path="/list"
          element={
            <List
              arr={list}
              handleDeleteItem={handleDeleteItem}
              handleStatus={handleStatus}
              handleEditItem={handleEditItem}
              handleAddEditTask={handleAddEditTask}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;

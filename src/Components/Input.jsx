
import { useState } from "react";
import Buttons from "./Buttons";

const Input = ({ allTaskRecieved, taskListSetter }) => {
  const [taskValue, setValue] = useState("");

  const handleTaskValueChange = (e) => {
    setValue(e.target.value);
  };

  //function that add new task, pass as prop to the button
  const handleAddNewTask = () => {
    let newTask = { id: Date.now(), task: taskValue, isCompleted: false };
    taskListSetter([...allTaskRecieved, newTask]); //
    let url = "https://emis-server.onrender.com/todos"; //url

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      credentials: "include",
      body: JSON.stringify({ task: taskValue, isCompleted: false }),
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="relative input-button-container">
        <input
          className="input-tag"
          type="text"
          placeholder="Enter your task"
          value={taskValue}
          onChange={handleTaskValueChange}
        />
        <Buttons textValue={"Add task"} callback={handleAddNewTask} />
      </div>
    </>
  );
};

export default Input;

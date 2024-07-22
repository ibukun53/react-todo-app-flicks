import { useState } from "react";
import Buttons from "./Buttons";

const Input = ({ allTaskRecieved, taskListSetter }) => {
  const [taskValue, setValue] = useState("");

  const handleTaskValueChange = (e) => {
    setValue(e.target.value);
  };

  //function that add new task, pass as prop to the button
  const handleAddNewTask = () => {
    let newTask = { id: Date.now(), taskName: taskValue, isCompleted: false };
    taskListSetter([...allTaskRecieved, newTask]); //
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

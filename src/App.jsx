import { useState } from "react";
import "./App.css";
import AddTaskContainer from "./Components/AddTaskContainer";
import TaskContainer from "./TaskContainer";


const App = () => {
  
  //The App state ( tasks) will currently be in the App container
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <AddTaskContainer allTask={tasks} setTaskList={setTasks} />
      <TaskContainer tasks={tasks} taskSetter={setTasks} />
    </>
  );
};

export default App;

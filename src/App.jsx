
import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import AddTaskContainer from "./Components/AddTaskContainer";
import TaskContainer from "./TaskContainer";

const App = () => {
  //The App state ( tasks) will currently be in the App container
  const [tasks, setTasks] = useState([]);

  //function getdata
  useLayoutEffect(() => {
    //use Effect
    //
    function getData() {
      let url = "https://emis-server.onrender.com/todos"; //url

      fetch(url)
        .then((response) => {
          return response.json(); // fullfil promise of the todo list
        })
        .then((result) => {
          setTasks(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, []);

  return (
    <>
      <AddTaskContainer allTask={tasks} setTaskList={setTasks} />
      <TaskContainer tasks={tasks} taskSetter={setTasks} />
    </>
  );
};

export default App;


import Buttons from "./Buttons";

const Task = ({ taskName, id, allTask, taskSetter, isCompleted }) => {
  //??////////////////////////////////////////////////////////////////////////
  // DELETE  TASK FUNCTION
  //??////////////////////////////////////////////////////////////////////////

  const handleDelete = () => {
    let remainingTask = allTask.filter((task) => {
      return task.id != id;
    });
    taskSetter(remainingTask);
  };

  // handle set task complete
  const handleSetTaskComplete = (id) => {
    //getting the task id
    //  Ternary operator takes a condition, if this condition is truthy, the first value will run, otherwise the next value runs!

    let newUpdate = allTask.map((task) =>
      task.id == id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    taskSetter(newUpdate);
  };

  return (
    <>
      <div
        className="task"
        style={{
          borderLeft: isCompleted ? "5px solid green" : "5px solid yellow",
        }}
      >
        <p>{taskName}</p>
        <Buttons
          textValue={"completed"}
          isDelete={false}
          callback={() => handleSetTaskComplete(id)}
        />
        <Buttons textValue={"delete"} isDelete={true} callback={handleDelete} />
      </div>
    </>
  );
};

export default Task;

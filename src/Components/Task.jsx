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
          textValue={"Delete Task"}
          isDelete={true}
          callback={handleDelete}
        />
      </div>
    </>
  );
};

export default Task;

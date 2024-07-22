import Task from "./Components/Task";

const TaskContainer = ({ tasks, taskSetter }) => {
  return (
    <>
      <div className="task-container">
        {tasks.map((task) => (
          <Task
            taskName={task.taskName}
            key={task.id}
            id={task.id}
            allTask={tasks}
            taskSetter={taskSetter}
            isCompleted={task.isCompleted}
          />
        ))}
      </div>
    </>
  );
};

export default TaskContainer;

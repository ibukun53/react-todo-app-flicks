import Input from "./Input";

const AddTaskContainer = ({ allTask, setTaskList }) => {
  return (
    <>
      <div className="add-task-container">
        <Input allTaskRecieved={allTask} taskListSetter={setTaskList} />
      </div>
    </>
  );
};

export default AddTaskContainer;
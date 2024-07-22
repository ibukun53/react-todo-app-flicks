const Buttons = ({ textValue, isDelete, callback }) => {
  return (
    <>
      <button
        onClick={callback} //callback function passed in , to be fired up to the states.
        className="add-task-btn"
        style={{ backgroundColor: isDelete ? "Red" : "Green" }}
      >
        {textValue}
      </button>
    </>
  );
};

export default Buttons;

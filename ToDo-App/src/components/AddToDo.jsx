import { useState } from "react";
import { MdOutlineAddComment } from "react-icons/md";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();
  const handelNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handelDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handelAddButtonClick = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container ">
      <div className="row km-row">
        <div className="col-sm-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            onChange={handelNameChange}
            value={todoName}
          />
        </div>
        <div className="col-sm-4">
          <input type="date" onChange={handelDateChange} value={dueDate} />
        </div>
        <div className="col-sm-2 items-container">
          <button
            type="button"
            className="btn btn-primary km-button"
            onClick={handelAddButtonClick}
          >
            <MdOutlineAddComment />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;

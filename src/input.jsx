import { useState } from "react";

export default function Input({ btnClicked }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };
  const handleAddBtnClick = () => {
    btnClicked(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <>
      <div className="container text-center">
        <div className="row my-3">
          <div className="col-5 ">
            <input
              type="text"
              placeholder="Enter todo here"
              className="form-control"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-5">
            <input
              type="date"
              name=""
              id=""
              className="form-control"
              value={dueDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="col-2 d-flex">
            <button
              type="button"
              className="btn btn-primary flex-grow-1"
              onClick={handleAddBtnClick}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

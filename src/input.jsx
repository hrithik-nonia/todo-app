import { useRef } from "react";

export default function Input({ btnClicked }) {
  const todoName = useRef();
  const dueDate = useRef();

  const handleAddBtnClick = (event) => {
    event.preventDefault();

    const todoNameVal = todoName.current.value;
    const dueDateVal = dueDate.current.value;
    btnClicked(todoNameVal, dueDateVal);

    todoName.current.value = "";
    dueDate.current.value = "";
  };

  return (
    <>
      <div className="container text-center">
        <form className="row my-3" onSubmit={handleAddBtnClick}>
          <div className="col-5 ">
            <input
              type="text"
              placeholder="Enter todo here"
              className="form-control"
              ref={todoName}
            />
          </div>
          <div className="col-5">
            <input
              type="date"
              name=""
              id=""
              className="form-control"
              ref={dueDate}
            />
          </div>
          <div className="col-2 d-flex">
            <button type="submit" className="btn btn-primary flex-grow-1">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

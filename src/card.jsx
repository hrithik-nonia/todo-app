import { useContext } from "react";
import { TodoItemContext } from "./store/store";
export default function Card({ handleDeleteBtn }) {
  const todoArrFromContext = useContext(TodoItemContext);
  return (
    <>
      <div className="container text-center">
        {todoArrFromContext.map((item, index) => (
          <div className="row my-3" key={index}>
            <div className="col-5 ">
              <p>{item.task}</p>
            </div>
            <div className="col-5 ">
              <p>{item.date}</p>
            </div>
            <div className="col-2 d-flex">
              <button
                type="button"
                className="btn btn-danger flex-grow-1"
                onClick={() => handleDeleteBtn(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

import { TodoItemContext } from "./store/store";
import { useContext } from "react";
export default function Msg() {
  const todoItemFromContext = useContext(TodoItemContext);
  return (
    <>
      {todoItemFromContext.length === 0 && (
        <div className="container">
          <h3 className="text-center">welcome back</h3>
        </div>
      )}
    </>
  );
}

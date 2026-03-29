import { useState } from "react";
import Card from "./card";
import Head from "./head";
import Input from "./input";
import Msg from "./welcome-msg";
import { TodoItemContext } from "./store/store";

export default function App() {
  let [todoArr, setTodoArr] = useState([]);

  const btnClicked = (todoName, dueDate) => {
    if (todoName.trim() === "" || dueDate.trim() === "") {
      return;
    }
    setTodoArr((currentTodoItem) => {
      const newTodoItem = [
        ...currentTodoItem,
        { task: todoName, date: dueDate },
      ];
      return newTodoItem;
    });
  };

  const handleDeleteBtn = (item) => {
    setTodoArr(todoArr.filter((todo) => todo !== item));
  };

  return (
    <>
      <TodoItemContext.Provider value={todoArr}>
        <Head></Head>
        <Input btnClicked={btnClicked}></Input>
        <Msg></Msg>
        <Card handleDeleteBtn={handleDeleteBtn}></Card>
      </TodoItemContext.Provider>
    </>
  );
}

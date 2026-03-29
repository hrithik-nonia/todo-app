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
      <TodoItemContext.Provider
        value={{
          todoArr: todoArr,
          handleDeleteBtn,
          btnClicked,
        }}
      >
        <Head></Head>
        <Input></Input>
        <Msg></Msg>
        <Card></Card>
      </TodoItemContext.Provider>
    </>
  );
}

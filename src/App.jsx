import { useState } from "react";
import Card from "./card";
import Head from "./head";
import Input from "./input";
import Msg from "./welcome-msg";

export default function App() {
  let [todoArr, setTodoArr] = useState([]);

  const btnClicked = (todoName, dueDate) => {
    if (todoName.trim() === "" || dueDate.trim() === "") {
      return;
    }
    setTodoArr([
      ...todoArr,
      {
        task: todoName,
        date: dueDate,
      },
    ]);
  };

  const handleDeleteBtn = (item) => {
    setTodoArr(todoArr.filter((todo) => todo !== item));
  };
  return (
    <>
      <Head></Head>
      <Input btnClicked={btnClicked}></Input>
      {todoArr.length === 0 && <Msg></Msg>}
      <Card task={todoArr} handleDeleteBtn={handleDeleteBtn}></Card>
    </>
  );
}

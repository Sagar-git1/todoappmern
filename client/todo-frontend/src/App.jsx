import { useState, useEffect } from "react";
import axios from "axios";
import { Todo } from "./components/Todo";
import { CreateTodo } from "./components/CreateTodo";
function App() {
  let [todos, setTodos] = useState([]);
  let [trigger, setTrigger] = useState(false);
  useEffect(() => {
    axios
      .get("https://todoapp-backend-d1ib.onrender.com/getTodos")
      .then((response) => {
        const todolist = response.data.todoList;
        console.log(todolist);
        console.log("mama");
        setTodos(todolist);
      });
  }, [trigger]);

  return (
    <>
      <CreateTodo trigger={trigger} setTrigger={setTrigger} />
      <Todo todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;

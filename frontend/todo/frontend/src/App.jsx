import React, { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todo";
function App() {
  const [todos, setTodos] = useState([]);
  const fetchReq = async () => {
    const reponse = await fetch("http://localhost/3000/todos");
    const data = await reponse.json();
    setTodos(data.response);
  };

  useEffect(() => {
    fetchReq();
  }, []);
  return (
    <div>
      <CreateTodo />
      <Todos
        todos={[
          {
            title: "asd",
            description: "qdf",
            completed: false,
          },
        ]}
      />
    </div>
  );
}

export default App;

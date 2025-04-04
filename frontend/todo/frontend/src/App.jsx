import React, { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todo";
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        const data = await response.json();
        setTodos(data.response); // Adjust based on your API response structure
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, []);
  return (
    <div>
      <CreateTodo onTodoCreated={addTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;

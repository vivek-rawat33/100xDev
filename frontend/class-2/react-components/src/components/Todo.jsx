import React, { useState } from "react";

function Todo({ todos, setTodos }) {
  const [input, setInput] = useState({
    title: "",
    description: "",
  });
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          const value = e.target.value;
          setInput((prevState) => ({ ...prevState, title: value }));
        }}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          const value = e.target.value;
          setInput((prevState) => ({ ...prevState, description: value }));
        }}
      />
      <button
        onClick={function () {
          setTodos([...todos, input]);
        }}
      >
        Add Todos
      </button>
      {todos.map((item, index) => {
        return (
          <p key={index}>
            {`title:${item.title}`}
             <br />
            {`description:${item.description}`}
          </p>
        );
      })}
    </div>
  );
}

export default Todo;

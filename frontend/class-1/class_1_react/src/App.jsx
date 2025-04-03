import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState([
    {
      title: "go to gym",
      description: "go to gym from 9-10",
      completed: false,
    },
    {
      title: "go to gym",
      description: "go to gym from 9-10",
      completed: true,
    },
  ]);
  return (
    <div>
      <input type="text" placeholder="your todo" value={value} />
      <button
        onClick={() => {
          setTodo([...todo, value]);
        }}
      >
        add todo
      </button>
      {todo.map((item) => {
        console.log(item);
        return <Todo title={item.title} description={item.description} />;
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}
export default App;

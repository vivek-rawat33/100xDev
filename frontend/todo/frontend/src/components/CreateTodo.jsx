import { useState } from "react";

export function CreateTodo({ onTodoCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
          console.log(value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(value);
          console.log(value);
        }}
      />
      <br />
      <button
        onClick={async () => {
          try {
            const res = await fetch("http://localhost:3000/todo", {
              method: "POST",
              body: JSON.stringify({
                title: title,
                description: description,
              }),
              headers: {
                "Content-type": "application/json",
              },
            });
            if (!res.ok) throw new Error("Failed to add todo");
            const newTodo = await res.json(); // Get the created todo from response
            onTodoCreated(newTodo); // Call the callback with new todo
            setTitle(""); // Clear inputs
            setDescription("");
            alert("Todo added successfully");
          } catch (error) {
            alert("Error adding todo: " + error.message);
          }
        }}
      >
        Add a todo
      </button>
    </div>
  );
}

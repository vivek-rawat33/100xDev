export function Todos({ todos }) {
  return (
    <>
      {todos.map((todo) => {
        return (
          <div>
            <h2>{todo.title}</h2>
            <h3>{todo.description}</h3>
            <button>
              {todo.completed == true ? "Completed" : "Mark as done!"}
            </button>
          </div>
        );
      })}
    </>
  );
}

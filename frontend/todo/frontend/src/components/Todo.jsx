export function Todos({ todos }) {
  let id = 1;
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={id++}>
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
   
import TodoItem from "./TodoItem";
export default function Todo({ todos }) {
  return (
    <div>
      {" "}
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}

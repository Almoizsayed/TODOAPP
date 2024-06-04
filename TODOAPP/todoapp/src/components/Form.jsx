export default function Form() {
  return (
    <form onSubmit={handlesubmit}>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button type="submit">Add</button>
    </form>
  );
}

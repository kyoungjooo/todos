const TodoItem = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        const { id, title, content } = todo;
        return (
          <li key={id}>
            <div>
              <input type="checkbox" name="checkBox" id={id} />
              <div>
                <button type="button">수정</button>
                <button type="button">삭제</button>
              </div>
            </div>
            <label htmlFor={id}>
              <span>{title}</span>
              <p>{content}</p>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
export default TodoItem;

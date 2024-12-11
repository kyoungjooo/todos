import { useState } from "react";

const TodoItem = ({ todo, getUpdatedValue, getDeleteTarget }) => {
  const { id } = todo;
  const [isEditing, setEditing] = useState(true); //읽기모드
  const [updated, setUpdated] = useState(todo);

  const handleEdit = () => setEditing((prev) => !prev); //읽기모드취소

  const handleValue = (e) => {
    const { name, value } = e.target;
    setUpdated({ ...updated, [name]: value });
    if (!isEditing) getUpdatedValue(updated);
    //편집이 끝나면 updateInputValue에 값을 전달한다.
  };

  const handleDelete = (todo) => getDeleteTarget(todo.id);

  return (
    <li key={id}>
      <input type="checkbox" name="checkBox" id={id} />
      <div>
        <button type="button" onClick={() => handleEdit(todo)}>
          수정
        </button>
        <button type="button" onClick={() => handleDelete(todo)}>
          삭제
        </button>
      </div>

      <label htmlFor={id}>
        <input
          type="text"
          name="title"
          value={updated.title}
          disabled={isEditing}
          onChange={handleValue}
        />
        <textarea
          name="content"
          value={updated.content}
          disabled={isEditing}
          onChange={handleValue}
        />
      </label>
    </li>
  );
};
export default TodoItem;

import { useState } from "react";
import * as style from "../style/todo.style";
import { IoCheckboxOutline } from "react-icons/io5";
import { IoCheckbox } from "react-icons/io5";

const TodoItem = ({ todo, getUpdatedValue, getDeleteTarget }) => {
  const { id } = todo;
  const [isChecked, setChecked] = useState(false);
  const [isEditing, setEditing] = useState(true);
  const [updated, setUpdated] = useState(todo);

  const handleEdit = () => setEditing((prev) => !prev);

  const handleValue = (e) => {
    const { name, value } = e.target;
    setUpdated({ ...updated, [name]: value });
    if (!isChecked) getUpdatedValue(updated);
    //편집이 끝나면 updateInputValue에 값을 전달한다.
  };

  const handleDelete = (todo) => getDeleteTarget(todo.id);

  const handleChecked = (e) => {
    setChecked((prev) => !prev); // 상태
  };
  const handleLiClick = (e) => {
    // 특정 요소 클릭 시 상태 변경 방지
    if (e.target.tagName === "BUTTON" || !isEditing) {
      return;
    }
    handleChecked();
  };
  return (
    <li key={id} onClick={handleLiClick}>
      <style.TodoHeader>
        <style.Checkbox
          type="checkbox"
          name="checkBox"
          checked={isChecked}
          onChange={handleChecked}
        />
        {isChecked && <IoCheckbox />}
        {!isChecked && <IoCheckboxOutline />}
        <div>
          <button type="button" onClick={() => handleEdit(todo)}>
            수정
          </button>
          <button type="button" onClick={() => handleDelete(todo)}>
            삭제
          </button>
        </div>
      </style.TodoHeader>

      <style.TodoContents>
        <input
          type="text"
          name="title"
          value={updated.title}
          readOnly={isEditing}
          onChange={handleValue}
        />
        <textarea
          name="content"
          value={updated.content}
          readOnly={isEditing}
          onChange={handleValue}
        />
      </style.TodoContents>
    </li>
  );
};
export default TodoItem;

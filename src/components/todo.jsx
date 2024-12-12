import { useState } from "react";
import * as style from "../style/todo.style";
import { IoCheckboxOutline } from "react-icons/io5";
import { IoCheckbox } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import { useRef } from "react";

const TodoItem = ({ todo, getUpdatedValue, getDeleteTarget }) => {
  const { id } = todo;
  const [isChecked, setChecked] = useState(false);
  const [isEditing, setEditing] = useState(true);
  const [updated, setUpdated] = useState(todo);
  const inputTitle = useRef(null);

  const handleEdit = (e) => {
    e.stopPropagation();
    setEditing((prev) => !prev);
    return inputTitle.current.focus();
  };

  const handleValue = (e) => {
    const { name, value } = e.target;
    setUpdated({ ...updated, [name]: value });
    if (!isChecked) getUpdatedValue(updated);
    //편집이 끝나면 updateInputValue에 값을 전달한다.
  };

  const handleDelete = (e, todo) => {
    e.stopPropagation();
    getDeleteTarget(todo.id);
  };

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
    <style.CardItem key={id} onClick={handleLiClick} isChecked={isChecked}>
      <style.TodoHeader>
        <style.Checkbox
          type="checkbox"
          name="checkBox"
          checked={isChecked}
          onChange={handleChecked}
        />
        <style.IconCheck>
          {isChecked && <IoCheckbox />}
          {!isChecked && <IoCheckboxOutline />}
        </style.IconCheck>
        <style.Flex>
          <style.Icon type="button" isChecked={isChecked} onClick={handleEdit}>
            {isEditing ? <FaRegEdit /> : <FaEdit />}
          </style.Icon>
          <style.IconDel
            type="button"
            isChecked={isChecked}
            onClick={(e) => handleDelete(e, todo)}
          >
            <TiDelete />
          </style.IconDel>
        </style.Flex>
      </style.TodoHeader>

      <style.TodoContents isChecked={isChecked}>
        <style.TodoTitle
          type="text"
          name="title"
          value={updated.title}
          readOnly={isEditing}
          onChange={handleValue}
          ref={inputTitle}
          isEditing={isEditing}
        />
        <style.TodoText
          name="content"
          value={updated.content}
          readOnly={isEditing}
          onChange={handleValue}
          isEditing={isEditing}
        />
      </style.TodoContents>
    </style.CardItem>
  );
};
export default TodoItem;

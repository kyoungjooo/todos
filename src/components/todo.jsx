import { useState } from "react";
import { useRef } from "react";
import { IoCheckboxOutline } from "react-icons/io5";
import { IoCheckbox } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import * as style from "../style/todo.style";

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
  };

  const handleDelete = (e, todo) => {
    e.stopPropagation();
    getDeleteTarget(todo.id);
  };

  const handleChecked = () => setChecked((prev) => !prev);

  const handleLiClick = (e) => {
    if (e.target.tagName === "BUTTON" || !isEditing) return;
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
          <style.Icon type="button" onClick={handleEdit} isChecked={isChecked}>
            {isEditing ? <FaRegEdit /> : <FaEdit />}
          </style.Icon>
          <style.IconDel
            type="button"
            onClick={(e) => handleDelete(e, todo)}
            isChecked={isChecked}
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

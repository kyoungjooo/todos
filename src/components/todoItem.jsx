import { useState } from "react";
import { useRef } from "react";
import { IoCheckboxOutline } from "react-icons/io5";
import { IoCheckbox } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import * as Style from "../style/todo.style";

const TodoItem = ({ todo, editTodo, deleteTodo }) => {
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
    if (!isChecked) editTodo(updated);
  };

  const handleDelete = (e, todo) => {
    e.stopPropagation();
    deleteTodo(todo.id);
  };

  const handleChecked = () => setChecked((prev) => !prev);

  const handleLiClick = (e) => {
    if (e.target.tagName === "BUTTON" || !isEditing) return;
    handleChecked();
  };

  return (
    <Style.CardItem key={id} onClick={handleLiClick} isChecked={isChecked}>
      <Style.TodoHeader>
        <Style.Checkbox
          type="checkbox"
          name="checkBox"
          checked={isChecked}
          onChange={handleChecked}
        />
        <Style.IconCheck>
          {isChecked && <IoCheckbox />}
          {!isChecked && <IoCheckboxOutline />}
        </Style.IconCheck>
        <Style.Flex>
          <Style.Icon type="button" onClick={handleEdit} isChecked={isChecked}>
            {isEditing ? <FaRegEdit /> : <FaEdit />}
          </Style.Icon>
          <Style.IconDel
            type="button"
            onClick={(e) => handleDelete(e, todo)}
            isChecked={isChecked}
          >
            <TiDelete />
          </Style.IconDel>
        </Style.Flex>
      </Style.TodoHeader>
      <Style.TodoContents isChecked={isChecked}>
        <Style.TodoTitle
          type="text"
          name="title"
          value={updated.title}
          readOnly={isEditing}
          onChange={handleValue}
          ref={inputTitle}
          isEditing={isEditing}
        />
        <Style.TodoText
          name="content"
          value={updated.content}
          readOnly={isEditing}
          onChange={handleValue}
          isEditing={isEditing}
        />
      </Style.TodoContents>
    </Style.CardItem>
  );
};
export default TodoItem;

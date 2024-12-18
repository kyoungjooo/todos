import { useState } from "react";
import { useRef } from "react";
import { IoCheckboxOutline } from "react-icons/io5";
import { IoCheckbox } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import * as Style from "../style/todo.style";
import { useDispatch, useSelector } from "react-redux";

const TodoItemCard = ({ todo, key }) => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  console.log(todos);
  const [text, setText] = useState({
    id: todo.id,
    title: todo.title,
    content: todo.content,
  });

  const inputTitle = useRef();
  const [isChecked, setChecked] = useState(false);
  const [isEditing, setEditing] = useState(true);

  const handleEditMode = (e) => {
    e.stopPropagation();
    setEditing((prev) => !prev);
    return inputTitle.current.focus();
  };

  const handleEditText = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
    dispatch({
      type: "edit_todo",
      payload: text,
    });
  };

  const handleDelete = (e, todo) => {
    e.stopPropagation();
    dispatch({
      type: "delete_todo",
      payload: todo,
    });
  };

  const handleChecked = (e) => {
    if (!isEditing) {
      return e.stopPropagation();
    }
    setChecked((prev) => !prev);
  };
  return (
    <Style.CardItem key={key} onClick={handleChecked} isChecked={isChecked}>
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
          <Style.Icon
            type="button"
            onClick={handleEditMode}
            isChecked={isChecked}
          >
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
          value={text.title}
          readOnly={isEditing}
          ref={inputTitle}
          isEditing={isEditing}
          onChange={handleEditText}
        />
        <Style.TodoText
          name="content"
          readOnly={isEditing}
          value={text.content}
          isEditing={isEditing}
          onChange={handleEditText}
        />
      </Style.TodoContents>
    </Style.CardItem>
  );
};
export default TodoItemCard;

import { useState } from "react";
import * as Style from "../style/todo.style";
import Alert from "./alert";
import { useDispatch } from "react-redux";

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const [isAlert, setIsAlert] = useState(false);
  const createId = () => Date.now();

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    let { title, content } = e.target;
    if (
      title.value === undefined ||
      content.value === undefined ||
      title.value.trim().length < 1 ||
      content.value.trim().length < 1
    )
      return setIsAlert(true);

    dispatch({
      type: "add_todo",
      payload: { id: createId(), title: title.value, content: content.value },
    });

    title.value = "";
    content.value = "";
  };

  return (
    <>
      <Style.Form onSubmit={handleSubmitAddTodo}>
        <Style.TodoTitle placeholder="제목" type="text" name="title" />
        <Style.TodoText name="content" placeholder="할 일 입력하기" />
        <Style.BaseBtn type="submit">입력</Style.BaseBtn>
      </Style.Form>
      {isAlert ? (
        <Alert setIsAlert={setIsAlert}>
          <p>내용을 한글자 이상 입력하세요.</p>
        </Alert>
      ) : (
        ""
      )}
    </>
  );
};
export default AddTodoForm;

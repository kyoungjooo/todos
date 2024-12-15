import { useState } from "react";
import * as style from "../style/todo.style";
import Alert from "./alert";

const Input = ({ getTextFromInput }) => {
  const [text, setText] = useState({
    title: "",
    content: "",
  });
  const [isAlert, setIsAlert] = useState(false);

  const createId = () => {
    return Date.now();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      text.title === undefined ||
      text.content === undefined ||
      text.title.trim().length < 1 ||
      text.content.trim().length < 1
    )
      return setIsAlert(true);
    getTextFromInput(text);
    setText("");
  };

  const getInputValue = (e) => {
    const { name, value } = e.target;
    setText({ ...text, id: createId(), [name]: value });
  };

  return (
    <>
      <style.Form onSubmit={handleSubmit}>
        <style.TodoTitle
          placeholder="제목"
          type="text"
          name="title"
          onChange={getInputValue}
          value={text.title || ""}
        />
        <style.TodoText
          name="content"
          placeholder="할 일 입력하기"
          onChange={getInputValue}
          value={text.content || ""}
        />
        <style.BaseBtn type="submit">입력</style.BaseBtn>
      </style.Form>
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
export default Input;

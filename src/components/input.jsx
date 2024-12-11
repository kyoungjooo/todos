import { useState } from "react";

const Input = ({ getTextFromInput }) => {
  const [text, setText] = useState("");

  const createId = () => {
    return Date.now();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length < 1) return;
    getTextFromInput(text);
    setText("");
  };

  const getInputValue = (e) => {
    const { name, value } = e.target;
    setText({ ...text, id: createId(), [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="제목"
        type="text"
        name="title"
        onChange={getInputValue}
        value={text.title || ""}
      />
      <textarea
        name="content"
        placeholder="할 일 입력하기"
        onChange={getInputValue}
        value={text.content || ""}
      />
      <button type="submit">입력</button>
    </form>
  );
};
export default Input;

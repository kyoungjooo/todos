import { useState } from "react";
const useSettingText = () => {
  const [text, setText] = useState("");
  const getInputValue = (e) => {
    const { name, value } = e.target;

    setText({ ...text, [name]: value });
  };
  return { text, getInputValue };
};
export default useSettingText;

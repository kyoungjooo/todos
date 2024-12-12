import styled from "@emotion/styled";

export const TodoContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const H1 = styled.h1`
  margin: 0;
  margin-bottom: 8px;
  font-size: 28px;
  line-height: 1;
`;
export const TodoWrapper = styled.div`
  margin: 0 auto;
  width: 400px;
  padding: 16px 0;
  border-radius: 4px;
  background-color: #a2a69f;
`;

export const TodoContents = styled.div`
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.isChecked ? "50%" : "100%")};
`;

export const TodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Checkbox = styled.input`
  visibility: hidden;
  position: absolute;
  top: -9999999px;
  left: -9999999px;
  width: 1px;
  height: 1px;
  margin: 0;
  padding: 0;
  background: none;
  font-size: 0;
  line-height: 0;
  text-indent: -9999999px;
`;

export const TodoInner = styled.ul`
  padding: 0;
  margin-top: 0;
  height: 440px;
  overflow-y: scroll;
`;
export const CardItem = styled.li`
  padding: 8px 16px 12px 16px;
  margin: 0 16px;
  list-style: none;
  &:not(:first-of-type) {
    margin-top: 8px;
  }
  border-radius: 4px;
  background-color: ${(props) => (props.isChecked ? "#D4D5CB" : "#ebece9")};
`;
export const TodoTitle = styled.input`
  outline: ${(props) => (props.isEditing ? "none" : "initial")};
  cursor: auto;
  padding: 6px 12px;
  font-size: 14px;
  margin-bottom: 6px;
  border: 0;
  border-radius: 4px;
`;
export const TodoText = styled.textarea`
  outline: ${(props) => (props.isEditing ? "none" : "initial")};
  cursor: auto;
  resize: none;
  padding: 8px 12px;
  height: 30px;
  font-size: 14px;
  border: 0;
  border-radius: 4px;
`;

export const Icon = styled.button`
  font-size: 18px;
  width: 32px;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  position: relative;
  top: -1px;
  opacity: ${(props) => (props.isChecked ? "50%" : "100%")};
`;

export const IconDel = styled.button`
  font-size: 22px;
  width: 32px;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  opacity: ${(props) => (props.isChecked ? "50%" : "100%")};
`;
export const IconCheck = styled.button`
  font-size: 22px;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  color: #152929;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
`;

export const Flex = styled.div`
  display: flex;
`;

export const BaseBtn = styled.button`
  padding: 12px 0;
  margin-top: 16px;
  cursor: pointer;
  background-color: #394338;
  outline: none;
  border: 0;
  border-radius: 4px;
  color: #fff;
  &:hover {
    background-color: #152929;
  }
`;

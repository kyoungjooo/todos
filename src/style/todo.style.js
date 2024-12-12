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
`;
export const TodoWrapper = styled.div`
  margin: 0 auto;
  width: 400px;
  padding: 12px 0;
  border: 1px solid;
  border-radius: 4px;
`;

export const TodoContents = styled.div`
  display: flex;
  flex-direction: column;
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
  margin: 0 12px;
  list-style: none;
  border: 1px solid;
  &:not(:first-of-type) {
    margin-top: 8px;
  }
  border-radius: 4px;
`;
export const TodoTitle = styled.input`
  outline: ${(props) => (props.isEditing ? "none" : "initial")};
  cursor: auto;
  padding: 4px 8px;
  font-size: 14px;
  margin-bottom: 6px;
`;
export const TodoText = styled.textarea`
  outline: ${(props) => (props.isEditing ? "none" : "initial")};
  cursor: auto;
  resize: none;
  padding: 8px;
  font-size: 14px;
`;

export const Icon = styled.button`
  font-size: 18px;
  height: 32px;
  width: 32px;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  position: relative;
  top: -1px;
`;

export const IconDel = styled.button`
  font-size: 22px;
  height: 32px;
  width: 32px;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;
`;
export const IconCheck = styled.button`
  font-size: 22px;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 12px;
`;
// common
export const Flex = styled.div`
  display: flex;
`;

export const BaseBtn = styled.button`
  padding: 8px 0;
  margin-top: 16px;
`;

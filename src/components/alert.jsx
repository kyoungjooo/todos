import * as style from "../style/todo.style";
import { IoIosClose } from "react-icons/io";

const Alert = ({ children, setIsAlert }) => {
  const handleCloseAlert = () => {
    setIsAlert((prev) => !prev);
  };
  return (
    <style.Dimmed>
      <style.AlertContent>
        <style.IconClose type="button" onClick={handleCloseAlert}>
          <IoIosClose />
        </style.IconClose>
        <div>{children}</div>
      </style.AlertContent>
    </style.Dimmed>
  );
};
export default Alert;

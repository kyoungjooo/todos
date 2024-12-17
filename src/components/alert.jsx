import * as Style from "../style/todo.style";
import { IoIosClose } from "react-icons/io";

const Alert = ({ children, setIsAlert }) => {
  const handleCloseAlert = () => {
    setIsAlert((prev) => !prev);
  };
  return (
    <Style.Dimmed>
      <Style.AlertContent>
        <Style.IconClose type="button" onClick={handleCloseAlert}>
          <IoIosClose />
        </Style.IconClose>
        <div>{children}</div>
      </Style.AlertContent>
    </Style.Dimmed>
  );
};
export default Alert;

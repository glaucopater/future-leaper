import { Application } from "../../store/reducers/appStore";
import ApplicationForm from "../Forms/ApplicationForm";
import "./Modal.css";

export const Modal = ({
  application,
  state,
  closeModal,
  isEditable,
}: {
  application: Application;
  state: boolean;
  closeModal: () => void;
  isEditable?: boolean;
}) => {
  const divStyle = {
    display: state ? "block" : "none",
    transition: "ease-in-out 1000ms",
  };

  const handleOnClick = () => {
    closeModal();
  };

  return (
    <div className="Modal" style={divStyle}>
      <div className="Modal-Content" onClick={(e) => e.stopPropagation()}>
        <span className="Close" onClick={handleOnClick}>
          &times;
        </span>
        <ApplicationForm
          activeApplication={application}
          isEditable={isEditable}
          handleOnComplete={handleOnClick}
        />
      </div>
    </div>
  );
};

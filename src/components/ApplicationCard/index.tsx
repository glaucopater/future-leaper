import { useState } from "react";
import { Application } from "../../store/reducers/appStore";
import { Modal } from "../Modal";
import "./ApplicationCard.css";
import { useNavigate } from "react-router-dom";

export const ApplicationCard = ({ item }: { item: Application }) => {
  const previewAttributes = ["name", "version", "lang"];
  const [displayModal, setDisplayModal] = useState(false);
  const history = useNavigate();

  const handleOnCloseModal = () => {
    setDisplayModal(false);
  };

  const handleOnEdit = () => {
    history(`/applications/${item.id}`);
  };

  return (
    <>
      <div
        className="Application-Card"
        role="listitem"
        onClick={handleOnEdit}
        title="Edit Application"
      >
        {previewAttributes.map((attr: string, index: number) => (
          <span key={index} className="field">
            <label>{attr}: </label>
            {item[attr as keyof typeof item]}
          </span>
        ))}
      </div>
      <Modal
        application={item}
        state={displayModal}
        closeModal={handleOnCloseModal}
        isEditable
      />
    </>
  );
};

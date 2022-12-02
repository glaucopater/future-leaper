import { useState } from "react";
import { Application } from "../../store/reducers/appStore";
import { Modal } from "../Modal";
import "./ApplicationCard.css";

export const ApplicationCard = ({
  item,
  renderer,
}: {
  item: Application;
  renderer: () => string[];
}) => {
  const previewAttributes = ["id", "name", "version"];
  const [displayModal, setDisplayModal] = useState(false);

  const handleOnCloseModal = () => {
    setDisplayModal(false);
  };

  const handleOnEdit = () => {
    setDisplayModal(true);
  };

  return (
    <>
      <div
        className={`application-card`}
        role="listitem"
        onClick={handleOnEdit}
        title="Edit Application"
      >
        {previewAttributes.map((attr: string, index: number) => (
          <span key={index} className="field">
            <strong>{attr}: </strong>
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

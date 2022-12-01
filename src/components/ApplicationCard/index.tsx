import { useState } from "react";
import { Application } from "../../store/reducers/appStore";
import { getWarningMessage } from "../../utils";

import { Modal } from "../Modal";
import "./ApplicationCard.css";

export const ApplicationCard = ({
  item,
  renderer,
  isSelected,
}: {
  item: Application;
  renderer: () => string[];
  isSelected?: boolean;
}) => {
  const attributes: string[] = renderer();
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
        className={`application-card${isSelected ? " application-card-selected" : ""}`}
        role="listitem"
        onClick={handleOnEdit}
      >
        {attributes.map((attr: string, index: number) => (
          <span key={index} className="field">
            {item.hasOwnProperty(attr)
              ? item[attr as keyof typeof item]
              : getWarningMessage(attr)}
          </span>
        ))}
      </div>
      <Modal
        content={item as Application}
        state={displayModal}
        closeModal={handleOnCloseModal}
        isEditable
      />
    </>
  );
};

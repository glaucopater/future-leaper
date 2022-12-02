import { SyntheticEvent } from "react";
import "./DeleteApplicationButton.css";

export type DeleteApplicationsButtonProps = {
  id: string;
  onClickHandler?: (id: string) => void;
};

export const DeleteApplicationButton = (
  cardProps: DeleteApplicationsButtonProps
) => {
  const handleOnClick = (e: SyntheticEvent) => {
    if (cardProps.onClickHandler) {
      cardProps.onClickHandler(cardProps.id);
    }
  };

  return (
    <button
      className="Delete_Application"
      onClick={handleOnClick}
      title="Delete Application"
    >
      Delete
    </button>
  );
};

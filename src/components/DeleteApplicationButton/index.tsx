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
    console.log("DeleteApplicationButton handleOnClick");

    if (cardProps.onClickHandler) {
      cardProps.onClickHandler(cardProps.id);
    }
  };

  return (
    <button className="Delete_Application" onClick={handleOnClick}>
      Delete
    </button>
  );
};

import "./AddApplication.css";

export type AddApplicationsButtonProps = {
  content?: string;
  onClickHandler?: () => void;
};

export const AddApplicationButton = (cardProps: AddApplicationsButtonProps) => {
  const handleOnClick = () => {
    if (cardProps.onClickHandler) cardProps.onClickHandler();
  };

  return (
    <button className="Add_Application" onClick={handleOnClick}>
      Add App
    </button>
  );
};

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
    <button
      className="Add_Application"
      title="Add New Application"
      onClick={handleOnClick}
    >
      Add
    </button>
  );
};

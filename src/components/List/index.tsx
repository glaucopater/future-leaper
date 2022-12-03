import { ListProps } from "./List.types";
import { ApplicationCard } from "../ApplicationCard";
import "./List.css";
import { DeleteApplicationButton } from "../DeleteApplicationButton";
import { AddApplicationButton } from "../AddApplicationButton";

export const List = ({
  data,
  renderer,
  handleDeleteApplication,
  handleOnClickAddButton,
}: React.PropsWithChildren<ListProps>) => {
  return (
    <>
      <header className="List_Header">
        <h3 className="List_Title">Available Applications</h3>
        <AddApplicationButton onClickHandler={handleOnClickAddButton} />
      </header>
      <ul className="List">
        {data?.map((app, index: number) => {
          return (
            <li key={index} className={""}>
              <ApplicationCard item={app} />
              <DeleteApplicationButton
                id={app.id}
                onClickHandler={handleDeleteApplication}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

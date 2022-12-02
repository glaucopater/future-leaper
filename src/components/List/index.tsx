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
      <h3 className="Info">Applications List</h3>
      <AddApplicationButton onClickHandler={handleOnClickAddButton} />
      <ul className="List">
        {data?.map((app, index: number) => {
          return (
            <li key={index} className={""}>
              <ApplicationCard item={app} renderer={renderer} />
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

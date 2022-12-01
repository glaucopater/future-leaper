import { ListProps } from "./List.types";
import { ApplicationCard } from "../ApplicationCard";
import "./List.css";
import { DeleteApplicationButton } from "../DeleteApplicationButton";

export const List = ({
  data,
  renderer,
  handleDeleteApplication,
}: React.PropsWithChildren<ListProps>) => {
  return (
    <>
      <h3 className="Info">Application List</h3>
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

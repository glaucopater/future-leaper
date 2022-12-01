import { Application } from "../../store/reducers/appStore";

export type ListProps = {
  data: Application[];
  renderer: () => string[];
  handleDeleteApplication: (appId: string) => void;
};

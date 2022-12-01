import { Application } from "../../store/reducers/appStore";

export const dataset1: Application[] = [
  {
    id: "1",
    name: "Title 1",
    secret: "secret 1",
    lang: "lang 1",
    version: 1,
    username: "username 1",
  },
  {
    id: "2",
    name: "Name 2",
    secret: "Secret 2",
    lang: "lang 2",
    version: 2,
    username: "Username 3",
  },
  {
    id: "3",
    name: "Name 3",
    secret: "Secret 3",
    lang: "lang 3",
    version: 3,
    username: "Username 3",
  },
];

export const renderer1 = () => {
  return ["name"];
};

export const renderer2 = () => {
  return ["name", "description", "link"];
};

export const renderer3 = () => {
  return ["a", "b", "c", "link"];
};

import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "HTML",
    description:
      "HTML is a markup language.It is mainly used to structure the web pages.",
  },
  {
    _id: uuid(),
    categoryName: "Javascript",
    description:
      "Javascript is a programming language used in both frontend and backend while building a website or web applications.",
  },
  {
    _id: uuid(),
    categoryName: "React",
    description:
      "React is a frontend library developed by facebook.It is mainly used to create single page web applications.",
  },
];

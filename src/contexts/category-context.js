import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "../custom-hooks";

const CategoryContext = createContext({});

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { response, callAPI, loader, error } = useAxios();

  useEffect(() => {
    callAPI({
      method: "get",
      url: "/api/categories",
    });
  }, []);

  useEffect(() => {
    setCategories(response?.data?.categories);
  }, [response]);

  const { Provider } = CategoryContext;

  return (
    <Provider
      value={{ categories, loader, selectedCategory, setSelectedCategory }}
    >
      {children}
    </Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };

import { useDocumentTitle } from "../custom-hooks";

const Home = () => {
  useDocumentTitle("Lens-Play");

  return <h2>Home Page</h2>;
};

export { Home };

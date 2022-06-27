import { Drawer, NotFound } from "../components";
import { useDocumentTitle } from "../custom-hooks";

const PageNotFound = () => {
  useDocumentTitle("Page Not found | Lens Play");

  return (
    <main className="main__container">
      <Drawer />
      <NotFound />
    </main>
  );
};

export { PageNotFound };

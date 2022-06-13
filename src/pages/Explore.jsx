import { useDocumentTitle } from "../custom-hooks";
import { Navbar, Drawer } from "../components";

const Explore = () => {
  useDocumentTitle("Explore | Lens-Play");

  return (
    <>
      <Navbar />
      <main className="d-flex gap-1">
        <Drawer />
        <h3>Explore Page</h3>
      </main>
    </>
  );
};

export { Explore };

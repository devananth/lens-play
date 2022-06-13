import { useDocumentTitle } from "../custom-hooks";
import { Navbar, Drawer } from "../components";

const History = () => {
  useDocumentTitle("History | Lens-Play");

  return (
    <>
      <Navbar />
      <main className="d-flex">
        <Drawer />
        <h5>My history (2)</h5>
      </main>
    </>
  );
};

export { History };

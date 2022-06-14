import { useDocumentTitle } from "../custom-hooks";
import { Navbar, Drawer } from "../components";

const Liked = () => {
  useDocumentTitle("Liked | Lens-Play");

  return (
    <>
      <main className="d-flex">
        <Drawer />
        <h5>Liked Videos (2)</h5>
      </main>
    </>
  );
};

export { Liked };

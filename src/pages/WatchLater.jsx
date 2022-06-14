import { useDocumentTitle } from "../custom-hooks";
import { Navbar, Drawer } from "../components";

const WatchLater = () => {
  useDocumentTitle("WatchLater | Lens-Play");

  return (
    <>
      <main className="d-flex">
        <Drawer />
        <h5>Watch Later (2)</h5>
      </main>
    </>
  );
};

export { WatchLater };

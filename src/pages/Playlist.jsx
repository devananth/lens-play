import { useDocumentTitle } from "../custom-hooks";
import { Navbar, Drawer } from "../components";

const Playlist = () => {
  useDocumentTitle("Playlist | Lens-Play");

  return (
    <>
      <main className="d-flex">
        <Drawer />
        <h5>My Playlist (2)</h5>
      </main>
    </>
  );
};

export { Playlist };

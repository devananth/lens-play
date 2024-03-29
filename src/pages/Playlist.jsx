import { useDocumentTitle } from "../custom-hooks";
import { Drawer } from "../components";
import { usePlaylists, useModal } from "../contexts";
import { PlaylistCard } from "../components";

const Playlists = () => {
  useDocumentTitle("Playlists | Lens-Play");

  const { playlists } = usePlaylists();

  const { setShowModal } = useModal();

  return (
    <>
      <main className="main__container">
        <Drawer />
        <section className="main__content">
          <h5 className="my-1">My Playlists</h5>
          <div className="grid-autofill-layout">
            {playlists.length > 0 ? (
              playlists.map((playlist) => (
                <PlaylistCard key={playlist._id} playlist={playlist} />
              ))
            ) : (
              <h3>No playlist found...</h3>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export { Playlists };

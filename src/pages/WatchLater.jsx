import { useDocumentTitle } from "../custom-hooks";
import { Navbar, Drawer, VideoCard } from "../components";
import { useWatchLater } from "../contexts";

const WatchLater = () => {
  useDocumentTitle("WatchLater | Lens-Play");

  const { watchLater } = useWatchLater();

  return (
    <>
      <main className="main__container">
        <Drawer />
        <section>
          <div className="mt-1">
            <h3 className="txt-bold m-sm">Watch Later Videos</h3>
          </div>
          <div className="grid-autofill-layout p-1">
            {watchLater.length > 0 ? (
              watchLater.map((video) => (
                <VideoCard key={video._id} {...video} />
              ))
            ) : (
              <h3 className="txt-bold">No videos found...</h3>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export { WatchLater };

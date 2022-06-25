import { useDocumentTitle } from "../custom-hooks";
import { Navbar, Drawer, VideoCard } from "../components";
import { useLikes } from "../contexts";

const Liked = () => {
  useDocumentTitle("Liked | Lens-Play");

  const { likes } = useLikes();

  return (
    <>
      <main className="main__container">
        <Drawer />
        <section>
          <div>
            <h3 className="txt-bold m-sm">Liked Videos</h3>
          </div>
          <div className="grid-autofill-layout p-1">
            {likes.map((video) => (
              <VideoCard key={video._id} {...video} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export { Liked };

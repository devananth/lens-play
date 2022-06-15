import { v4 as uuid } from "uuid";
import { useDocumentTitle } from "../custom-hooks";
import { Navbar, Drawer, Loader, Chips, VideoCard } from "../components";
import { useCategory } from "../contexts";
import { getSelectedCategoryVideos } from "../utils";
import { videos } from "../backend/db/videos";

const Explore = () => {
  useDocumentTitle("Explore | Lens-Play");

  const { categories, loader, selectedCategory, setSelectedCategory } =
    useCategory();

  const filteredVideos = getSelectedCategoryVideos(selectedCategory, videos);

  return (
    <>
      <main className="main__container">
        <Drawer />
        <section className="ml-1">
          {loader ? (
            <Loader />
          ) : (
            <div className="category__container m-1">
              {[{ _id: uuid(), categoryName: "All" }, ...categories].map(
                ({ _id, categoryName }) => (
                  <Chips
                    key={_id}
                    text={categoryName}
                    type={selectedCategory === categoryName ? "active" : ""}
                    categoryHandler={() => setSelectedCategory(categoryName)}
                  />
                )
              )}
            </div>
          )}
          <div className="grid-autofill-layout">
            {filteredVideos &&
              filteredVideos.map((video) => (
                <VideoCard key={video._id} {...video} />
              ))}
          </div>
        </section>
      </main>
    </>
  );
};

export { Explore };

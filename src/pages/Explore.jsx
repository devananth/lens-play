import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { useDocumentTitle, useFilteredVideos } from "../custom-hooks";
import { Navbar, Drawer, Loader, Chips, VideoCard } from "../components";
import { useCategory, useVideos } from "../contexts";
import {
  getSearchedVideos,
  getSelectedCategoryVideos,
  getSortedVideos,
} from "../utils";

const Explore = () => {
  useDocumentTitle("Explore | Lens-Play");

  const [sortByDropdown, setSortByDropdowm] = useState(false);

  const {
    categories,
    loader: categoryLoader,
    selectedCategory,
    setSelectedCategory,
  } = useCategory();

  const { videoState, setVideoState, loader: videoLoader } = useVideos();

  const { videos, sortBy } = videoState;

  let filteredVideos = categories ? useFilteredVideos() : [];

  const sortByHandler = (type) => {
    if (type === "latest") {
      setVideoState((prevState) => ({ ...prevState, sortBy: "Latest Date" }));
    } else {
      setVideoState((prevState) => ({ ...prevState, sortBy: "Oldest Date" }));
    }
  };

  return (
    <>
      <main className="main__container">
        <Drawer />
        <section className="main__content">
          {categoryLoader || videoLoader ? (
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

          <div className="sort__filter cursor-ptr">
            <span onClick={() => setSortByDropdowm((prevState) => !prevState)}>
              <i className="fas fa-filter"></i> Sort By
            </span>
            {sortByDropdown && (
              <ul className="sort__dropdown">
                <li onClick={() => sortByHandler("latest")}>
                  Latest uploaded date
                </li>
                <li onClick={() => sortByHandler("oldest")}>
                  Oldest uploaded date
                </li>
              </ul>
            )}
          </div>

          <div className="grid-autofill-layout mr-1">
            {filteredVideos.length === 0 ? (
              <h5>No videos found to display...</h5>
            ) : (
              filteredVideos.map((video) => (
                <VideoCard key={video._id} {...video} />
              ))
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export { Explore };

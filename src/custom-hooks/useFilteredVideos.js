import { useCategory, useVideos } from "../contexts";
import {
  getSearchedVideos,
  getSelectedCategoryVideos,
  getSortedVideos,
} from "../utils";

const useFilteredVideos = () => {
  const {
    videoState: { videos, sortBy, searchBy },
  } = useVideos();

  const { selectedCategory } = useCategory();

  let filteredVideos = [...videos];

  filteredVideos = getSelectedCategoryVideos(selectedCategory, filteredVideos);

  filteredVideos = getSortedVideos(sortBy, filteredVideos);

  filteredVideos = getSearchedVideos(searchBy, filteredVideos);

  return filteredVideos;
};

export { useFilteredVideos };

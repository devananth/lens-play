import { useVideos } from "../contexts";

const getSearchedVideos = (searchPattern, videos) => {
  searchPattern = searchPattern ? searchPattern.trim() : "";

  const {
    videoState: { videos: allVideos },
  } = useVideos();

  if (searchPattern === "") {
    return [...videos];
  }

  return videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchPattern.toLowerCase()) ||
      video.creator.toLowerCase().includes(searchPattern.toLowerCase())
  );
};

export { getSearchedVideos };

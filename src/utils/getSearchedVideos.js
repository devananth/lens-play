const getSearchedVideos = (searchPattern, videos) => {
  searchPattern = searchPattern ? searchPattern.trim() : "";

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

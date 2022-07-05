export const getSortedVideos = (sortBy, videosArr) => {
  if (sortBy === "Latest Date") {
    return [...videosArr].sort(
      (video1, video2) =>
        new Date(video2.uploadedDate) - new Date(video1.uploadedDate)
    );
  } else if (sortBy === "Oldest Date") {
    return [...videosArr].sort(
      (video1, video2) =>
        new Date(video1.uploadedDate) - new Date(video2.uploadedDate)
    );
  } else {
    return [...videosArr];
  }
};

export const getSelectedCategoryVideos = (category, videosArr) => {
  if (category === "All") {
    return videosArr;
  }

  return videosArr.filter(({ categoryName }) => categoryName === category);
};

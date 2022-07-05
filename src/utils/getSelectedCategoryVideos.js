export const getSelectedCategoryVideos = (category, videosArr) => {
  if (category === "All" || category === "") {
    return [...videosArr];
  }

  return videosArr.filter(({ categoryName }) => categoryName === category);
};

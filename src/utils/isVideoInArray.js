export const isVideoInArray = (arr, video) =>
  arr.find(({ _id }) => _id === video._id) !== undefined;

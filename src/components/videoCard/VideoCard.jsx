import "./videoCard.css";

const VideoCard = (props) => {
  const {
    _id,
    title,
    categoryName,
    creator,
    creatorLogo,
    thumbnail,
    description,
    uploadedDate,
  } = props;

  return (
    <div className="video__card">
      <div className="thumbnail__wrapper">
        <img className="img-responsive" src={thumbnail} alt={title} />
      </div>
      <div className="video__content d-flex space-bw gap-1">
        <div className="d-flex space-bw gap-1">
          <img
            className="avatar-sm rounded-full"
            src={creatorLogo}
            alt={`${creator} Logo`}
          />

          <div className="d-flex col gap-1">
            <span className="video__title">{title}</span>
            <div className="d-flex col txt-sm">
              <span>
                9M views | {new Date(uploadedDate).toDateString().slice(4)}
              </span>
              <span>{creator}</span>
            </div>
          </div>
        </div>
        <i className="fas fa-ellipsis-v"></i>
      </div>
    </div>
  );
};

export { VideoCard };

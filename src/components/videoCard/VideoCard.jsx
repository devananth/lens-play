import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useLikes } from "../../contexts";
import { isVideoInArray } from "../../utils";
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

  const [video] = [props];

  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);

  const { likes, addToLikesServerCall, removeFromLikesServerCall } = useLikes();
  const {
    authState: { isUserLoggedIn },
  } = useAuth();

  const navigate = useNavigate();

  const isVideoLiked = isVideoInArray(likes, video);
  const isVideoInWatchLater = false;

  const likeHandler = () =>
    isUserLoggedIn
      ? isVideoLiked
        ? removeFromLikesServerCall(video)
        : addToLikesServerCall(video)
      : navigate("/login");

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
        <i
          className="fas fa-ellipsis-v"
          onClick={() => setShowOptionsDropdown((prev) => !prev)}
        ></i>
      </div>
      {showOptionsDropdown && (
        <ul className="options__dropdown">
          {isVideoLiked ? (
            <li onClick={likeHandler}>
              <i className="fas fa-heart"></i>Remove from likes
            </li>
          ) : (
            <li onClick={likeHandler}>
              <i className="far fa-heart"></i>Add to likes
            </li>
          )}
          {isVideoInWatchLater ? (
            <li>
              <i className="fas fa-clock"></i>Remove from watch Later
            </li>
          ) : (
            <li>
              <i className="far fa-clock"></i>Add to Watch Later
            </li>
          )}
          <li>
            <i className="fas fa-plus"></i>Save to playlist
          </li>
        </ul>
      )}
    </div>
  );
};

export { VideoCard };

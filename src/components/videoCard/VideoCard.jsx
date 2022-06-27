import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAuth,
  useLikes,
  useWatchLater,
  useModal,
  usePlaylists,
} from "../../contexts";
import { useVideoHandlers } from "../../custom-hooks";
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
    youtubeID,
    views,
  } = props;

  const [video] = [props];

  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);

  const {
    likeHandler,
    playlistHandler,
    watchLaterHandler,
    isVideoLiked,
    isVideoInWatchLater,
    isVideoInHistory,
    historyHandler,
  } = useVideoHandlers(video);

  const location = useLocation();

  const navigate = useNavigate();

  return (
    <div className="video__card">
      <div
        className="thumbnail__wrapper cursor-ptr"
        onClick={() => navigate(`/video/${youtubeID}`)}
      >
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
                {views} | {new Date(uploadedDate).toDateString().slice(4)}
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
          {isVideoInHistory && location.pathname === "/history" && (
            <li onClick={historyHandler} className="danger">
              {
                <>
                  <i className="fas fa-trash"></i>Remove from history
                </>
              }
            </li>
          )}
          <li onClick={likeHandler}>
            {isVideoLiked ? (
              <>
                <i className="fas fa-heart"></i>Remove from likes
              </>
            ) : (
              <>
                <i className="far fa-heart"></i>Add to likes
              </>
            )}
          </li>
          <li onClick={watchLaterHandler}>
            {isVideoInWatchLater ? (
              <>
                <i className="fas fa-clock"></i>Remove from watch Later
              </>
            ) : (
              <>
                <i className="far fa-clock"></i>Add to Watch Later
              </>
            )}
          </li>
          <li
            onClick={(e) => {
              setShowOptionsDropdown(false);
              playlistHandler(e);
            }}
          >
            <i className="fas fa-plus"></i>Save to playlist
          </li>
        </ul>
      )}
    </div>
  );
};

export { VideoCard };

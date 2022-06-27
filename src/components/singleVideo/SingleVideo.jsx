import { useEffect } from "react";
import { useAuth, useHistory } from "../../contexts";
import { useVideoHandlers } from "../../custom-hooks";
import "./singleVideo.css";

const SingleVideo = ({ video }) => {
  const {
    youtubeID,
    title,
    categoryName,
    views,
    uploadedDate,
    creator,
    creatorLogo,
  } = video;

  const {
    authState: { isUserLoggedIn },
  } = useAuth();

  const { addToHistoryServerCall } = useHistory();

  const {
    likeHandler,
    playlistHandler,
    watchLaterHandler,
    isVideoLiked,
    isVideoInWatchLater,
  } = useVideoHandlers(video);

  useEffect(() => {
    if (youtubeID && isUserLoggedIn) {
      addToHistoryServerCall(video);
    }
  }, [youtubeID]);

  return (
    <div className="d-flex col gap-2">
      <div className="player__wrapper ">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeID}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
        ></iframe>
      </div>
      <div className="video__content">
        <div className="d-flex space-bw align-center wrap gap-2">
          <div className="d-flex col gap-1">
            <span className="txt-2xl txt-black ">{title}</span>
            <span className="txt-xxl txt-bold ">{views}</span>
            <span className="txt-xxl txt-bold ">
              {new Date(uploadedDate).toDateString().slice(4)}
            </span>
          </div>
          <ul className="video__options d-flex gap-2">
            <li
              className="d-flex align-center cursor-ptr"
              onClick={likeHandler}
            >
              <i className={`${isVideoLiked ? "fas" : "far"} fa-thumbs-up`}></i>
              <span className="txt-bold">Like</span>
            </li>
            <li
              className="d-flex align-center cursor-ptr"
              onClick={watchLaterHandler}
            >
              <i
                className={`${isVideoInWatchLater ? "fas" : "far"} fa-clock `}
              ></i>
              <span className="txt-bold">Watch Later</span>
            </li>
            <li
              className="d-flex align-center cursor-ptr"
              onClick={playlistHandler}
            >
              <i className="fas fa-bookmark"></i>
              <span className="txt-bold">Save</span>
            </li>
          </ul>
        </div>
        <div className="Video__content--footer d-flex align-center my-1 gap-1">
          <img
            className="avatar-sm rounded-full"
            src={creatorLogo}
            alt={`${creator} Logo`}
          />
          <span className="txt-xxl txt-bold">{creator}</span>
        </div>
      </div>
    </div>
  );
};

export { SingleVideo };

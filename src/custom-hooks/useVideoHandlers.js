import {
  useAuth,
  useLikes,
  useWatchLater,
  useModal,
  usePlaylists,
  useHistory,
} from "../contexts";
import { isVideoInArray } from "../utils";

const useVideoHandlers = (video) => {
  const {
    authState: { isUserLoggedIn },
  } = useAuth();

  const { likes, addToLikesServerCall, removeFromLikesServerCall } = useLikes();
  const {
    watchLater,
    addToWatchLaterServerCall,
    removeFromWatchLaterServerCall,
  } = useWatchLater();

  const { history, removeFromHistoryServerCall } = useHistory();
  const { setShowModal } = useModal();

  const { setvideoToAddInPlaylist } = usePlaylists();

  const isVideoLiked = isVideoInArray(likes, video);
  const isVideoInWatchLater = isVideoInArray(watchLater, video);
  const isVideoInHistory = isVideoInArray(history, video);

  const watchLaterHandler = () => {
    isUserLoggedIn
      ? isVideoInWatchLater
        ? removeFromWatchLaterServerCall(video)
        : addToWatchLaterServerCall(video)
      : navigate("/login");
  };

  const likeHandler = () => {
    isUserLoggedIn
      ? isVideoLiked
        ? removeFromLikesServerCall(video)
        : addToLikesServerCall(video)
      : navigate("/login");
  };

  const playlistHandler = () => {
    if (isUserLoggedIn) {
      setvideoToAddInPlaylist(video);
      setShowModal(true);
    } else {
      navigate("/login");
    }
  };

  const historyHandler = () => {
    isUserLoggedIn
      ? isVideoInHistory
        ? removeFromHistoryServerCall(video)
        : ""
      : navigate("/login");
  };

  return {
    likeHandler,
    playlistHandler,
    watchLaterHandler,
    historyHandler,
    isVideoLiked,
    isVideoInWatchLater,
    isVideoInHistory,
  };
};

export { useVideoHandlers };

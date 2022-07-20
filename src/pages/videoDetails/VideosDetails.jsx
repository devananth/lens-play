import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import "./videoDetails.css";
import { useDocumentTitle, useVideoHandlers } from "../../custom-hooks";
import { Drawer, Loader, VideoCard, SingleVideo } from "../../components";
import { useVideos } from "../../contexts";

const initialVideoState = {
  _id: "",
  youtubeID: "",
  title: "",
  categoryName: "",
  creator: "",
  creatorLogo: "",
  thumbnail: "",
  description: "d",
  uploadedDate: "",
  views: "",
};

const VideoDetails = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const {
    videoState: { videos },
    loader,
  } = useVideos();

  const [currentVideo, setCurrentVideo] = useState(initialVideoState);

  useEffect(() => {
    const video = videos.find((video) => video.youtubeID == videoId);
    setCurrentVideo(video || initialVideoState);
  }, [videos, videoId]);

  const {
    youtubeID,
    title,
    categoryName,
    views,
    uploadedDate,
    creator,
    creatorLogo,
  } = currentVideo;

  const {
    likeHandler,
    playlistHandler,
    watchLaterHandler,
    isVideoLiked,
    isVideoInWatchLater,
  } = useVideoHandlers(currentVideo);

  const relatedVideos = videos.filter(
    (video) =>
      video.categoryName === categoryName && video.youtubeID !== youtubeID
  );

  useDocumentTitle(title);

  return (
    <main className="main__container">
      <Drawer />
      <section className="main__content">
        <div className="grid-70-30 m-1">
          {loader ? (
            <Loader />
          ) : (
            <>
              <SingleVideo video={currentVideo} />
              <div className="mx-1">
                <span className="txt-bold">Related videos</span>
                <div className="related__videos__container m-1d">
                  {relatedVideos &&
                    relatedVideos.map((video) => (
                      <VideoCard key={video._id} {...video} />
                    ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export { VideoDetails };

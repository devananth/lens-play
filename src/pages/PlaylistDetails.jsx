import { useDocumentTitle } from "../custom-hooks";
import { Drawer, VideoCard } from "../components";
import { usePlaylists } from "../contexts";
import { PlaylistCard } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const PlaylistDetails = () => {
  useDocumentTitle("Playlist | Lens-Play");

  const { playlists, deleteEntirePlaylist, removeVideoFromPlaylist } =
    usePlaylists();

  const { id } = useParams();

  const navigate = useNavigate();

  const currentPlaylist = playlists.find((playlist) => playlist._id === id);

  const { title, videos } = currentPlaylist ?? { title: "", videos: [] };

  const deleteHandler = () => {
    console.log(currentPlaylist);
    currentPlaylist?.videos.forEach((video) =>
      removeVideoFromPlaylist(currentPlaylist, video)
    );
    navigate("/playlists");
  };

  // if (currentPlaylist === undefined) {
  //   navigate("/");
  // }

  return (
    <>
      <main className="main__container">
        <Drawer />
        <section className="main__content">
          <div className="d-flex space-bw align-center m-1 main__section--header">
            <h5 className="txt-bold">{title}</h5>
            <button className="btn btn-secondary" onClick={deleteHandler}>
              Delete All
            </button>
          </div>
          <div className="grid-autofill-layout">
            {videos.length > 0 ? (
              videos.map((video) => <VideoCard key={video._id} {...video} />)
            ) : (
              <h4>No videos found ...</h4>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export { PlaylistDetails };

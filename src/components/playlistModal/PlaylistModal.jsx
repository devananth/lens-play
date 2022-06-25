import { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { useAuth, useModal, usePlaylists, useWatchLater } from "../../contexts";
import { isVideoInArray } from "../../utils";
import "./playlistModal.css";

const PlaylistModal = () => {
  const [showPlaylistForm, setShowPlaylistForm] = useState(false);
  const [playlistTitle, setPlaylistTitle] = useState("");

  const { setShowModal } = useModal();
  const {
    playlists,
    createPlaylist,
    videoToAddInPlaylist,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
  } = usePlaylists();

  const {
    authState: { isUserLoggedIn },
  } = useAuth();

  const navigate = useNavigate();

  const playlistHandler = (event) => {
    event.preventDefault();
    if (isUserLoggedIn) {
      createPlaylist({
        title: playlistTitle,
        description: "Personal Playlist",
      });
      setPlaylistTitle("");
      setShowPlaylistForm(false);
    } else {
      navigate("/login");
    }
  };

  const playlistCheckboxHandler = (playlist, isInPlaylist) => {
    if (!isInPlaylist) {
      addVideoToPlaylist(playlist, videoToAddInPlaylist);
    } else {
      removeVideoFromPlaylist(playlist, videoToAddInPlaylist);
    }
  };

  return ReactDOM.createPortal(
    <div className="modal__wrapper">
      <div className="modal__content">
        <div className="modal__header d-flex pb-sm">
          <span>Select the playlists</span>
          <span className="ml-auto" onClick={() => setShowModal(false)}>
            <i className="fas fa-times"></i>
          </span>
        </div>
        <div className="modal__body pb-sm">
          {/* TODO : Add watch later playlist */}
          {playlists && playlists.length === 0 ? (
            <span>No playlists found.. </span>
          ) : (
            playlists.map((playlist) => {
              const isInPlaylist = isVideoInArray(
                playlist.videos,
                videoToAddInPlaylist
              );
              const { _id, title } = playlist;
              return (
                <div key={_id} className="pb-sm">
                  <label className="d-flex gap-2 align-center ">
                    <input
                      id={_id}
                      type="checkbox"
                      onChange={() =>
                        playlistCheckboxHandler(playlist, isInPlaylist)
                      }
                      checked={isInPlaylist}
                    />
                    {title}
                  </label>
                </div>
              );
            })
          )}
        </div>
        <div className="modal__footer pb-sm">
          {!showPlaylistForm ? (
            <button
              className="btn btn-primary txt-bold"
              onClick={() => setShowPlaylistForm(true)}
            >
              <i className="fa fa-plus"></i>
              <span>Create new playlist</span>
            </button>
          ) : (
            <>
              <form onSubmit={playlistHandler}>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    placeholder="Enter playlist name"
                    className="form-input"
                    required
                    value={playlistTitle}
                    onChange={(e) => setPlaylistTitle(e.target.value)}
                  />
                </div>
                <button className="btn btn-primary txt-bold">Create</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export { PlaylistModal };

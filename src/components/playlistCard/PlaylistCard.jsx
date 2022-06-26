import { useNavigate, Link } from "react-router-dom";
import { usePlaylists } from "../../contexts";
import "./playlistCard.css";

const PlaylistCard = ({ playlist }) => {
  const { _id, title, videos } = playlist;

  const { deleteEntirePlaylist } = usePlaylists();

  const navigate = useNavigate();

  return (
    <div className="playlist__card__wrapper">
      <Link
        to={`/playlists/${_id}`}
        className="playlist__card__img__container cursor-ptr"
      >
        <img
          className="img-responsive"
          src={videos[0].thumbnail}
          alt={videos[0].title}
        />

        <span className="playlist__card__overlay txt-bold txt-4xl">
          {videos.length}
        </span>
      </Link>
      <div className="playlist__card__footer d-flex p-sm">
        <span className="txt-bold txt-xxl">{title}</span>
        <i
          className="fas fa-trash-alt ml-auto cursor-ptr"
          onClick={() => deleteEntirePlaylist(playlist)}
        ></i>
      </div>
    </div>
  );
};

export { PlaylistCard };

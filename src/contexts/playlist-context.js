import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useAxios } from "../custom-hooks";
import { useAuth } from "./auth-context";

const PlaylistContext = createContext([]);

const PlaylistProvider = ({ children }) => {
  const [videoToAddInPlaylist, setvideoToAddInPlaylist] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [toastMsg, setToastMsg] = useState(null);
  const [propertyToGet, setPropertyToGet] = useState("playlists");

  const { response, loader, callAPI } = useAxios();

  const {
    authState: { isUserLoggedIn, authToken },
  } = useAuth();

  useEffect(() => {
    if (isUserLoggedIn) {
      callAPI({
        url: "/api/user/playlists",
        method: "get",
        headers: {
          authorization: authToken,
        },
      });
    }
  }, [isUserLoggedIn]);

  useEffect(() => {
    if (response) {
      if (propertyToGet === "playlists") {
        let updatedPlaylists = response?.data?.playlists;

        if (updatedPlaylists.length > playlists.length) {
          addVideoToPlaylist(
            updatedPlaylists[updatedPlaylists.length - 1],
            videoToAddInPlaylist
          );
        }
        setPlaylists(updatedPlaylists);
      } else {
        let updatedPlaylist = response?.data?.playlist;
        let updatedPlaylists = playlists.map((playlist) =>
          playlist._id === updatedPlaylist._id ? updatedPlaylist : playlist
        );
        setPlaylists(updatedPlaylists);
      }
      toast.success(toastMsg);
    }
  }, [response]);

  const createPlaylist = (playlist) => {
    setToastMsg("Created playlist successfully");
    setPropertyToGet("playlists");
    callAPI({
      url: "/api/user/playlists",
      method: "post",
      headers: {
        authorization: authToken,
      },
      data: {
        playlist,
      },
    });
  };

  const deleteEntirePlaylist = (playlist) => {
    setToastMsg(`Removed ${playlist.title} playlist successfully`);
    setPropertyToGet("playlists");
    callAPI({
      url: `/api/user/playlists/${playlist._id}`,
      method: "delete",
      headers: {
        authorization: authToken,
      },
    });
  };

  const addVideoToPlaylist = (playlist, video) => {
    setToastMsg(`Added to ${playlist.title} successfully`);
    setPropertyToGet("playlist");
    callAPI({
      url: `/api/user/playlists/${playlist._id}`,
      method: "post",
      headers: {
        authorization: authToken,
      },
      data: {
        video,
      },
    });
  };

  const removeVideoFromPlaylist = (playlist, video) => {
    setToastMsg(`Removed from ${playlist.title} successfully`);
    setPropertyToGet("playlist");
    callAPI({
      url: `/api/user/playlists/${playlist._id}/${video._id}`,
      method: "delete",
      headers: {
        authorization: authToken,
      },
    });
  };

  const value = {
    playlists,
    videoToAddInPlaylist,
    setvideoToAddInPlaylist,
    createPlaylist,
    deleteEntirePlaylist,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
  };
  const { Provider } = PlaylistContext;

  return <Provider value={value}>{children}</Provider>;
};

const usePlaylists = () => useContext(PlaylistContext);

export { usePlaylists, PlaylistProvider };

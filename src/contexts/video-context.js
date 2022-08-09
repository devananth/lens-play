import { createContext, useContext, useEffect, useState } from "react";
import { videos } from "../backend/db/videos";
import { useAxios } from "../custom-hooks";

const initialVidoeState = {
  videos: [],
  sortBy: "",
  searchBy: "",
};

const VideoContext = createContext(initialVidoeState);

const VideoProvider = ({ children }) => {
  const { response, loader, callAPI } = useAxios();

  const [videoState, setVideoState] = useState(initialVidoeState);

  useEffect(() => {
    callAPI({
      url: "/api/videos",
      method: "get",
    });
  }, []);

  useEffect(() => {
    if (response) {
      setVideoState((prevState) => ({
        ...prevState,
        videos: response?.data?.videos,
      }));
    }
  }, [response]);

  const { Provider } = VideoContext;

  return (
    <Provider value={{ videoState, loader, setVideoState }}>
      {children}
    </Provider>
  );
};

const useVideos = () => useContext(VideoContext);

export { useVideos, VideoProvider };

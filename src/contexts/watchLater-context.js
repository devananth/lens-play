import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAxios } from "../custom-hooks";
import { useAuth } from "./auth-context";

const initialWatchLaterContextState = {
  watchLater: [],
};

const WatchLaterContext = createContext(initialWatchLaterContextState);

const WatchLaterProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState([]);
  const { loader, response, error, callAPI } = useAxios();

  const {
    authState: { isUserLoggedIn, authToken },
  } = useAuth();

  useEffect(() => {
    if (isUserLoggedIn) {
      callAPI({
        url: "/api/user/watchlater",
        method: "get",
        headers: {
          authorization: authToken,
        },
      });
    }
  }, [isUserLoggedIn]);

  useEffect(() => {
    if (response) {
      const updatedWatchLater = response?.data?.watchlater;

      if (updatedWatchLater.length > watchLater.length) {
        toast.success("Added to watch Later");
      } else if (updatedWatchLater.length < watchLater.length) {
        toast.success("Removed from watch later");
      }
      setWatchLater(() => updatedWatchLater);
    }
  }, [response]);

  const addToWatchLaterServerCall = (video) => {
    callAPI({
      url: "/api/user/watchlater",
      method: "post",
      headers: {
        authorization: authToken,
      },
      data: {
        video,
      },
    });
  };

  const removeFromWatchLaterServerCall = (video) => {
    callAPI({
      url: `/api/user/watchlater/${video._id}`,
      method: "delete",
      headers: {
        authorization: authToken,
      },
    });
  };

  const { Provider } = WatchLaterContext;

  const value = {
    watchLater,
    addToWatchLaterServerCall,
    removeFromWatchLaterServerCall,
  };

  return <Provider value={value}>{children}</Provider>;
};

const useWatchLater = () => useContext(WatchLaterContext);

export { useWatchLater, WatchLaterProvider };

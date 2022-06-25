import { createContext, useContext, useState, useEffect } from "react";
import { useAxios } from "../custom-hooks";
import { useAuth } from "../contexts";
import { toast } from "react-toastify";

const LikeContext = createContext(null);

const LikesProvider = ({ children }) => {
  const [likes, setLikes] = useState([]);

  const { loader, response, error, callAPI } = useAxios();

  const {
    authState: { isUserLoggedIn, authToken },
  } = useAuth();

  useEffect(() => {
    if (isUserLoggedIn) {
      callAPI({
        url: "/api/user/likes",
        method: "get",
        headers: {
          authorization: authToken,
        },
      });
    }
  }, [isUserLoggedIn]);

  useEffect(() => {
    if (response) {
      const updatedLikes = response?.data?.likes;

      if (updatedLikes.length > likes.length) {
        toast.success("Added to you liked videos");
      } else if (updatedLikes.length < likes.length) {
        toast.success("Removed from your liked videos");
      }
      setLikes(() => updatedLikes);
    }
  }, [response]);

  const addToLikesServerCall = (video) => {
    callAPI({
      url: "/api/user/likes",
      method: "post",
      headers: {
        authorization: authToken,
      },
      data: {
        video,
      },
    });
  };

  const removeFromLikesServerCall = (video) => {
    callAPI({
      url: `/api/user/likes/${video._id}`,
      method: "delete",
      headers: {
        authorization: authToken,
      },
    });
  };

  const value = { likes, addToLikesServerCall, removeFromLikesServerCall };

  return <LikeContext.Provider value={value}>{children}</LikeContext.Provider>;
};

const useLikes = () => useContext(LikeContext);

export { useLikes, LikesProvider };

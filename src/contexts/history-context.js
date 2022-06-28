import { createContext, useContext, useState, useEffect } from "react";
import { useAxios } from "../custom-hooks";
import { useAuth } from "../contexts";
import { toast } from "react-toastify";

const HistoryContext = createContext(null);

const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const { loader, response, error, callAPI } = useAxios();

  const {
    authState: { isUserLoggedIn, authToken },
  } = useAuth();

  useEffect(() => {
    if (isUserLoggedIn) {
      callAPI({
        url: "/api/user/history",
        method: "get",
        headers: {
          authorization: authToken,
        },
      });
    }
  }, [isUserLoggedIn]);

  useEffect(() => {
    if (response) {
      const updatedLikes = response?.data?.history ?? [];
      setHistory(() => updatedLikes);
    }
  }, [response]);

  const addToHistoryServerCall = (video) => {
    callAPI({
      url: "/api/user/history",
      method: "post",
      headers: {
        authorization: authToken,
      },
      data: {
        video,
      },
    });
  };

  const removeFromHistoryServerCall = (video) => {
    callAPI({
      url: `/api/user/history/${video._id}`,
      method: "delete",
      headers: {
        authorization: authToken,
      },
    });
  };

  const removeEntireHistoryServerCall = () => {
    callAPI({
      url: `/api/user/history/all`,
      method: "delete",
      headers: {
        authorization: authToken,
      },
    });
  };

  const value = {
    history,
    addToHistoryServerCall,
    removeFromHistoryServerCall,
    removeEntireHistoryServerCall,
  };

  return (
    <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { useHistory, HistoryProvider };

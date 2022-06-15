import axios from "axios";
import { useState } from "react";

const useAxios = () => {
  const [loader, setLoader] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const callAPI = async (params) => {
    setLoader(true);
    try {
      const apiResponse = await axios.request(params);
      setResponse(apiResponse);
    } catch (error) {
      console.log(error);
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  return { loader, response, error, callAPI };
};

export { useAxios };

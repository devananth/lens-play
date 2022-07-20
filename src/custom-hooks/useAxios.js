import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const useAxios = () => {
  const [loader, setLoader] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const callAPI = async (params) => {
    setLoader(true);
    try {
      const apiResponse = await axios.request(params);

      if (apiResponse?.status === 200 || apiResponse?.status === 201) {
        setResponse(apiResponse);
      } else {
        toast.error("Something went worng !");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  return { loader, response, error, callAPI };
};

export { useAxios };

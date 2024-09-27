import { useState } from "react";
import { getServerData, postServerData } from "../helper/Helper";

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data, getOrPostMethod) => {
    setLoading(true);
    try {
      if (getOrPostMethod !== "Singup") {
        await getServerData(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/api/loginSingup`,
          (data) => {
            setResponse({
              data: data,
              type: true,
              message: `Thanks for your submission ${data.name}, we will get back to you shortly!`,
            });
          },
          data
        );
      } else {
        postServerData(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/api/loginSingup`,
          (data) => {
            setResponse({
              data: data,
              type: true,
              message: `Thanks for your submission ${data.name}, we will get back to you shortly!`,
            });
          },
          data
        );
      }
    } catch (error) {
      setResponse({
        type: false,
        message: "Something went wrong, please try again later!",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;

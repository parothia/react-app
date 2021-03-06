import axios from "axios";
import React from "react";
import Button from "../../components/Button";

function Crypto() {
  const checkStatus = "https://api.coingecko.com/api/v3/ping";
  const callApi = () => {
    axios
      .get(checkStatus)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Button btnName="Sign in" testId="sign-in" onClick={callApi} />
    </div>
  );
}

export default Crypto;

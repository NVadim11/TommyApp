import { useContext, useEffect } from "react";
import { useTwitterCallbackMutation } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helper/contexts";

const Twitter = () => {
  const authContext = useContext(AuthContext);
  const [request] = useTwitterCallbackMutation();
  const params = new URLSearchParams(window.location.search);
  const navigate = useNavigate();

  const auth = async () => {
    try {
      const oauth_token = params.get("oauth_token");
      const oauth_verifier = params.get("oauth_verifier");
      if (oauth_token && oauth_verifier) {
        const res = await request({
          oauth_token,
          oauth_verifier,
          wallet: authContext.wallet_address,
        }).unwrap();
        if (res.status === 201) {
          navigate("/", { state: { auth: true } });
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(authContext)
    if (authContext && authContext?.wallet_address) {
      auth();
    }
  }, [authContext]);
  return <>fflflff</>;
};

export default Twitter;

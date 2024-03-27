import { Typography } from "@mui/material"
import { useContext, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { useTwitterAuthMutation } from "../../../../../services/auth"
import { AuthContext } from "../../../../helper/contexts"
import cat from "../../../decoration/catForm.png"
import check from "../../../decoration/check.svg"
import discord from "../../../decoration/discord.svg"
import catMob from "../../../decoration/mobCat.png"
import twitter from "../../../decoration/twitter.svg"

const Steps = ({ isCodeValid }) => {
  const [requestAuth] = useTwitterAuthMutation();
  const authContext = useContext(AuthContext);
  const location = useLocation();
  const formRef = useRef(null);

  const executeScroll = () => formRef.current.scrollIntoView();

  const loginTwitter = async () => {
    try {
      const res = await requestAuth().unwrap();
      window.location.href = `https://api.twitter.com/oauth/authorize?oauth_token=${res.token}`;
    } catch (e) {
      console.log(e);
    }
  };

  // const loginDiscord = async () => {
  //   window.location.href = `https://discord.com/oauth2/authorize?client_id=1215997115390496918&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdiscord%2Fcallback&scope=identify+guilds+guilds.join+email+connections`;
  // };

  useEffect(() => {
    if (location.state && location.state?.auth) {
      executeScroll();
      window.history.replaceState({}, "");
    }
  }, []);

  return (
    <div className="steps__container" ref={formRef}>
      <div className="steps__form-container">
        <Typography variant="body2">You're almost there</Typography>
        <Typography variant="h4" sx={{ mb: "90px", mt: "15px" }}>
          To claim your airdrop:
        </Typography>
        <div className="steps__form-item">
          <div>
            <span className="number">1</span>
            <div>
              <Typography variant="h5">Get invite code</Typography>
              {isCodeValid && <img src={check} width="35px" height="35px" />}
            </div>
          </div>
        </div>
        <div className="steps__form-item">
          <div>
            <span className="number">2</span>
            <div>
              <Typography variant="h5">
                Follow @Tim_The_Cat on Twitter
              </Typography>
              {authContext.twitter === 1 && (
                <img src={check} width="35px" height="35px" />
              )}
            </div>
          </div>
          {authContext.twitter != 1 && (
            <button className="steps__button" onClick={loginTwitter}>
              <Typography variant="caption" sx={{ mr: "10px" }}>
                Connect
              </Typography>
              <img src={twitter} width={32} height={30} />
            </button>
          )}
        </div>
        <div className="steps__form-item">
          <div>
            <span className="number">3</span>
            <div>
              <Typography variant="h5">Join Tim The Cat Discord</Typography>
              {authContext.discord === 1 && (
                <img src={check} width="35px" height="35px" />
              )}
            </div>
          </div>
          {authContext.discord != 1 && (
            <button className="steps__button" onClick={loginDiscord}>
              <Typography variant="caption" sx={{ mr: "10px" }}>
                Connect
              </Typography>
              <img src={discord} width={32} height={30} />
            </button>
          )}
        </div>
        <div className="steps__form-item">
          <div>
            <span className="number">4</span>
            <Typography variant="h5">Bridge & Earn</Typography>
          </div>
          {isCodeValid ? <img src={check} width="35px" height="35px" /> : <></>}
        </div>
      </div>
      <picture>
        <source media="(max-width: 900px)" srcSet={catMob} />
        <source media="(min-width: 900px)" srcSet={cat} />
        <img src={cat} className="cat_img" />
      </picture>
    </div>
  );
};

export default Steps;

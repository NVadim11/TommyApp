import { Typography, Button } from "@mui/material";
import check from "../../../decoration/check.svg";
import twitter from "../../../decoration/twitter.svg";
import discord from "../../../decoration/discord.svg";
import cat from "../../../decoration/catForm.png";
import { useTwitterAuthMutation } from "../../../../../services/auth";

const Steps = ({ isCodeValid }) => {
  const [requestAuth, response] = useTwitterAuthMutation();

  const loginTwitter = async () => {
    try {
      const res = await requestAuth().unwrap();
      window.open(`https://api.twitter.com/oauth/authorize?oauth_token=${res.token}`)
    } catch (e) {
      console.log(e)
    }
  };

  const loginDiscord = async () => {
    window.open(`https://discord.com/oauth2/authorize?client_id=1215997115390496918&response_type=code&redirect_uri=https%3A%2F%2F28c9-78-26-198-199.ngrok-free.app%2Fauth%2Fdiscord%2Fcallback&scope=identify+guilds+guilds.join+email+connections`)
  };

  return (
    <div className="steps__container">
      <div className="steps__form-container">
        <Typography variant="body2">You're almost there</Typography>
        <Typography variant="h4" sx={{mb: "90px", mt: "15px"}}>To claim your airdrop:</Typography>
        <div className="steps__form-item">
          <div>
            <span className="number">1</span>
            <Typography variant="h5">Get invite code</Typography>
          </div>
          {isCodeValid ? <img src={check} width="35px" height="35px" /> : <></>}
        </div>
        <div className="steps__form-item">
          <div>
            <span className="number">2</span>
            <Typography variant="h5">Follow @crypto_tom on Twitter</Typography>
          </div>
          <button className="steps__button" onClick={loginTwitter}>
            <Typography variant="caption" sx={{mr: "10px"}}>Connect</Typography>
            <img src={twitter} width={32} height={30}/>
          </button>
        </div>
        <div className="steps__form-item">
          <div>
            <span className="number">3</span>
            <Typography variant="h5">Join Crypto Tom Discord</Typography>
          </div>
          <button className="steps__button" onClick={loginDiscord}>
            <Typography variant="caption" sx={{mr: "10px"}}>Connect</Typography>
            <img src={discord} width={32} height={30}/>
          </button>
        </div>
        <div className="steps__form-item">
          <div>
            <span className="number">4</span>
            <Typography variant="h5">Bridge & Earn</Typography>
          </div>
          {isCodeValid ? <img src={check} width="35px" height="35px" /> : <></>}
        </div>
      </div>
      <img src={cat} className="cat_img"/>
    </div>
  )
}

export default Steps;
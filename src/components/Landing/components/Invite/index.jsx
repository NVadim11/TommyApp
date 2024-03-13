import { Box, Typography } from "@mui/material";
import DefaultContainer from "../default/Container";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InviteItem from "./InviteItem";

import people from "../../decoration/people-icon.svg";
import envelope from "../../decoration/invite/envelope.svg";
import share from "../../decoration/invite/link.svg";
import money from "../../decoration/invite/money.svg";
import copy from "../../decoration/invite/copy.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../helper/contexts";
import { useGenerateCodeMutation } from "../../../../services/phpService";

const Invite = () => {
  const authContext = useContext(AuthContext);
  const [generateCode] = useGenerateCodeMutation();
  const [code, setCode] = useState("");

  useEffect(() => {
    if (authContext && authContext.referral_code) {
      setCode(authContext.referral_code);
    }
  }, [authContext]);

  const copyCode = async () => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(code);
    } else {
      return document.execCommand('copy', true, code);
    }
  };

  const copyLink = async () => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(`${window.location.href}${code}`);
    } else {
      return document.execCommand('copy', true, `${window.location.href}${code}`);
    }
  }

  const generateCodeCallback = async () => {
    try {
      if(authContext.wallet_address){
        const res = await generateCode(authContext.wallet_address).unwrap();
        res && res.code && setCode(res.code);
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <DefaultContainer>
      <Box
        className="invite__wrapper"
        sx={{
          mb: {
            xs: "70px",
            lg: "170px",
          },
        }}
      >
        <Box className="invite__header">
          <Typography
            data-aos="fade-right"
            variant="h2"
            maxWidth={500}
            width="100%"
          >
            Invite friends. <br /> Earn together
          </Typography>
          <Box className="invite__friends" data-aos="fade-left">
            <Typography variant="h6" sx={{ fontWeight: "medium" }}>
              Referred Friends:
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src={people} />
              <Typography variant="h3" sx={{ fontWeight: "600" }}>
                200
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography
          data-aos="fade-right"
          variant="h3"
          sx={{ mb: "30px", mt: "80px" }}
        >
          How it Works
        </Typography>
        <Box className="invite__grid">
          <Box className="invite__item" data-aos="fade-right">
            <List className="invite-list">
              <InviteItem
                icon={envelope}
                title="Get referral link"
                text="Register and get your unique referral link and code"
              />
              <InviteItem
                icon={share}
                title="Invite your friends"
                text="Invite your friends to register via your link or code"
              />
              <InviteItem
                icon={money}
                title="Earn crypto together"
                text="You will receive up to $2,000 USD when your friends stake CRO on Crypto.com Exchange"
              />
            </List>
          </Box>
          <Box className="invite__item" data-aos="fade-left">
            <Box className="invite__item-box">
              <Box className="invite__item-group">
                <Typography variant="body2" sx={{ mb: "15px" }}>
                  Your referral code
                </Typography>
                <Typography
                  className="invite__input"
                  variant="body2"
                  sx={{ mb: "15px" }}
                >
                  {code.length ? code : "Code"}
                  <IconButton
                    onClick={() => copyCode()}
                    aria-label="copy"
                    color="primary"
                    sx={{
                      transition: "background-color 0.3s",
                      "&:hover": {
                        backgroundColor: "#292F4F",
                      },
                    }}
                  >
                    <img src={copy} alt="Copy" />
                  </IconButton>
                </Typography>
              </Box>
              <Box className="invite__item-group">
                <Typography variant="body2" sx={{ mb: "15px" }}>
                  Your referral link
                </Typography>
                <Typography
                  className="invite__input"
                  variant="body2"
                  sx={{ mb: "15px" }}
                >
                  {code.length ? `${window.location.href}${code}` : "link"}
                  <IconButton
                  onClick={() => copyLink()}
                    aria-label="copy"
                    color="primary"
                    sx={{
                      transition: "background-color 0.3s",
                      "&:hover": {
                        backgroundColor: "#292F4F",
                      },
                    }}
                  >
                    <img src={copy} alt="Copy" />
                  </IconButton>
                </Typography>
              </Box>
              <Box className="invite__item-group">
                <Button
                onClick={generateCodeCallback}
                  sx={{
                    color: "white",
                    textTransform: "capitalize",
                    display: "block",
                    ml: "auto",
                  }}
                >
                  <Typography variant="h5" fontWeight={600}>
                    Generate
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </DefaultContainer>
  );
};

export default Invite;

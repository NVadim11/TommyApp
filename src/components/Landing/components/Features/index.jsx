import { Box, Paper, Typography } from "@mui/material";
import DefaultContainer from "../default/Container";

import bot from "./img/bot.svg";
import power from "./img/power.svg";
import tokens from "./img/tokens.svg";
import star from "../../decoration/star.svg";
import ellipse from "../../decoration/ellipse.svg";

const Features = () => {
  return (
    <DefaultContainer>
      <Box
        className="features__wrapper"
        sx={{
          mb: {
            xs: "70px",
            lg: "170px",
          },
        }}
      >
        <Typography variant="h2" textAlign="center" width="100%">
          Features
        </Typography>

        <img className="dec dec-star" src={star} />
        <Box
          sx={{
            mt: "50px",
          }}
          className="feauters-stack"
        >
          <Paper className="feature" data-aos="zoom-in">
            <Typography variant="h3" sx={{ width: "100%" }}>
              Play Game
            </Typography>
            <Typography
              variant="body2"
              sx={{ width: "100%", mt: "28px", mb: "30px" }}
            >
              Solana's first public BuyBot on Telegram. Promoting
              cross-pollination and offering free exposure through "Talking Tom
              Trending". As adoption grows, a small fee for trending will be
              introduced, with a chance for free inclusion. Generated revenue
              feeds into the Treat Jar (Treasury) for transparency, contributing
              to $Talking Tom`s growth.
            </Typography>
            <img src={bot} width={76} height={76} />
          </Paper>
          <Paper className="feature" data-aos="zoom-in">
            <Typography variant="h3" sx={{ width: "100%" }}>
              Talking Tom Staking
            </Typography>
            <Typography variant="body2" sx={{ width: "100%", mt: "20px" }}>
              Unlock the full potential of your $Talking Tom investment with our
              Staking Pool Utility. Seamlessly stake your coins, earn
              sustainable rewards, and contribute to Solana's decentralization.
              User-friendly and secure, it's the hassle-free way to maximize
              your crypto returns.
            </Typography>
            <img src={tokens} width={76} height={76} />
          </Paper>
          <Paper className="feature" data-aos="zoom-in">
            <Typography variant="h3" sx={{ width: "100%" }}>
              Further Utilities
            </Typography>
            <Typography variant="body2" sx={{ width: "100%", mt: "20px" }}>
              $Talking Tom is set to transform the Solana ecosystem, delivering
              essential utilities for the evolving needs of users. Our
              commitment ensures a dynamic contribution to Solana's long-term
              growth, serving hundreds of thousands of users.
            </Typography>
            <img src={power} width={76} height={76} />
          </Paper>
        </Box>
        <img className="dec-ellipse" src={ellipse} />
      </Box>
    </DefaultContainer>
  );
};

export default Features;

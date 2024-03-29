import DefaultContainer from "../default/Container"

import { Box, Link, Typography } from "@mui/material"

import cat from "../../decoration/cat.png"
import logo from "../../decoration/logo.svg"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box className="footer__wrapper">
      <DefaultContainer
        padding={{ xl: "0 8.125rem", lg: "0 5rem", xs: "0 20px" }}
      >
        <Box className="footer__grid">
          <Box className="footer__logo">
            <img src={logo} alt="Crypto Tom" />
          </Box>
          <Box className="footer__socials">
            <Link
              aria-label="copy"
              color="primary"
              href="#"
              sx={{
                transition: "background-color 0.3s",
                width: "50px",
                height: "50px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #fff",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "50%",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "#292F4F",
                },
              }}
            >
              X
            </Link>
            <Link
              aria-label="copy"
              color="primary"
              href="#"
              sx={{
                transition: "background-color 0.3s",
                width: "50px",
                height: "50px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #fff",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "50%",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "#292F4F",
                },
              }}
            >
              TG
            </Link>
          </Box>
          <Box className="footer__text">
            <Typography variant="body2">
            Tim The Cat is more than just a cryptocurrency, it is also a way to
              connect with other dog meme lovers and make a difference in the
              world. Join the Tim The Cat movement today and help us make the
              world a more fun and inclusive place for everyone!
            </Typography>
          </Box>
          <Box className="footer__cat">
            <img src={cat} alt="Crypto Tommy" />
          </Box>
          <Box className="footer__copyright">
            <Typography
              variant="body2"
              sx={{ fontWeight: "400", opacity: "0.7" }}
            >
              © {year} Tim The Cat • All Rights Reserved
            </Typography>
          </Box>
        </Box>
      </DefaultContainer>
    </Box>
  );
};

export default Footer;

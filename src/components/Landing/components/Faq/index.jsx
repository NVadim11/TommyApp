import { Box, Typography } from "@mui/material";

import FaqAccordion from "./Accordion";
import DefaultContainer from "../default/Container";

import star from "../../decoration/star.svg";
import ellipse from "../../decoration/ellipse.svg";

const Faq = () => {
  return (
    <DefaultContainer padding={{ xl: "0 20rem", lg: "0 15rem", xs: "0 20px" }}>
      <Box className="faq__wrapper" sx={{ mb: "100px", pb: "70px" }}>
        <img className="dec dec-star" src={star} />

        <img className="dec dec-ellipse" src={ellipse} />
        <Typography
          variant="h2"
          textAlign="center"
          width="100%"
          zIndex={2}
          sx={{ mb: "40px", position: "relative" }}
        >
          FAQ
        </Typography>

        <FaqAccordion />
      </Box>
    </DefaultContainer>
  );
};

export default Faq;

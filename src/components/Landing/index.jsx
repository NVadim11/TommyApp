import { Container } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { Form, Quote, Features, Story, Invite, Swap, Tokenomics, Why, Faq } from "./components";
import "./index.scss";
import { useEffect, useState } from "react";

const Landing = () => {
  const [ref, setRef] = useState(false);
  useEffect(() => {
		AOS.init();
	}, [ref]);
  return (
    <Container maxWidth="100%" disableGutters>
      <Story />
      <Quote />
      <Features />
      <Form setRef={setRef}/>
      <Invite />
			<Swap />
			<Tokenomics />
			<Why />
			<Faq />
    </Container>
  );
};

export default Landing;

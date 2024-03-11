import DefaultContainer from "../default/Container";
import IconBox from "./IconBox";

import { Box, Typography } from "@mui/material";

import icon1 from "../../decoration/why/icon1.svg";
import icon2 from "../../decoration/why/icon2.svg";
import icon3 from "../../decoration/why/icon3.svg";
import icon4 from "../../decoration/why/icon4.svg";

const Why = () => {
	return (
		<DefaultContainer padding={{ xl: "0 15rem", lg: "0 10px", xs: "0 20px" }}>
			<Typography
				variant='h2'
				textAlign='center'
				width='100%'
				zIndex={2}
				sx={{ mb: "40px", position: "relative" }}>
				Why choose <br /> Talking Tom?
			</Typography>
			<Box
				className='why__wrapper'
				sx={{ mb: "170px" }}>
				<IconBox
					icon={icon1}
					animation={"fade-down"}>
					Talking Tom is a viral narrative based on Solana Co-Founder Raj Gokal’s pet dog,
					becoming a staple in the Solana memecoin space.
				</IconBox>
				<IconBox
					icon={icon2}
					animation={"fade-down"}>
					Talking Tom will be more than just a memecoin, featuring several unique use
					cases and utilities that are beneficial to the long term growth of the Solana
					Ecosystem.
				</IconBox>
				<IconBox
					icon={icon3}
					animation={"fade-up"}>
					The Talking Tom movement is like no other on the Solana blockchain, bringing dog
					lovers from all around the crypto space and uniting them into one.
				</IconBox>
				<IconBox
					icon={icon4}
					animation={"fade-up"}>
					With the Solana blockchain and coin making a huge return over the last few
					months, it’s time for Talking Tom to come in and set the standard for memecoins
					on Solana.
				</IconBox>
			</Box>
		</DefaultContainer>
	);
};

export default Why;

import { Grid, Typography } from "@mui/material";
import DefaultContainer from "../default/Container";

import quote from "./img/quote.png";

const Quote = () => {
	return (
		<DefaultContainer padding={{ lg: "0 15rem", md: "0 30px", xs: "0 20px" }}>
			<Grid
				data-aos='zoom-in'
				container
				spacing={0}
				sx={{
					m: "0 auto",
					mt: "36px",
					mb: "126px",
					p: { md: "50px 90px", xs: "20px 30px" },
					border: "3px solid #fff",
					borderRadius: "30px",
					width: "90%",
				}}>
				<Grid
					item
					md={2}
					xs={12}
					display='flex'
					justifyContent={"end"}
					alignItems={"end"}
					sx={{
						pr: { md: "40px" },
						mb: { xs: "40px", md: "0" },
					}}>
					<img src={quote} />
				</Grid>
				<Grid
					item
					md={10}
					xs={12}>
					<Typography variant='body1'>
						With Talking Tom, we have created a revolutionary digital currency that is
						designed for simplicity, security, and accessibility.
					</Typography>
					<Typography
						variant='body1'
						sx={{ mt: "20px" }}>
						Our goal is to provide a seamless crypto experience for everyone. Whether
						you are an experienced trader or a curious beginner, Talking Tom is here to
						meet your needs and assist you in exploring the world of digital currencies.
					</Typography>
				</Grid>
			</Grid>
		</DefaultContainer>
	);
};

export default Quote;

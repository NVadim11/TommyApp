import { Box, Typography } from "@mui/material";
import DefaultContainer from "../default/Container";

import swap from "../../decoration/swap.jpg";

const SwapBlock = () => {
	return (
		<DefaultContainer padding={{ lg: "0 15rem", md: "0 30px", xs: "0 20px" }}>
			<Box className='swap__wrapper'>
				<Box data-aos='fade-right'>
					<Typography
						fontWeight={700}
						variant='h2'
						lineHeight={1}
						textAlign={"center"}
						sx={{
							fontSize: {
								xs: "60px",
								lg: "100px",
							},
						}}>
						Swap to Get it!
						<Typography
							sx={{ mt: 2 }}
							variant='body2'
							textAlign='center'>
							Coming Soon
						</Typography>
					</Typography>
				</Box>
				<Box data-aos='fade-left'>
					<img
						src={swap}
						alt='Swap To Get It'
					/>
				</Box>
			</Box>
		</DefaultContainer>
	);
};

export default SwapBlock;

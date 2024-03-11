import { Container } from "@mui/material";

const DefaultContainer = ({ children, padding }) => {
	return (
		<Container
			sx={{
				width: { md: "95%", xs: "100%" },
				padding: padding || { lg: "0 8.125rem", md: "0 50px", xs: "0 20px" },
			}}
			maxWidth='xl'
			disableGutters>
			{children}
		</Container>
	);
};

export default DefaultContainer;

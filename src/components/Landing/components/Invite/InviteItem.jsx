import { Box, Typography, ListItem } from "@mui/material";

const InviteItem = ({ text, icon, title }) => {
	return (
		<ListItem
			className='invite-list__item'
			sx={{ display: "block", mb: "20px", pl: "83px" }}>
			<img
				className='invite__icon'
				src={icon}
				alt=''
			/>
			<Box>
				<Typography
					sx={{ display: "block" }}
					fontWeight={"600"}
					variant='h5'>
					{title}
				</Typography>
				<Typography
					sx={{ display: "block", mt: "10px" }}
					variant='body2'>
					{text}
				</Typography>
			</Box>
		</ListItem>
	);
};

export default InviteItem;

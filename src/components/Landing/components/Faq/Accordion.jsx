import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Box, Typography } from "@mui/material";

import { ReactComponent as ArrowIcon } from "../../decoration/arrow.svg";

import arrow from "../../decoration/arrow.svg";

const AccordionArrowIcon = () => {
	return (
		<Box
			sx={{
				border: "1px solid #fff",
				width: "35px",
				height: "35px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				borderRadius: "50%",
			}}>
			<img
				src={arrow}
				alt='expand'
				style={{ width: "24px", height: "24px" }}
			/>
		</Box>
	);
};

const FaqAccordion = () => {
	return (
		<div>
			<Accordion
				sx={{
					background: "rgba(0, 0, 0, 0.25)",
					border: "2px solid #FFFFFF",
					borderRadius: "20px",
					mb: 2,
					"&.MuiAccordion-root:first-of-type": {
						borderTopLeftRadius: "20px",
						borderTopRightRadius: "20px",
					},
					"&.MuiAccordion-root:last-of-type": {
						borderBottomLeftRadius: "20px",
						borderBottomRightRadius: "20px",
					},
				}}>
				<AccordionSummary
					expandIcon={<AccordionArrowIcon />}
					aria-controls='panel1-content'
					id='panel1-header'
					sx={{
						borderRadius: "20px",
						"&.Mui-expanded": {
							minHeight: "48px",
						},
						".MuiAccordionSummary-content": {
							margin: "20px 0",
							"&.Mui-expanded": {
								margin: "20px 0",
							},
						},
					}}>
					<Typography
						variant='h3'
						sx={{ color: "#FFFFFF", mr: "15px" }}>
						How do I Buy and Sell $TOM?
					</Typography>
				</AccordionSummary>
				<AccordionDetails
					sx={{
						color: "#FFFFFF",
						pb: "20px",
					}}>
					<Typography variant='h5'>
						The Talking Tom movement is like no other on the Solana blockchain, bringing
						dog lovers from all around the crypto space and uniting them into one.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{
					background: "rgba(0, 0, 0, 0.25)",
					border: "2px solid #FFFFFF",
					borderRadius: "20px",
					mb: 2,
					"&.MuiAccordion-root:first-of-type": {
						borderTopLeftRadius: "20px",
						borderTopRightRadius: "20px",
					},
					"&.MuiAccordion-root:last-of-type": {
						borderBottomLeftRadius: "20px",
						borderBottomRightRadius: "20px",
					},
				}}>
				<AccordionSummary
					expandIcon={<AccordionArrowIcon />}
					aria-controls='panel2-content'
					id='panel2-header'
					sx={{
						borderRadius: "20px",
						"&.Mui-expanded": {
							minHeight: "48px",
						},
						".MuiAccordionSummary-content": {
							margin: "20px 0",
							"&.Mui-expanded": {
								margin: "20px 0",
							},
						},
					}}>
					<Typography
						variant='h3'
						sx={{ color: "#FFFFFF", mr: "15px" }}>
						How do I Buy and Sell $MYRO?
					</Typography>
				</AccordionSummary>
				<AccordionDetails
					sx={{
						color: "#FFFFFF",
						pb: "20px",
					}}>
					<Typography variant='h5'>
						The Talking Tom movement is like no other on the Solana blockchain, bringing
						dog lovers from all around the crypto space and uniting them into one.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{
					background: "rgba(0, 0, 0, 0.25)",
					border: "2px solid #FFFFFF",
					borderRadius: "20px",
					mb: 2,
					"&.MuiAccordion-root:first-of-type": {
						borderTopLeftRadius: "20px",
						borderTopRightRadius: "20px",
					},
					"&.MuiAccordion-root:last-of-type": {
						borderBottomLeftRadius: "20px",
						borderBottomRightRadius: "20px",
					},
				}}>
				<AccordionSummary
					expandIcon={<AccordionArrowIcon />}
					aria-controls='panel3-content'
					id='panel3-header'
					sx={{
						borderRadius: "20px",
						"&.Mui-expanded": {
							minHeight: "48px",
						},
						".MuiAccordionSummary-content": {
							margin: "20px 0",
							"&.Mui-expanded": {
								margin: "20px 0",
							},
						},
					}}>
					<Typography
						variant='h3'
						sx={{ color: "#FFFFFF", mr: "15px" }}>
						How do I Buy and Sell $TOM?
					</Typography>
				</AccordionSummary>
				<AccordionDetails
					sx={{
						color: "#FFFFFF",
						pb: "20px",
					}}>
					<Typography variant='h5'>
						The Talking Tom movement is like no other on the Solana blockchain, bringing
						dog lovers from all around the crypto space and uniting them into one.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default FaqAccordion;

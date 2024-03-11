import { Typography, Box } from "@mui/material";
import { DefaultContainer } from "../../default";
import ReactCodeInput from "react-code-input";
import { useState } from "react";

const props = {
  className: "reactCodeInput",
  inputStyle: {
    fontFamily: "Grandstander",
    margin: "4px",
    MozAppearance: "textfield",
    width: "152px",
    borderRadius: "30px",
    height: "171px",
    backgroundColor: "black",
    color: "#fff",
    border: "2px solid #fff",
    fontWeight: 700,
    fontSize: "80px",
    lineHeight: "100%",
    textAlign: "center",
  },
  inputStyleInvalid: {
    fontFamily: "Grandstander",
    margin: "4px",
    MozAppearance: "textfield",
    width: "152px",
    borderRadius: "30px",
    height: "171px",
    backgroundColor: "black",
    color: "red",
    border: "2px solid red",
    fontWeight: 700,
    fontSize: "80px",
    lineHeight: "100%",
    textAlign: "center",
  },
};

const Code = ({ setIsValid, isValid, setRef }) => {
  const [codeVal, setCodeVal] = useState("");

  const onCodeChange = (val) => {
    setCodeVal(val);
    if (val.length === 5) {
      setIsValid(true);
      setRef(true);
    } else {
      setIsValid(false);
    }
  };
  return (
    <DefaultContainer>
      <Box
        display="flex"
        alignItems={"center"}
        flexDirection="column"
        sx={{ mb: { lg: "160px", xs: "80px" } }}
      >
        <Typography
          variant="h2"
          sx={{ maxWidth: "680px", textAlign: "center", mb: "60px" }}
        >
          Enter your invitation code to receive your airdrop
        </Typography>
        <ReactCodeInput
          isValid={isValid || codeVal.length === 0}
          fields={5}
          onChange={onCodeChange}
          autoFocus={false}
          {...props}
        />
        <Typography variant="h5" sx={{ mt: "60px" }}>
          Already registered?
        </Typography>
        <Typography variant="body2">Log in with your wallet.</Typography>
      </Box>
    </DefaultContainer>
  );
};
export default Code;

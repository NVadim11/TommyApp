import { Typography, Box } from "@mui/material";
import { DefaultContainer } from "../../default";
import ReactCodeInput from "react-code-input";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCheckCodeMutation } from "../../../../../services/phpService";

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
  const [checkCode] = useCheckCodeMutation();
  const { code } = useParams();

  const onCodeChange = async (val) => {
    console.log(val)
    setCodeVal(val);
    if (code && val === code) {
      setIsValid(true);
      setRef(true);
    } else if (val.length === 5) {
      try {
        const res = await checkCode(val.toLocaleUpperCase()).unwrap();
        if (res === 201) {
          setIsValid(true)
          setRef(true)
        }
      } catch (e) {
        console.log("error", e)
      }
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

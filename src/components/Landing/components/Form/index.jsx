import { useEffect, useState } from "react";
import { Code, Steps } from "./components";

const Form = ({ setRef }) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    localStorage.getItem('wallet_id') && setIsValid(true)
  }, [])

  return (
    <>
      {!isValid ? (
        <Code setIsValid={setIsValid} isValid={isValid} setRef={setRef} />
      ) : (
        <Steps isCodeValid={isValid} />
      )}
    </>
  );
};

export default Form;

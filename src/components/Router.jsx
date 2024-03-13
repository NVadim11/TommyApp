import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import MainComponent from "./main";
import { Discord, Twitter } from "./auth";
import { AuthContext } from "./helper/contexts";
import { useCreateUserMutation, useGetUserByWalletIdMutation } from "../services/phpService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent />,
  },
  {
    path: "/:code",
    element: <MainComponent />,
  },
  {
    path: "/twitter/access-token",
    element: <Twitter />,
  },
  {
    path: "discord/callback",
    element: <Discord />,
  },
]);

const AppRouter = () => {
  const [auth, setAuth] = useState({});
  const { publicKey, connected } = useWallet();
  const wallet_address = publicKey?.toBase58();
  const [getUser] = useGetUserByWalletIdMutation();
  const [createUser] = useCreateUserMutation();

  const connectSubmitHandler = async () => {
    try {
      const response = await getUser(wallet_address).unwrap();
      if (response) {
        setAuth(response);
      } else {
        const res = await createUser({wallet_address}).unwrap();
        res && setAuth(res);
      }
    } catch (error) {
      console.error("Error submitting data:", error.message);
    }
  };
  useEffect(() => {
    if (connected === true) {
      connectSubmitHandler();
      localStorage.setItem("wallet_id", wallet_address);
    }
  }, [connected]);

  return (
    <AuthContext.Provider value={auth}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
};

export default AppRouter;

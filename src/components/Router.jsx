import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
	useGetUserByWalletIdInitMutation,
	useGetUserByWalletIdQuery,
} from '../services/phpService';
import { Discord, Twitter } from './auth';
import { AuthContext } from './helper/contexts';
import MainComponent from './main';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainComponent />,
	},
	{
		path: '/:code',
		element: <MainComponent />,
	},
	{
		path: '/twitter/callback',
		element: <Twitter />,
	},
	{
		path: 'discord/callback',
		element: <Discord />,
	},
]);

const AppRouter = () => {
	const [auth, setAuth] = useState({});
	const [skip, setSkip] = useState(true);
	const { publicKey, connected } = useWallet();
	const wallet_address = publicKey?.toBase58();
	const [getUser] = useGetUserByWalletIdInitMutation();

	const {
		data: user,
		isLoading,
		isError,
	} = useGetUserByWalletIdQuery(wallet_address, {
		skip: skip,
		pollingInterval: 10000,
	});

	const contextValue = {
		value: auth,
		setValue: setAuth,
	};

	useEffect(() => {
		if (connected && wallet_address) {
			setSkip(false);
		}
	}, [connected, wallet_address]);

	useEffect(() => {
		if (user && !isLoading) {
			setAuth(user);
		}
	}, [user, isLoading]);

	const connectSubmitHandler = async () => {
		try {
			const response = await getUser(wallet_address).unwrap();
			if (response) {
				setAuth(response);
			}
		} catch (e) {
			console.log('Error submitting data');
		}
	};
	useEffect(() => {
		if (connected === true) {
			connectSubmitHandler();
		}
	}, [connected]);

	return (
		<AuthContext.Provider value={contextValue}>
			<RouterProvider router={router} />
		</AuthContext.Provider>
	);
};

export default AppRouter;

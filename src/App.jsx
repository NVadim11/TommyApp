import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import {
	LedgerWalletAdapter,
	PhantomWalletAdapter,
	SolflareWalletAdapter,
	SolongWalletAdapter,
	TorusWalletAdapter,
	TrustWalletAdapter,
	WalletConnectWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import React, { useMemo } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import AppRouter from './components/Router';
import { store } from './store';

function App() {
	return (
		<Provider store={store}>
			<Context>
				<AppRouter />
			</Context>
		</Provider>
	);
}

export default App;

const Context = ({ children }) => {
	const network = WalletAdapterNetwork.Devnet;
	const endpoint = useMemo(() => clusterApiUrl(network), [network]);

	const wallets = useMemo(
		() => [
			new PhantomWalletAdapter(),
			new SolflareWalletAdapter(),
			new LedgerWalletAdapter(),
			new SolongWalletAdapter(),
			new TorusWalletAdapter(),
			new TrustWalletAdapter(),
			new WalletConnectWalletAdapter(),
		],
		[]
	);

	return (
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider wallets={wallets} autoConnect>
				<WalletModalProvider>{children}</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	);
};

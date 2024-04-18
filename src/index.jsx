import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ClickCountProvider } from './components/helper/clickContext';
import { GameInfoProvider } from './components/helper/contextProvider';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GameInfoProvider>
			<ClickCountProvider>
				<App />
			</ClickCountProvider>
		</GameInfoProvider>
	</React.StrictMode>
);

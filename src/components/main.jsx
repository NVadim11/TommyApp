import AOS from 'aos';
import { useContext, useEffect, useState } from 'react';
import { useGetGameInfoQuery } from '../services/admin';
import NotFound from './404';
import Footer from './footer/Footer';
import Header from './header/Header';
import { GameInfoContext } from './helper/contexts';
import Main from './main/Main';
import Preloader from './preloader/Preloader';

const MainComponent = () => {
	const { updateState } = useContext(GameInfoContext);
	const { data, isLoading, isError } = useGetGameInfoQuery();
	const [preloaderLoaded, setPreloaderLoaded] = useState(false);

	useEffect(() => {
		if (!isLoading && data) {
			updateState(data);
		}
	}, [isLoading, data, updateState]);

	useEffect(() => {
		const preloaderTimeout = setTimeout(() => {
			setPreloaderLoaded(true);
		}, 3000);

		const timeout = setTimeout(() => {
			AOS.init({
				easing: 'custom',
			});
		}, 3000);
		return () => {
			clearTimeout(timeout);
			clearTimeout(preloaderTimeout);
		};
	}, []);
	return (
		<div className='wrapper'>
			<Preloader loaded={preloaderLoaded} />
			{data ? (
				<>
					<Header />
					<main className='main'>
						<Main />
					</main>
					<Footer />
				</>
			) : (
				<NotFound />
			)}
		</div>
	);
};

export default MainComponent;

import AOS from 'aos';
import { useContext, useEffect, useState } from 'react';
import { useGetGameInfoQuery } from '../services/admin';
import NotFound from './404';
import Footer from './footer/Footer';
import Header from './header/Header';
import { AuthContext, GameInfoContext } from './helper/contexts';
import Main from './main/Main';
import Preloader from './preloader/Preloader';

const MainComponent = () => {
	const { updateState } = useContext(GameInfoContext);
	const { value } = useContext(AuthContext);
	const { data, isLoading } = useGetGameInfoQuery();
	const [applicationLoaded, setApplicationLoaded] = useState(false);
	const [preloaderLoaded, setPreloaderLoaded] = useState(false);

	useEffect(() => {
		if (!isLoading && data && value) {
			updateState(data);
			const timeout = setTimeout(() => {
				setPreloaderLoaded(true);
			}, 2000); // Set preloaderLoaded to true after 2 seconds
			return () => clearTimeout(timeout);
		}
	}, [isLoading, data, updateState, value]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			AOS.init({
				easing: 'custom',
			});
			setApplicationLoaded(true);
		}, 4000); // Set applicationLoaded to true after 4 seconds
		return () => clearTimeout(timeout);
	}, []);

	// Render preloader until application is fully loaded
	if (!applicationLoaded) {
		return <Preloader loaded={false} />;
	}

	return (
		<div className='wrapper'>
			<Preloader loaded={preloaderLoaded} />
			{!isLoading && data && value ? (
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

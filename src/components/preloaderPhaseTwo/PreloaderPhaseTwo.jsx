import { useEffect } from 'react';
import cat from '../../img/cat2.png';
import './PreloaderPhaseTwo.scss';

const PreloaderPhaseTwo = ({ loaded }) => {
	useEffect(() => {}, []);

	return (
		<div className={`preloaderPhaseTwo${loaded ? ' loadedPhaseTwo' : ''}`}>
			<img src={cat} alt='Tim The Cat' />
		</div>
	);
};

export default PreloaderPhaseTwo;

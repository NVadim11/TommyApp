import { useEffect } from 'react';
import cat from '../../img/cat2.png';
import './gamePreloader.scss';

const GamePreloader = ({ loaded }) => {
	useEffect(() => {}, []);

	return (
		<div className={`gamePreloader${loaded ? ' loadedGamePreloader' : ''}`}>
			<img src={cat} alt='Tim The Cat' />
		</div>
	);
};

export default GamePreloader;

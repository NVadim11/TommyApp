import { useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
// 	useIncreaseBalanceMutation,
// 	usePassTaskMutation,
// } from '../../services/phpService';
import { AuthContext } from '../helper/contexts';

const Twitter = () => {
	const { value, setValue } = useContext(AuthContext);
	const params = new URLSearchParams(window.location.search);
	// const navigate = useNavigate();
	// const [passTask] = usePassTaskMutation();
	// const [increaseBalance] = useIncreaseBalanceMutation();

	const auth = async () => {
		try {
			const twitterAuth = params.get('status');
			if (twitterAuth === 'followed') {
				// const res = await request({
				//   wallet_address: value.wallet_address,
				// }).unwrap();
				// if (res.status === 201) {
				// const user = await getUser(value.wallet_address).unwrap();
				// if (user) {
				//   setValue(user);
				// }
				window.location.href = 'https://twitter.com/TomoCatSol';
				// }
			}
		} catch (e) {
			console.log(e);
		}
	};

	// Twitter API follow callback logic.
	// const auth = async () => {
	// 	try {
	// 		const twitterAuth = params.get('status');
	// 		if (twitterAuth === 'followed') {
	// 			await passTask({
	// 				wallet_address: value?.wallet_address,
	// 				task: 'twitter',
	// 			}).unwrap();
	// 			await increaseBalance({
	// 				wallet_address: value?.wallet_address,
	// 				score: '10000',
	// 			}).unwrap();
	// 			navigate('/', { state: { auth: true } });
	// 		}
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };

	useEffect(() => {
		if (value && value?.wallet_address) {
			auth();
		}
	}, [value]);
	return <></>;
};

export default Twitter;

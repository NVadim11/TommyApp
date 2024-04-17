import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	usePassTaskMutation,
	useIncreaseBalanceMutation,
} from '../../services/phpService';
import { AuthContext } from '../helper/contexts';

const Twitter = () => {
	const { value, setValue } = useContext(AuthContext);
	// const [request] = useTwitterCallbackMutation();
	const params = new URLSearchParams(window.location.search);
	const navigate = useNavigate();
	// const [getUser] = useGetUserByWalletIdMutation();
	const [passTask] = usePassTaskMutation();
	const [increaseBalance] = useIncreaseBalanceMutation();

	const auth = async () => {
		try {
			const twitterAuth = params.get('status');
			if (twitterAuth === 'followed') {
				await passTask({
					wallet_address: value?.wallet_address,
					task: 'twitter',
				}).unwrap();
				await increaseBalance({
					wallet_address: value?.wallet_address,
					score: '10000',
				}).unwrap();
				navigate('/', { state: { auth: true } });
			}
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		if (value && value?.wallet_address) {
			auth();
		}
	}, [value]);
	return <></>;
};

export default Twitter;

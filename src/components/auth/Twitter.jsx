import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTwitterCallbackMutation } from '../../services/auth';
import {
	useGetUserByWalletIdMutation,
	usePassTaskMutation,
	useUpdateBalanceMutation,
} from '../../services/phpService';
import { AuthContext } from '../helper/contexts';

const Twitter = () => {
	const { value, setValue } = useContext(AuthContext);
	const [request] = useTwitterCallbackMutation();
	const params = new URLSearchParams(window.location.search);
	const navigate = useNavigate();
	const [getUser] = useGetUserByWalletIdMutation();
	const [passTask] = usePassTaskMutation();
	const [updateBalance] = useUpdateBalanceMutation();

	const auth = async () => {
		try {
			const twitterAuth = params.get('status');
			if (twitterAuth === 'followed') {
				const res = await request({
					wallet_address: value.wallet_address,
				}).unwrap();
				if (res.status === 201) {
					const user = await getUser(value.wallet_address).unwrap();
					if (user) {
						setValue(user);
						await updateBalance({
							id_telegram: value?.id_telegram,
							score: '10000',
						}).unwrap();
					}
					navigate('/', { state: { auth: true } });
				}
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

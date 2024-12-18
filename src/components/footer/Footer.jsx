import { useWallet } from '@solana/wallet-adapter-react';
import bcrypt from 'bcryptjs';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { default as catCoin, default as catCoinMove } from '../../img/cat_coin_move.png';
import checkbox from '../../img/checkbox.png';
import pet from '../../img/pet_icon.svg';
import shop from '../../img/shop_icon.svg';
import tasks from '../../img/tasks_icon.svg';
import {
	usePassDailyMutation,
	usePassPartnersMutation,
	usePassTaskMutation,
} from '../../services/phpService';
import { toggleMuteAllSounds } from '../../utility/Audio';
import { AuthContext } from '../helper/contexts';
import './Footer.scss';

function Footer() {
	const { connected } = useWallet();
	const [isVisible, setIsVisible] = useState(false);
	const location = useLocation();
	const { value } = useContext(AuthContext);
	const [passTask] = usePassTaskMutation();
	const [passDaily] = usePassDailyMutation();
	const [passPartners] = usePassPartnersMutation();
	const [activeTab, setActiveTab] = useState(0);

	const dailyTasksObj = value?.daily_quests;
	const partnerTaskObj = value?.partners_quests;

	const [twitterQuest, setTwitterQuest] = useState(value?.twitter);
	const [tgChatQuest, setTgChatQuest] = useState(value?.tg_chat);
	const [tgChannelQuest, setTgChannelQuest] = useState(value?.tg_channel);
	const [websiteQuest, setWebsiteQuest] = useState(value?.website);
	const [dailyQuests, setDailyQuests] = useState(dailyTasksObj);
	const [partnerQuests, setPartnerQuests] = useState(partnerTaskObj);

	// aws
	const secretKey = process.env.REACT_APP_SECRET_KEY;

	useEffect(() => {
		setTwitterQuest(value?.twitter);
		setTgChatQuest(value?.tg_chat);
		setTgChannelQuest(value?.tg_channel);
		setWebsiteQuest(value?.website);
		setPartnerQuests(partnerTaskObj);
		setDailyQuests(dailyTasksObj);
	}, [value]);

	const toggleVisibility = () => {
		toggleMuteAllSounds();
		setIsVisible(!isVisible);
	};

	const [tasksOpen, setTasksOpen] = useState(false);
	const popupTasksTgl = tasksOpen ? 'popupTasks_show' : null;
	const popupTasks = `popupTasks ${popupTasksTgl}`;

	const now = new Date();
	const options = {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
		timeZone: 'UTC',
	};
	const dateStringWithTime = now.toLocaleString('en-GB', options);

	const tasksBtn = () => {
		fadeShow();
		setTimeout(() => {
			setTasksOpen(true);
		}, 250);
	};

	const fadeShow = () => {
		const htmlTag = document.getElementById('html');
		if (htmlTag) htmlTag.classList.add('popupTasks-show');
	};

	const tasksCloseToggler = () => {
		setTasksOpen(false);
		const htmlTag = document.getElementById('html');
		if (htmlTag) htmlTag.classList.remove('popupTasks-show');
	};

	const twitterClick = async () => {
		// window.open('https://twitter.com/TomoCatSol', '_blank');
		try {
			await passTask({
				token: await bcrypt.hash(secretKey + dateStringWithTime, 10),
				wallet_address: value?.wallet_address,
				task: 'twitter',
			}).unwrap();
			const res = { success: true };
			if (res.success) {
				// Update quest status to completed (status: 1)
				setTwitterQuest(1);
				console.log('Task completed successfully:');
			} else {
				console.log('Error completing task');
			}
		} catch (e) {
			console.log(e);
		}
	};

	const tgClickChat = async () => {
		// window.open(`https://t.me/tomocat_sol`, '_blank');
		try {
			await passTask({
				token: await bcrypt.hash(secretKey + dateStringWithTime, 10),
				wallet_address: value?.wallet_address,
				task: 'tg_chat',
			}).unwrap();
			const res = { success: true };
			if (res.success) {
				// Update quest status to completed (status: 1)
				setTgChatQuest(1);
				console.log('Task completed successfully:');
			} else {
				console.log('Error completing task');
			}
		} catch (e) {
			console.log(e);
		}
	};

	const tgClickChannel = async () => {
		// window.open(`https://t.me/tomo_cat`, '_blank');
		try {
			await passTask({
				token: await bcrypt.hash(secretKey + dateStringWithTime, 10),
				wallet_address: value?.wallet_address,
				task: 'tg_channel',
			}).unwrap();
			const res = { success: true };
			if (res.success) {
				// Update quest status to completed (status: 1)
				setTgChannelQuest(1);
				console.log('Task completed successfully:');
			} else {
				console.log('Error completing task');
			}
		} catch (e) {
			console.log(e);
		}
	};

	const websiteClick = async () => {
		// window.open(`https://tomocat.com/`, '_blank');
		try {
			await passTask({
				token: await bcrypt.hash(secretKey + dateStringWithTime, 10),
				wallet_address: value?.wallet_address,
				task: 'website',
			}).unwrap();
			const res = { success: true };
			if (res.success) {
				// Update quest status to completed (status: 1)
				setWebsiteQuest(1);
				console.log('Task completed successfully:');
			} else {
				console.log('Error completing task');
			}
		} catch (e) {
			console.log(e);
		}
	};

	const passDailyHandler = async (taskId, link) => {
		if (link !== null) {
			window.open(link, '_blank');
		}
		try {
			await passDaily({
				token: await bcrypt.hash(secretKey + dateStringWithTime, 10),
				user_id: value?.id,
				daily_quest_id: taskId,
			}).unwrap();

			const res = { success: true };

			if (res.success) {
				// Update quest status to completed (status: 1)
				updateDailyQStatus(taskId, 1);
				console.log('Task completed successfully:', taskId);
			} else {
				console.log('Error completing task:' + taskId);
			}
		} catch (e) {
			console.log('Error completing task:' + taskId, e);
		}
	};

	const updateDailyQStatus = (taskId, status) => {
		// Update the quest status in state
		setDailyQuests((prevQuests) =>
			prevQuests.map((quest) =>
				quest.id === taskId ? { ...quest, status: status } : quest
			)
		);
	};

	const partnersTaskHandler = async (taskId, link) => {
		if (link !== null) {
			window.open(link, '_blank');
		}
		try {
			await passPartners({
				token: await bcrypt.hash(secretKey + dateStringWithTime, 10),
				user_id: value?.id,
				partners_quest_id: taskId,
			}).unwrap();

			const res = { success: true };

			if (res.success) {
				// Update quest status to completed (status: 1)
				updatePartnerQStatus(taskId, 1);
				console.log('Task completed successfully:', taskId);
			} else {
				console.log('Error completing task:' + taskId);
			}
		} catch (e) {
			console.log('Error completing task:' + taskId, e);
		}
	};

	const updatePartnerQStatus = (taskId, status) => {
		// Update the quest status in state
		setPartnerQuests((prevQuests) =>
			prevQuests.map((quest) =>
				quest.id === taskId ? { ...quest, status: status } : quest
			)
		);
	};

	const handleTabClick = (index) => {
		setActiveTab(index);
	};

	return (
		<>
			<footer className='footerMain'>
				<div className='footerMain__container'>
					<div className='soundToggler'>
						{isVisible ? (
							<div className='soundToggler__itemOn' onClick={toggleVisibility}>
								<button>
									<svg
										width='23'
										height='19'
										viewBox='0 0 23 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M19.697 4.80667C19.697 4.80667 21.2996 6.37109 21.2996 8.97844C21.2996 11.5858 19.697 13.1502 19.697 13.1502'
											stroke='white'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M1 11.4367V7.56325C1 7.01003 1.22512 6.47948 1.62584 6.0883C2.02656 5.69712 2.57006 5.47736 3.13676 5.47736H6.23507C6.44396 5.47731 6.64825 5.41748 6.82267 5.30527L13.233 1.17939C13.394 1.07585 13.5808 1.01679 13.7735 1.00849C13.9661 1.00019 14.1575 1.04295 14.3273 1.13223C14.497 1.22152 14.6389 1.354 14.7378 1.51563C14.8367 1.67725 14.8889 1.86199 14.8889 2.05025V16.9497C14.8889 17.138 14.8367 17.3227 14.7378 17.4844C14.6389 17.646 14.497 17.7785 14.3273 17.8677C14.1575 17.957 13.9661 17.9998 13.7735 17.9915C13.5808 17.9832 13.394 17.9241 13.233 17.8206L6.82267 13.6947C6.64825 13.5825 6.44396 13.5227 6.23507 13.5226H3.13676C2.57006 13.5226 2.02656 13.3029 1.62584 12.9117C1.22512 12.5205 1 11.9899 1 11.4367Z'
											stroke='white'
											strokeWidth='2'
										/>
									</svg>
								</button>
							</div>
						) : (
							<div className='soundToggler__itemOff' onClick={toggleVisibility}>
								<button>
									<svg
										width='26'
										height='19'
										viewBox='0 0 26 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M20.1947 11.5865L22.2812 9.50001M22.2812 9.50001L24.3677 7.41351M22.2812 9.50001L20.1947 7.41351M22.2812 9.50001L24.3677 11.5865'
											stroke='white'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M1.6322 11.4373V7.56269C1.6322 7.00932 1.85203 6.47861 2.24332 6.08732C2.63462 5.69602 3.16533 5.4762 3.7187 5.4762H6.74412C6.9481 5.47614 7.14758 5.4163 7.31791 5.30406L13.5774 1.17697C13.7347 1.0734 13.917 1.01432 14.1052 1.00602C14.2933 0.997715 14.4802 1.04049 14.646 1.1298C14.8118 1.21911 14.9503 1.35163 15.0468 1.5133C15.1434 1.67497 15.1944 1.85977 15.1944 2.04808V16.9519C15.1944 17.1402 15.1434 17.325 15.0468 17.4867C14.9503 17.6484 14.8118 17.7809 14.646 17.8702C14.4802 17.9595 14.2933 18.0023 14.1052 17.994C13.917 17.9857 13.7347 17.9266 13.5774 17.823L7.31791 13.6959C7.14758 13.5837 6.9481 13.5239 6.74412 13.5238H3.7187C3.16533 13.5238 2.63462 13.304 2.24332 12.9127C1.85203 12.5214 1.6322 11.9907 1.6322 11.4373Z'
											stroke='white'
											strokeWidth='2'
										/>
									</svg>
								</button>
							</div>
						)}
					</div>
					{connected && (
						<div className='footerMain__activities'>
							<div className='footerMain__activitiesBtn'>
								<button onClick={tasksBtn}>
									<span>Tasks</span>
									<img src={tasks} />
								</button>
							</div>
							<div className='footerMain__activitiesBtn'>
								<button style={{ opacity: '0.5', cursor: 'not-allowed' }} disabled>
									Pet
									<img src={pet} />
								</button>
								<div className='footerMain__activitiesHint'>Coming Soon</div>
							</div>
							<div className='footerMain__activitiesBtn'>
								<button style={{ opacity: '0.5', cursor: 'not-allowed' }} disabled>
									Shop
									<img src={shop} />
								</button>
								<div className='footerMain__activitiesHint'>Coming Soon</div>
							</div>
						</div>
					)}
					<div className='footerMain__socials'>
						<div className='footerMain__twBtn'>
							<a href='https://twitter.com/TomoCatSol' target='_blank'>
								TW
							</a>
						</div>
						<div className='footerMain__tgBtn'>
							<a href='https://t.me/tomo_cat' target='_blank'>
								TG
							</a>
						</div>
					</div>
				</div>
			</footer>
			{tasksOpen && (
				<div id='popupTasks' aria-hidden='true' className={popupTasks}>
					<div className='popupTasks__wrapper'>
						<div className='popupTasks__content'>
							<button
								onClick={tasksCloseToggler}
								type='button'
								className='popupTasks__close'
							>
								<svg
									width='19'
									height='19'
									viewBox='0 0 19 19'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9.5 9.5L2 2M9.5 9.5L17 17M9.5 9.5L17 2M9.5 9.5L2 17'
										stroke='white'
										strokeWidth='3'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</button>
							<div className='popupTasks__header'>
								<div className='popupTasks__title'>
									<h4>
										Complete tasks
										<br />
										and get rewarded!
									</h4>
								</div>
								<div className='popupTasks__coins'>
									{value?.wallet_balance && (
										<>
											<div className='popupTasks__coinImg' draggable='false'>
												<img src={catCoinMove} alt='animation' draggable='false' />
											</div>
											<div className='popupTasks__coinAmount'>
												<span id='coinAmount'>{value?.wallet_balance}</span>
											</div>
										</>
									)}
								</div>
							</div>
							<div className='popupTasks__tabs-btns'>
								<div
									className={`popupTasks__tabs-btn ${activeTab === 0 ? 'active' : ''}`}
									onClick={() => handleTabClick(0)}
								>
									<button>Social</button>
								</div>
								{/* <div className='popupTasks__tabs-btn'> */}
								<div
									className={`popupTasks__tabs-btn ${activeTab === 1 ? 'active' : ''}`}
									onClick={() => handleTabClick(1)}
								>
									<button>Daily</button>
									{/* <div className='footerMain__activitiesHint'>Coming Soon</div> */}
								</div>
								{/* <div className='popupTasks__tabs-btn'> */}
								<div
									// className='popupTasks__tabs-btn'
									className={`popupTasks__tabs-btn ${activeTab === 2 ? 'active' : ''}`}
									onClick={() => handleTabClick(2)}
								>
									<button>Partnership</button>
									{/* <div className='footerMain__activitiesHint'>Coming Soon</div> */}
								</div>
								<div className='popupTasks__tabs-line'></div>
							</div>
							<div className='popupTasks__tabs-content'>
								{activeTab === 0 && (
									<div className='popupTasks__tabSocial'>
										<div className='popupTasks__tabSocial-item'>
											<div className='popupTasks__tabSocial-btn'>
												<button onClick={twitterClick} disabled={twitterQuest === 1}>
													<span>Follow Twitter</span>
													{twitterQuest === 0 ? (
														<div className='popupTasks__tabSocial-reward'>
															<span>10000</span>
															<img src={catCoin} alt='animation' draggable='false' />
														</div>
													) : (
														<img src={checkbox} />
													)}
												</button>
											</div>
										</div>
										<div className='popupTasks__tabSocial-item'>
											<div className='popupTasks__tabSocial-btn'>
												<button onClick={tgClickChat} disabled={tgChatQuest === 1}>
													<span>Follow TG Chat</span>
													{tgChatQuest === 0 ? (
														<div className='popupTasks__tabSocial-reward'>
															<span>10000</span>
															<img src={catCoin} alt='animation' draggable='false' />
														</div>
													) : (
														<img src={checkbox} />
													)}
												</button>
											</div>
										</div>
										<div className='popupTasks__tabSocial-item'>
											<div className='popupTasks__tabSocial-btn'>
												<button onClick={tgClickChannel} disabled={tgChannelQuest === 1}>
													<span>Follow TG Channel</span>
													{tgChannelQuest === 0 ? (
														<div className='popupTasks__tabSocial-reward'>
															<span>10000</span>
															<img src={catCoin} alt='animation' draggable='false' />
														</div>
													) : (
														<img src={checkbox} />
													)}
												</button>
											</div>
										</div>
										<div className='popupTasks__tabSocial-item'>
											<div className='popupTasks__tabSocial-btn'>
												<button onClick={websiteClick} disabled={websiteQuest === 1}>
													<span>Visit Website</span>
													{websiteQuest === 0 ? (
														<div className='popupTasks__tabSocial-reward'>
															<span>3000</span>
															<img src={catCoin} alt='animation' draggable='false' />
														</div>
													) : (
														<img src={checkbox} />
													)}
												</button>
											</div>
										</div>
									</div>
								)}
								{activeTab === 1 && (
									<>
										{dailyQuests && dailyQuests.length > 0 && (
											<div className='popupTasks__tabSocial'>
												{/* Render quests dynamically based on their status */}
												{dailyQuests.map((quest) => (
													<div className='popupTasks__tabSocial-item' key={quest.id}>
														<div className='popupTasks__tabSocial-btn'>
															{/* Conditionally render button or div */}
															{quest.required_amount === 0 &&
															quest.required_referrals === 0 ? (
																<button
																	disabled={quest.status === 1}
																	onClick={() =>
																		passDailyHandler(quest.id, quest.daily_quest.link)
																	}
																>
																	<span>{quest.daily_quest.name}</span>
																	{quest.status === 0 ? (
																		<div className='popupTasks__tabSocial-reward'>
																			<span>{quest.reward}</span>
																			<img
																				src={catCoin}
																				alt='animation'
																				draggable='false'
																			/>
																		</div>
																	) : (
																		<img src={checkbox} alt='Completed' />
																	)}
																</button>
															) : (
																<button disabled={quest.status === 1}>
																	<span>{quest.daily_quest.name}</span>
																	{quest.status === 0 ? (
																		<div className='popupTasks__tabSocial-reward'>
																			<span>{quest.reward}</span>
																			<img
																				src={catCoin}
																				alt='animation'
																				draggable='false'
																			/>
																		</div>
																	) : (
																		<img src={checkbox} alt='Completed' />
																	)}
																</button>
															)}
														</div>
													</div>
												))}
											</div>
										)}
									</>
								)}
								{activeTab === 2 && (
									<>
										{partnerQuests && partnerQuests.length > 0 && (
											<div className='popupTasks__tabSocial'>
												{/* Render quests dynamically based on their status */}
												{partnerQuests
													.filter((quest) => quest.partners_quest.vis === 1)
													.map((quest) => (
														<div className='popupTasks__tabSocial-item' key={quest.id}>
															<div className='popupTasks__tabSocial-btn'>
																<button
																	disabled={quest.status === 1}
																	onClick={() =>
																		partnersTaskHandler(
																			quest.id,
																			quest.partners_quest.link
																		)
																	}
																>
																	<span>{quest.partners_quest.name}</span>
																	{quest.status === 0 ? (
																		<div className='popupTasks__tabSocial-reward'>
																			<span>{quest.reward}</span>
																			<img
																				src={catCoin}
																				alt='animation'
																				draggable='false'
																			/>
																		</div>
																	) : (
																		<img src={checkbox} alt='Completed' />
																	)}
																</button>
															</div>
														</div>
													))}
											</div>
										)}
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Footer;

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import copy from '../../img/copy.svg';
import envelope from '../../img/envelope.svg';
import link from '../../img/link.svg';
import logo from '../../img/logo.png';
import money from '../../img/money.svg';
import people from '../../img/people-icon.svg';
import { useGenerateCodeMutation } from '../../services/phpService';
import { toggleMuteAllSounds } from '../../utility/Audio';
import { useClickCount } from '../helper/clickContext';
import { AuthContext } from '../helper/contexts';
import './Header.scss';

function Header() {
	const { value } = useContext(AuthContext);
	const { connected, publicKey } = useWallet();
	const [isToggled, setIsToggled] = useState(false);
	const [isShown, setIsShown] = useState(false);
	const [totalReferrals, setTotalReferrals] = useState(null);
	const [leaderboardData, setLeaderboardData] = useState([]);
	const [isLeaderboardOpen, setLeaderboardOpen] = useState(false);
	const [isInviteOpen, setInviteOpen] = useState(false);
	const [totalPoints, setTotalPoints] = useState(null);
	const [isVisible, setIsVisible] = useState(false);
	const [isElementPresent, setIsElementPresent] = useState(false);
	const initLeadersRef = useRef(null);
	const wallet_address = publicKey?.toBase58();

	const popupClsTgl = isLeaderboardOpen ? 'popupLeaderboard_show' : null;
	const popupClasses = `popupLeaderboard ${popupClsTgl}`;

	const popupInvTgl = isInviteOpen ? 'popupInvite_show' : null;
	const popupInvite = `popupInvite ${popupInvTgl}`;

	const { clickCount } = useClickCount();
	const [inviteAlreadySent, setInviteAlreadySent] = useState(false);

	const containerRef = useRef(null);
	// const [getLeaderboard] = useGetLeaderboardMutation();
	const [lastFiveSymbols, setLastFiveSymbols] = useState('');

	useEffect(() => {
		const currentPath = window.location.pathname;
		const lastSlashIndex = currentPath.lastIndexOf('/');

		if (lastSlashIndex !== -1) {
			const lastFiveSymbols = currentPath.slice(lastSlashIndex + 1);
			setLastFiveSymbols(lastFiveSymbols);
		}
	}, []);

	const connectSubmitHandler = async () => {
		try {
			let requestBody = {
				wallet_address: wallet_address,
			};
			if (lastFiveSymbols) {
				requestBody.referral_code = lastFiveSymbols;
			}
			const response = await axios.post(
				'https://aws.tomocat.com/api/users',
				requestBody,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			if (response.status !== 201) {
				throw new Error('Failed to submit data');
			}
		} catch (e) {
			console.log('Error submitting data');
		}
	};

	useEffect(() => {
		if (connected === true) {
			connectSubmitHandler();
		}
	}, [connected]);

	useEffect(() => {
		const observer = new MutationObserver((mutationsList) => {
			mutationsList.forEach((mutation) => {
				if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
					const targetElement = document.getElementById('header__totalScore');
					if (targetElement) {
						setIsElementPresent(true);
					}
				} else if (mutation.type === 'childList' && mutation.removedNodes.length > 0) {
					const targetElement = document.getElementById('header__totalScore');
					if (!targetElement) {
						setIsElementPresent(false);
					}
				}
			});
		});

		observer.observe(document.body, { childList: true, subtree: true });

		return () => observer.disconnect();
	}, []);

	const toggleVisibilitySound = () => {
		toggleMuteAllSounds();
		setIsVisible(!isVisible);
	};

	const fetchLeaderboardData = async () => {
		try {
			const response = await axios.get(`https://aws.tomocat.com/api/liders`);
			setLeaderboardData(response.data);
		} catch (e) {
			console.log('Error fetching leaderboard data');
		}
	};

	useEffect(() => {
		if (!connected) {
			fetchLeaderboardData();
		} else {
			initLeadersRef.current = setInterval(() => {
				fetchLeaderboardData();
			}, 60000);
		}
		return () => {
			clearInterval(initLeadersRef.current);
		};
	}, [connected]);

	useEffect(() => {
		setTotalReferrals(value?.referrals_count);
		setTotalPoints(value?.wallet_balance);
	}, [value]);

	useEffect(() => {
		if (!connected) {
			setTotalPoints(null);
		}
	}, [connected]);

	const toggleVisibility = () => {
		setIsShown(!isShown);
		setIsToggled(!isToggled);
	};

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (event.target.closest('.header__mobileBurger')) return;
			setIsShown(false);
			setIsToggled(false);
		};

		document.addEventListener('mousedown', handleOutsideClick);
		return () => document.removeEventListener('mousedown', handleOutsideClick);
	}, []);

	const leaderBordBtn = () => {
		setLeaderboardOpen(true);
		fadeShow();
		setIsShown(false);
	};

	const inviteCloseToggler = () => {
		setInviteOpen(false);
		const htmlTag = document.getElementById('html');
		if (htmlTag) htmlTag.classList.remove('popupInvite-show');
	};

	const inviteFriendsBtn = () => {
		setInviteOpen(true);
		fadeShowInvite();
		setIsShown(false);
	};

	useEffect(() => {
		if (clickCount >= 100 && !inviteAlreadySent) {
			setInviteAlreadySent(true);
			setTimeout(() => {
				inviteFriendsBtn();
			}, 5000);
		}
	}, [clickCount, inviteAlreadySent]);

	const fadeShow = () => {
		const htmlTag = document.getElementById('html');
		if (htmlTag) htmlTag.classList.add('popupLeaderboard-show');
	};

	const fadeShowInvite = () => {
		const htmlTag = document.getElementById('html');
		if (htmlTag) htmlTag.classList.add('popupInvite-show');
	};

	const leaderboardCloseToggler = () => {
		setLeaderboardOpen(false);
		const htmlTag = document.getElementById('html');
		if (htmlTag) htmlTag.classList.remove('popupLeaderboard-show');
	};

	const [code, setCode] = useState('');
	const [generateCode] = useGenerateCodeMutation();

	useEffect(() => {
		if (value && value.referral_code) {
			setCode(value.referral_code);
		}
	}, [value]);

	const copyLink = async () => {
		try {
			const currentLink = window.location.href;
			const lastSlashIndex = currentLink.lastIndexOf('/');
			const slicedLink = currentLink.slice(0, lastSlashIndex + 1); // Slice from start to last slash including it
			const codeToCopy = slicedLink + code;

			if ('clipboard' in navigator) {
				await navigator.clipboard.writeText(codeToCopy);
			} else {
				document.execCommand('copy', true, codeToCopy);
			}
		} catch (e) {
			console.log('Error copying referral code');
		}
	};

	const generateCodeCallback = async () => {
		try {
			if (value.wallet_address) {
				const res = await generateCode(value.wallet_address).unwrap();
				res && res.code && setCode(res.code);
			}
		} catch (e) {
			console.log('Error generating referral code');
		}
	};

	return (
		<>
			<header className='header'>
				<div className='header__container'>
					<div className='header__logo'>
						<img src={logo} alt={logo} />
					</div>
					<div className='header__centerBtns'>
						<div className='header__leaderboardBtn'>
							<button onClick={leaderBordBtn}>
								<span>Leaderboard</span>
								<svg
									width='18'
									height='18'
									viewBox='0 0 18 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9 16.2C10.125 16.2 11.0813 15.8063 11.8688 15.0188C12.6563 14.2313 13.05 13.275 13.05 12.15C13.05 11.025 12.6563 10.0688 11.8688 9.28125C11.0813 8.49375 10.125 8.1 9 8.1C7.875 8.1 6.91875 8.49375 6.13125 9.28125C5.34375 10.0688 4.95 11.025 4.95 12.15C4.95 13.275 5.34375 14.2313 6.13125 15.0188C6.91875 15.8063 7.875 16.2 9 16.2ZM6.3675 6.93C6.6675 6.765 6.98625 6.63375 7.32375 6.53625C7.66125 6.43875 8.0025 6.375 8.3475 6.345L6.075 1.8H3.825L6.3675 6.93ZM11.6325 6.93L14.1975 1.8H11.925L10.0125 5.625L10.44 6.48C10.65 6.54 10.8525 6.60375 11.0475 6.67125C11.2425 6.73875 11.4375 6.825 11.6325 6.93ZM3.96 15.12C3.705 14.685 3.50625 14.2163 3.36375 13.7138C3.22125 13.2113 3.15 12.69 3.15 12.15C3.15 11.61 3.22125 11.0888 3.36375 10.5863C3.50625 10.0838 3.705 9.615 3.96 9.18C3.33 9.39 2.8125 9.76125 2.4075 10.2938C2.0025 10.8263 1.8 11.445 1.8 12.15C1.8 12.855 2.0025 13.4738 2.4075 14.0063C2.8125 14.5388 3.33 14.91 3.96 15.12ZM14.04 15.12C14.67 14.91 15.1875 14.5388 15.5925 14.0063C15.9975 13.4738 16.2 12.855 16.2 12.15C16.2 11.445 15.9975 10.8263 15.5925 10.2938C15.1875 9.76125 14.67 9.39 14.04 9.18C14.295 9.615 14.4938 10.0838 14.6363 10.5863C14.7788 11.0888 14.85 11.61 14.85 12.15C14.85 12.69 14.7788 13.2113 14.6363 13.7138C14.4938 14.2163 14.295 14.685 14.04 15.12ZM9 18C8.4 18 7.82625 17.9138 7.27875 17.7413C6.73125 17.5688 6.225 17.3325 5.76 17.0325C5.625 17.0625 5.49 17.0813 5.355 17.0888C5.22 17.0963 5.0775 17.1 4.9275 17.1C3.5625 17.1 2.4 16.62 1.44 15.66C0.48 14.7 0 13.5375 0 12.1725C0 10.8675 0.435 9.75 1.305 8.82C2.175 7.89 3.2475 7.3725 4.5225 7.2675L0.9 0H7.2L9 3.6L10.8 0H17.1L13.5 7.2225C14.775 7.3425 15.8438 7.8675 16.7063 8.7975C17.5688 9.7275 18 10.845 18 12.15C18 13.53 17.52 14.7 16.56 15.66C15.6 16.62 14.43 17.1 13.05 17.1C12.915 17.1 12.7763 17.0963 12.6338 17.0888C12.4913 17.0813 12.3525 17.0625 12.2175 17.0325C11.7525 17.3325 11.25 17.5688 10.71 17.7413C10.17 17.9138 9.6 18 9 18ZM7.335 14.625L7.965 12.5775L6.3 11.385H8.3475L9 9.225L9.6525 11.385H11.7L10.035 12.5775L10.665 14.625L9 13.365L7.335 14.625Z'
										fill='white'
									/>
								</svg>
							</button>
						</div>
						{connected && (
							<div className='header__inviteBtn'>
								<button className='header__inviteBtn' onClick={inviteFriendsBtn}>
									<span>Referral</span>
									<svg
										width='20'
										height='20'
										viewBox='0 0 20 20'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<g clipPath='url(#clip0_4005_343)'>
											<path
												d='M10.4167 9.95801C10.8194 9.51356 11.1285 9.00662 11.3438 8.43717C11.559 7.86773 11.6667 7.27745 11.6667 6.66634C11.6667 6.05523 11.559 5.46495 11.3438 4.89551C11.1285 4.32606 10.8194 3.81912 10.4167 3.37467C11.25 3.48579 11.9444 3.85384 12.5 4.47884C13.0556 5.10384 13.3333 5.83301 13.3333 6.66634C13.3333 7.49967 13.0556 8.22884 12.5 8.85384C11.9444 9.47884 11.25 9.8469 10.4167 9.95801ZM15 16.6663V14.1663C15 13.6663 14.8889 13.1906 14.6667 12.7393C14.4444 12.2879 14.1528 11.8886 13.7917 11.5413C14.5 11.7913 15.1562 12.1143 15.7604 12.5101C16.3646 12.9059 16.6667 13.458 16.6667 14.1663V16.6663H15ZM16.6667 10.833V9.16634H15V7.49967H16.6667V5.83301H18.3333V7.49967H20V9.16634H18.3333V10.833H16.6667ZM6.66667 9.99967C5.75 9.99967 4.96528 9.67329 4.3125 9.02051C3.65972 8.36773 3.33333 7.58301 3.33333 6.66634C3.33333 5.74967 3.65972 4.96495 4.3125 4.31217C4.96528 3.6594 5.75 3.33301 6.66667 3.33301C7.58333 3.33301 8.36806 3.6594 9.02083 4.31217C9.67361 4.96495 10 5.74967 10 6.66634C10 7.58301 9.67361 8.36773 9.02083 9.02051C8.36806 9.67329 7.58333 9.99967 6.66667 9.99967ZM0 16.6663V14.333C0 13.8608 0.121528 13.4268 0.364583 13.0309C0.607639 12.6351 0.930556 12.333 1.33333 12.1247C2.19444 11.6941 3.06944 11.3712 3.95833 11.1559C4.84722 10.9406 5.75 10.833 6.66667 10.833C7.58333 10.833 8.48611 10.9406 9.375 11.1559C10.2639 11.3712 11.1389 11.6941 12 12.1247C12.4028 12.333 12.7257 12.6351 12.9688 13.0309C13.2118 13.4268 13.3333 13.8608 13.3333 14.333V16.6663H0ZM6.66667 8.33301C7.125 8.33301 7.51736 8.16981 7.84375 7.84342C8.17014 7.51704 8.33333 7.12467 8.33333 6.66634C8.33333 6.20801 8.17014 5.81565 7.84375 5.48926C7.51736 5.16287 7.125 4.99967 6.66667 4.99967C6.20833 4.99967 5.81597 5.16287 5.48958 5.48926C5.16319 5.81565 5 6.20801 5 6.66634C5 7.12467 5.16319 7.51704 5.48958 7.84342C5.81597 8.16981 6.20833 8.33301 6.66667 8.33301ZM1.66667 14.9997H11.6667V14.333C11.6667 14.1802 11.6285 14.0413 11.5521 13.9163C11.4757 13.7913 11.375 13.6941 11.25 13.6247C10.5 13.2497 9.74306 12.9684 8.97917 12.7809C8.21528 12.5934 7.44444 12.4997 6.66667 12.4997C5.88889 12.4997 5.11806 12.5934 4.35417 12.7809C3.59028 12.9684 2.83333 13.2497 2.08333 13.6247C1.95833 13.6941 1.85764 13.7913 1.78125 13.9163C1.70486 14.0413 1.66667 14.1802 1.66667 14.333V14.9997Z'
												fill='white'
											/>
										</g>
										<defs>
											<clipPath id='clip0_4005_343'>
												<rect width='20' height='20' fill='white' />
											</clipPath>
										</defs>
									</svg>
								</button>
							</div>
						)}
					</div>
					<div className='header__mobileBtns'>
						{value && totalPoints !== null && (
							<div id='header__totalScore' className='header__totalScore'>
								Total Points: <span>{totalPoints}</span>
							</div>
						)}
						<div className='soundToggler'>
							{isVisible ? (
								<div className='soundToggler__itemOn' onClick={toggleVisibilitySound}>
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
								<div className='soundToggler__itemOff' onClick={toggleVisibilitySound}>
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
						<div className='header__walletBtn'>
							<WalletMultiButton
								style={{
									display: !connected ? 'flex' : 'none',
								}}
							>
								{' '}
								<span>Connect Wallet </span>
							</WalletMultiButton>
							<WalletMultiButton
								style={{
									display: !connected ? 'none' : 'flex',
								}}
							></WalletMultiButton>
						</div>
						<div
							className='header__mobileBurger hidden'
							ref={containerRef}
							onClick={toggleVisibility}
						>
							<div
								className={
									isToggled
										? 'header__mobileBurger-btn is-active'
										: 'header__mobileBurger-btn'
								}
							>
								<span className='header__mobileBurger-line'></span>
								<span className='header__mobileBurger-line'></span>
								<span className='header__mobileBurger-line'></span>
							</div>
							{isShown && (
								<div className='header__mobileMenu'>
									<a className='header__mobileMenu-links' onClick={leaderBordBtn}>
										Leadboard
									</a>
									{connected && (
										<a
											className='header__mobileMenu-links'
											onClick={inviteFriendsBtn}
											rel='noopener noreferrer'
										>
											Invite a friend
										</a>
									)}
									<a
										className='header__mobileMenu-links'
										href='https://twitter.com/TimCatSol'
										target='_blank'
										rel='noopener noreferrer'
									>
										TW
									</a>
									<a
										className='header__mobileMenu-links'
										href='https://t.me/tomo_cat'
										target='_blank'
										rel='noopener noreferrer'
									>
										Telegram
									</a>
								</div>
							)}
						</div>
					</div>
				</div>
			</header>
			{isLeaderboardOpen && (
				<div id='leaderboard' aria-hidden='true' className={popupClasses}>
					<div className='popupLeaderboard__wrapper'>
						<div className='popupLeaderboard__content'>
							<button
								onClick={leaderboardCloseToggler}
								type='button'
								className='popupLeaderboard__close'
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
							<div className='popupLeaderboard__title'>
								<h4>Leaderboard</h4>
							</div>
							<div className='popupLeaderboard__crownIcon'>
								<svg
									width='39'
									height='30'
									viewBox='0 0 39 30'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M38.4225 8.61694C38.174 8.39826 37.8666 8.25901 37.5394 8.21688C37.2122 8.17474 36.88 8.23161 36.585 8.38028L28.0134 12.6902L20.9292 0.815487C20.7806 0.566685 20.5707 0.360855 20.32 0.21797C20.0692 0.0750856 19.7861 0 19.4981 0C19.2101 0 18.927 0.0750856 18.6763 0.21797C18.4255 0.360855 18.2157 0.566685 18.067 0.815487L10.9828 12.6902L2.41456 8.38195C2.11957 8.23341 1.78756 8.17631 1.46042 8.21787C1.13329 8.25944 0.825693 8.39779 0.576441 8.61547C0.327189 8.83316 0.147451 9.12043 0.0599063 9.44103C-0.0276385 9.76163 -0.0190678 10.1012 0.0845371 10.4169L6.19879 29.3097C6.24484 29.4523 6.32209 29.5826 6.42484 29.691C6.52759 29.7994 6.6532 29.8831 6.79236 29.9359C6.93153 29.9888 7.08069 30.0093 7.22881 29.9961C7.37693 29.9829 7.5202 29.9363 7.64803 29.8597C7.6596 29.8597 8.73207 29.2197 10.7217 28.5964C12.5576 28.0197 15.5668 27.3331 19.4981 27.3331C23.4294 27.3331 26.4386 28.0197 28.2762 28.5964C30.2592 29.2197 31.3383 29.853 31.3465 29.858C31.4743 29.935 31.6176 29.9819 31.7659 29.9954C31.9141 30.0089 32.0634 29.9885 32.2028 29.9359C32.3421 29.8832 32.4679 29.7996 32.5709 29.6912C32.6738 29.5828 32.7513 29.4524 32.7974 29.3097L38.9117 10.4202C39.0183 10.1048 39.0286 9.76434 38.9414 9.44289C38.8542 9.12145 38.6735 8.83374 38.4225 8.61694ZM31.2689 27.5881C29.4511 26.7681 25.419 25.3331 19.4981 25.3331C13.5772 25.3331 9.5451 26.7681 7.72735 27.5881L2.19974 10.5086L10.3548 14.6084C10.7313 14.7956 11.1636 14.8338 11.5667 14.7157C11.9697 14.5976 12.3144 14.3316 12.5328 13.9701L19.4981 2.30378L26.4634 13.9785C26.6818 14.3395 27.0261 14.6052 27.4288 14.7233C27.8315 14.8414 28.2634 14.8034 28.6397 14.6168L36.7965 10.5152L31.2689 27.5881Z'
										fill='#FFF500'
									/>
								</svg>
							</div>
							<div className='popupLeaderboard__playerList'>
								<ul className='popupLeaderboard__table'>
									{leaderboardData.map((player, index) => (
										<li className='popupLeaderboard__tableItem' key={index}>
											<div className='popupLeaderboard__itemData'>
												<div className='popupLeaderboard__id'>
													<span>{player.position}</span>
												</div>
												<div className='popupLeaderboard__playerName'>
													<span>
														{player.wallet_address
															? player.wallet_address.slice(0, 4) +
															  '..' +
															  player.wallet_address.slice(-4)
															: 'anonymous'}
													</span>
												</div>
												<div className='popupLeaderboard__coins'>
													<span>{player.wallet_balance}</span>
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
			{isInviteOpen && (
				<div id='popupInvite' aria-hidden='true' className={popupInvite}>
					<div className='popupInvite__wrapper'>
						<div className='popupInvite__content'>
							<button
								onClick={inviteCloseToggler}
								type='button'
								className='popupInvite__close'
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
							<h3>
								Invite friends.
								<br />
								Get rewards together.
							</h3>
							<div className='popupInvite__header'>
								<h6>How it Works</h6>
								<div className='popupInvite__refInfo'>
									<div className='popupInvite__headerDescr'>
										<h6>Your Bonus:</h6>
										<div className='popupInvite__headerItem'>
											<h3>%</h3>
											<h3>10</h3>
										</div>
									</div>
									{totalReferrals >= 1 && (
										<div className='popupInvite__headerDescr'>
											<h6>Referred Friends:</h6>
											<div className='popupInvite__headerItem'>
												<img src={people} alt='people' />
												<h3>{totalReferrals}</h3>
											</div>
										</div>
									)}
								</div>
							</div>
							<div className='popupInvite__grid'>
								<div className='popupInvite__gridItem'>
									<ul className='popupInvite__list'>
										<li className='popupInvite__list-item'>
											<img src={envelope} alt='' className='popupInvite__icon' />
											<div className='popupInvite__list-itemDescr'>
												<h5>Sign up</h5>
												<p>Get your referral link and code</p>
											</div>
										</li>
										<li className='popupInvite__list-item'>
											<img src={link} alt='' className='popupInvite__icon' />
											<div className='popupInvite__list-itemDescr'>
												<h5>Invite</h5>
												<p>Friends via the referral link</p>
											</div>
										</li>
										<li className='popupInvite__list-item'>
											<img src={money} alt='' className='popupInvite__icon' />
											<div className='popupInvite__list-itemDescr'>
												<h5>Get rewards</h5>
												<p>Receive 10% of your friends’ staking</p>
											</div>
										</li>
									</ul>
								</div>
								<div className='popupInvite__gridItem'>
									<div className='popupInvite__item-box'>
										<div className='popupInvite__item-group'>
											<p>Your link</p>
											<p className='popupInvite__input'>
												{code.length
													? `${window.location.href.slice(
															8,
															window.location.href.lastIndexOf('/') + 1
													  )}${code}` // Get the index of the last slash and slice accordingly
													: 'link'}
												<button
													onClick={() => copyLink()}
													className='popupInvite__input-btn'
												>
													<img src={copy} alt='' />
												</button>
											</p>
										</div>
										<div className='popupInvite__item-group'>
											<button
												className='popupInvite__submit'
												onClick={generateCodeCallback}
											>
												Generate
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Header;

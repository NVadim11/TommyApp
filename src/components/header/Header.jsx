import React, { useEffect, useRef, useState } from "react"
import logo from '../../img/logo.svg'
import './Header.scss'

function Header() {

	const [isLeaderboardOpen, setLeaderboardOpen] = useState(false);

	function leaderboardOpenToggler() {	
		setLeaderboardOpen(true)
	}

	function leaderboardCloseToggler() {	
		setLeaderboardOpen(false)
		const htmlTag = document.getElementById('html');
		htmlTag.classList.remove('popupLeaderboard-show');
	}

	const popupClsTgl = isLeaderboardOpen ? "popupLeaderboard_show" : null;
	const popupClasses = `popupLeaderboard ${popupClsTgl}`

	const [isShown, setIsShown] = useState(false);
  	const containerRef = useRef(null);

	  const toggleVisibility = () => {
		setIsShown(!isShown);
		burgerAnimation(!isToggled);
	  };

	  const [isToggled, setIsToggled] = useState(false);

	  const burgerAnimation = () => {
		setIsToggled(!isToggled);
	  }

	  useEffect(() => {
		const handleOutsideClick = (event) => {
		  if (containerRef.current && !containerRef.current.contains(event.target)) {
			setIsShown(false);
		  }
		};
	
		document.addEventListener('mousedown', handleOutsideClick);
	
		return () => {
		  document.removeEventListener('mousedown', handleOutsideClick);
		};
	  }, []);

	  const fadeShow = () => {
		const htmlTag = document.getElementById('html');
		if (htmlTag) {
			htmlTag.classList.add('popupLeaderboard-show');
		}
	  };

	  const leaderBordBtn = () => {
		leaderboardOpenToggler();
		fadeShow();
		setIsShown(false);
	  };

	return (
		<>
		<header className="header">
	<div className="header__container">
		<div className="header__logo">
			<a href="#">
				<img src={logo} alt={logo}/>
			</a>
		</div>
		<div className="header__leaderboard">
			<button onClick={leaderBordBtn}>
				Leadboard
			</button>
		</div>
		<div className="header__mobileBtns">
			<div className="header__walletBtn">
				<button>
					<span>
						Connect wallet
					</span>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14 3.86839H1.5V3.36839L12.5 2.48839V3.36839H14V1.86839C14 0.768394 13.109 -0.00360548 12.021 0.151395L1.98 1.58539C0.891 1.74139 0 2.76839 0 3.86839V13.8684C0 14.3988 0.210714 14.9075 0.585786 15.2826C0.960859 15.6577 1.46957 15.8684 2 15.8684H14C14.5304 15.8684 15.0391 15.6577 15.4142 15.2826C15.7893 14.9075 16 14.3988 16 13.8684V5.86839C16 5.33796 15.7893 4.82925 15.4142 4.45418C15.0391 4.07911 14.5304 3.86839 14 3.86839ZM12.5 10.8744C12.303 10.8743 12.1078 10.8355 11.9258 10.76C11.7438 10.6845 11.5784 10.5739 11.4391 10.4346C11.2998 10.2952 11.1894 10.1297 11.114 9.94765C11.0387 9.76557 10.9999 9.57044 11 9.37339C11.0001 9.17635 11.0389 8.98124 11.1144 8.79922C11.1899 8.61719 11.3005 8.45182 11.4398 8.31253C11.5792 8.17324 11.7447 8.06277 11.9267 7.98742C12.1088 7.91208 12.304 7.87333 12.501 7.87339C12.899 7.87353 13.2806 8.03174 13.5619 8.31323C13.8432 8.59473 14.0011 8.97644 14.001 9.37439C14.0009 9.77235 13.8427 10.154 13.5612 10.4353C13.2797 10.7166 12.898 10.8745 12.5 10.8744Z" fill="white" />
					  </svg>
				</button>
			</div>

			<div className="header__mobileBurger"  ref={containerRef} onClick={toggleVisibility}>
				<div className={isToggled ? 'header__mobileBurger-btn is-active' : 'header__mobileBurger-btn'}>
					<span className="header__mobileBurger-line"></span>
					<span className="header__mobileBurger-line"></span>
					<span className="header__mobileBurger-line"></span>
				</div>
			
				{isShown && <div className="header__mobileMenu">
					<a className="header__mobileMenu-links" onClick={leaderBordBtn}>
						Leadboard
					</a>
					<a className="header__mobileMenu-links" href="https://www.youtube.com/" targer="_blank">
						tw
					</a>
					<a className="header__mobileMenu-links" href="https://web.telegram.org/" target="_blank">
						Telegram
					</a>
				</div>}
			</div>
		</div>		
	</div>
</header>
	{isLeaderboardOpen && (
			<div id="leaderboard" aria-hidden="true" className={popupClasses}>
			<div className="popupLeaderboard__wrapper">
				<div className="popupLeaderboard__content">
					<button onClick={leaderboardCloseToggler} type="button" className="popupLeaderboard__close">
					<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.5 9.5L2 2M9.5 9.5L17 17M9.5 9.5L17 2M9.5 9.5L2 17" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
						</button>
					<div className="popupLeaderboard__title">
						<h4>Leaderboard</h4>
					</div>
					<div className="popupLeaderboard__crownIcon">
						<svg width="39" height="30" viewBox="0 0 39 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M38.4225 8.61694C38.174 8.39826 37.8666 8.25901 37.5394 8.21688C37.2122 8.17474 36.88 8.23161 36.585 8.38028L28.0134 12.6902L20.9292 0.815487C20.7806 0.566685 20.5707 0.360855 20.32 0.21797C20.0692 0.0750856 19.7861 0 19.4981 0C19.2101 0 18.927 0.0750856 18.6763 0.21797C18.4255 0.360855 18.2157 0.566685 18.067 0.815487L10.9828 12.6902L2.41456 8.38195C2.11957 8.23341 1.78756 8.17631 1.46042 8.21787C1.13329 8.25944 0.825693 8.39779 0.576441 8.61547C0.327189 8.83316 0.147451 9.12043 0.0599063 9.44103C-0.0276385 9.76163 -0.0190678 10.1012 0.0845371 10.4169L6.19879 29.3097C6.24484 29.4523 6.32209 29.5826 6.42484 29.691C6.52759 29.7994 6.6532 29.8831 6.79236 29.9359C6.93153 29.9888 7.08069 30.0093 7.22881 29.9961C7.37693 29.9829 7.5202 29.9363 7.64803 29.8597C7.6596 29.8597 8.73207 29.2197 10.7217 28.5964C12.5576 28.0197 15.5668 27.3331 19.4981 27.3331C23.4294 27.3331 26.4386 28.0197 28.2762 28.5964C30.2592 29.2197 31.3383 29.853 31.3465 29.858C31.4743 29.935 31.6176 29.9819 31.7659 29.9954C31.9141 30.0089 32.0634 29.9885 32.2028 29.9359C32.3421 29.8832 32.4679 29.7996 32.5709 29.6912C32.6738 29.5828 32.7513 29.4524 32.7974 29.3097L38.9117 10.4202C39.0183 10.1048 39.0286 9.76434 38.9414 9.44289C38.8542 9.12145 38.6735 8.83374 38.4225 8.61694ZM31.2689 27.5881C29.4511 26.7681 25.419 25.3331 19.4981 25.3331C13.5772 25.3331 9.5451 26.7681 7.72735 27.5881L2.19974 10.5086L10.3548 14.6084C10.7313 14.7956 11.1636 14.8338 11.5667 14.7157C11.9697 14.5976 12.3144 14.3316 12.5328 13.9701L19.4981 2.30378L26.4634 13.9785C26.6818 14.3395 27.0261 14.6052 27.4288 14.7233C27.8315 14.8414 28.2634 14.8034 28.6397 14.6168L36.7965 10.5152L31.2689 27.5881Z" fill="#FFF500"/>
						</svg>
					</div>
					<div className="popupLeaderboard__playerList">
						<ul className="popupLeaderboard__table">
							<li className="popupLeaderboard__tableItem">
								<div className="popupLeaderboard__itemData">
									<div className="popupLeaderboard__id">
										<span>#1</span>
									</div>
									<div className="popupLeaderboard__playerIcon">
										<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
										</svg>
									</div>
									<div className="popupLeaderboard__playerName">
										<span>Player</span>
									</div>
									<div className="popupLeaderboard__coins">
										<span>99999</span>
									</div>
								</div>
							</li>
							<li className="popupLeaderboard__tableItem">
								<div className="popupLeaderboard__itemData">
									<div className="popupLeaderboard__id">
										<span>#1</span>
									</div>
									<div className="popupLeaderboard__playerIcon">
										<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
										</svg>
									</div>
									<div className="popupLeaderboard__playerName">
										<span>Player</span>
									</div>
									<div className="popupLeaderboard__coins">
										<span>99999</span>
									</div>
								</div>
							</li>
							<li className="popupLeaderboard__tableItem">
								<div className="popupLeaderboard__itemData">
									<div className="popupLeaderboard__id">
										<span>#1</span>
									</div>
									<div className="popupLeaderboard__playerIcon">
										<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
										</svg>
									</div>
									<div className="popupLeaderboard__playerName">
										<span>Player</span>
									</div>
									<div className="popupLeaderboard__coins">
										<span>99999</span>
									</div>
								</div>
							</li>
							<li className="popupLeaderboard__tableItem">
								<div className="popupLeaderboard__itemData">
									<div className="popupLeaderboard__id">
										<span>#1</span>
									</div>
									<div className="popupLeaderboard__playerIcon">
										<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
										</svg>
									</div>
									<div className="popupLeaderboard__playerName">
										<span>Player</span>
									</div>
									<div className="popupLeaderboard__coins">
										<span>99999</span>
									</div>
								</div>
							</li>
							<li className="popupLeaderboard__tableItem">
								<div className="popupLeaderboard__itemData">
									<div className="popupLeaderboard__id">
										<span>#1</span>
									</div>
									<div className="popupLeaderboard__playerIcon">
										<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
										</svg>
									</div>
									<div className="popupLeaderboard__playerName">
										<span>Player</span>
									</div>
									<div className="popupLeaderboard__coins">
										<span>99999</span>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			</div>
	)}	
		</>
	)
}

export default Header;
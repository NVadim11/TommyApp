import React from "react"
import './Header.scss'

function Header() {
	return (
<header className="header">
	<div className="header__container">
		<div className="header__logo">
			<a href="">
				<img src="img/logo.svg" alt=""/>
			</a>
		</div>
		<div className="header__leaderboard">
			<button data-leaderboard-popup="#leaderboard">
				Leadboard
			</button>
		</div>
		<div className="header__mobileBtns">
			<div className="header__walletBtn">
				<button>
					<span>
						Connect wallet
					</span>
					{/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14 3.86839H1.5V3.36839L12.5 2.48839V3.36839H14V1.86839C14 0.768394 13.109 -0.00360548 12.021 0.151395L1.98 1.58539C0.891 1.74139 0 2.76839 0 3.86839V13.8684C0 14.3988 0.210714 14.9075 0.585786 15.2826C0.960859 15.6577 1.46957 15.8684 2 15.8684H14C14.5304 15.8684 15.0391 15.6577 15.4142 15.2826C15.7893 14.9075 16 14.3988 16 13.8684V5.86839C16 5.33796 15.7893 4.82925 15.4142 4.45418C15.0391 4.07911 14.5304 3.86839 14 3.86839ZM12.5 10.8744C12.303 10.8743 12.1078 10.8355 11.9258 10.76C11.7438 10.6845 11.5784 10.5739 11.4391 10.4346C11.2998 10.2952 11.1894 10.1297 11.114 9.94765C11.0387 9.76557 10.9999 9.57044 11 9.37339C11.0001 9.17635 11.0389 8.98124 11.1144 8.79922C11.1899 8.61719 11.3005 8.45182 11.4398 8.31253C11.5792 8.17324 11.7447 8.06277 11.9267 7.98742C12.1088 7.91208 12.304 7.87333 12.501 7.87339C12.899 7.87353 13.2806 8.03174 13.5619 8.31323C13.8432 8.59473 14.0011 8.97644 14.001 9.37439C14.0009 9.77235 13.8427 10.154 13.5612 10.4353C13.2797 10.7166 12.898 10.8745 12.5 10.8744Z" fill="white" />
					  </svg> */}
				</button>
			</div>

			<div className="header__mobileBurger">
				<div className="header__mobileBurger-btn">
					<span className="header__mobileBurger-line"></span>
					<span className="header__mobileBurger-line"></span>
					<span className="header__mobileBurger-line"></span>
				</div>
				<div className="header__mobileMenu">
					<a className="header__mobileMenu-links" href="">
						Leadboard
					</a>
					<a className="header__mobileMenu-links" href="https://www.youtube.com/" targer="_blank">
						tw
					</a>
					<a className="header__mobileMenu-links" href="https://web.telegram.org/" target="_blank" rel="noreferrer">
						Telegram
					</a>
				</div>
			</div>
		</div>
		
	</div>
</header>
	)
}

export default Header;
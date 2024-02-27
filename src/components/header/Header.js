import React from "react"
import './Header.scss'

function Header() {
	return (
<header className="header">
	<div className="header__container">
		<div className="header__logo">
			{/* <a href="">
				<img src="img/logo.svg" alt=""/>
			</a> */}
		</div>
		<div className="header__leaderboard">
			<button>
				Leadboard
			</button>
		</div>
		<div className="header__mobileBtns">
			<div className="header__walletBtn">
				<button>
					<span>
						Connect wallet
					</span>
				</button>
			</div>

			<div className="header__mobileBurger">
				<div className="header__mobileBurger-btn">
					<span className="header__mobileBurger-line"></span>
					<span className="header__mobileBurger-line"></span>
					<span className="header__mobileBurger-line"></span>
				</div>
				{/* <div className="header__mobileMenu">
					<a className="header__mobileMenu-links" href="">
						Leadboard
					</a>
					<a className="header__mobileMenu-links" href="https://www.youtube.com/" targer="_blank">
						tw
					</a>
					<a className="header__mobileMenu-links" href="https://web.telegram.org/" target="_blank" rel="noreferrer">
						Telegram
					</a>
				</div> */}
			</div>
		</div>
		
	</div>
</header>
	)
}

export default Header;
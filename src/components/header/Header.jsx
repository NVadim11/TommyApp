import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from "react"
import copy from "../../img/copy.svg"
import envelope from "../../img/envelope.svg"
import link from "../../img/link.svg"
import logo from "../../img/logo.svg"
import money from "../../img/money.svg"
import people from "../../img/people-icon.svg"
import {
  useGetLeaderboardMutation
} from "../../services/phpService"
import { toggleMuteAllSounds } from "../../utility/Audio"
import { AuthContext } from '../helper/contexts'
import { useGenerateCodeMutation } from "../../services/phpService";
import "./Header.scss"

function Header() {
  const authContext = useContext(AuthContext);
  const { connected, publicKey } = useWallet();
  const [isToggled, setIsToggled] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [totalPoints, setTotalPoints] = useState(null);
  const [leaderboardData, setLeaderboardData] = useState([]);

  const [isLeaderboardOpen, setLeaderboardOpen] = useState(false);
  const [isInviteOpen, setInviteOpen] = useState(false);
  const [isAirOpen, setAirOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [isElementPresent, setIsElementPresent] = useState(false);

  const intervalRef = useRef(null);
  const initLeadersRef = useRef(null);
  const wallet_address = publicKey?.toBase58();

  const popupClsTgl = isLeaderboardOpen ? "popupLeaderboard_show" : null;
  const popupClasses = `popupLeaderboard ${popupClsTgl}`;

  const popupInvTgl = isInviteOpen ? "popupInvite_show" : null;
  const popupInvite = `popupInvite ${popupInvTgl}`;

  const popupAirTgl= isAirOpen ? "popupAirdrop_show" : null;
  const popupAirdrop = `popupAirdrop ${popupAirTgl}`;

  const containerRef = useRef(null);
  const [getLeaderboard] = useGetLeaderboardMutation();

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          const targetElement = document.getElementById("header__totalScore");
          if (targetElement) {
            setIsElementPresent(true);
          }
        } else if (
          mutation.type === "childList" &&
          mutation.removedNodes.length > 0
        ) {
          const targetElement = document.getElementById("header__totalScore");
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

  const fetchTotalPoints = async () => {
    try {
      const response = await axios.get(`https://admin.prodtest1.space/api/users/${wallet_address}`);
      setTotalPoints(response.data?.wallet_balance);
      console.log('Total points fetched successfully');
    } catch (error) {
      console.error('Error fetching total points:', error.message);
    }
  };

  const fetchLeaderboardData = async () => {
    try {
      const response = await axios.get(`https://admin.prodtest1.space/api/liders`);
      setLeaderboardData(response.data);
      console.log('Leaderboard data fetched successfully');
    } catch (error) {
      console.error('Error fetching leaderboard data:', error.message);
    }
  };

  useEffect(() => {
    fetchLeaderboardData();
    initLeadersRef.current = setInterval(() => {
      fetchLeaderboardData();
    }, 10000);
    if (connected) {
      clearInterval(initLeadersRef.current);
      setTotalPoints(null);
      fetchTotalPoints();      
      intervalRef.current = setInterval(() => {
        fetchTotalPoints();
        fetchLeaderboardData();
      }, 10000);
      localStorage.setItem("wallet_id", wallet_address);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [connected, wallet_address]);

  // useEffect(() => {
  //   if (connected) {
  //     fetchTotalPoints();
  //     fetchLeaderboardData();
  //   }
  // }, [authContext, connected]);

  useEffect(() => {
    const fetchData = async () => {
      if (Object.keys(authContext).length) {
        const res = await getLeaderboard(authContext.wallet_address).unwrap();
        setLeaderboardData(res);
        const intervalId = setInterval(() => {
          getLeaderboard(authContext.wallet_address)
            .unwrap()
            .then((data) => setLeaderboardData(data))
            .catch((error) => console.error('Error refreshing leaderboard:', error));
        }, 10000);
        return intervalId;
      }
    };

    let intervalId;

    if (connected) {
      fetchData().then((id) => {
        intervalId = id;
      });
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [authContext, connected]);

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
      if (event.target.closest(".header__mobileBurger")) return;
      setIsShown(false);
      setIsToggled(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const leaderBordBtn = () => {
    setLeaderboardOpen(true);
    fadeShow();
    setIsShown(false);
  };

  const inviteFriendsBtn = () => {
    setInviteOpen(true);
    fadeShowInvite();
    setIsShown(false);
  }

  const airdropBtn = () => {
    setAirOpen(true);
    fadeShowAir();
    setIsShown(false);
  }

  const fadeShow = () => {
    const htmlTag = document.getElementById("html");
    if (htmlTag) htmlTag.classList.add("popupLeaderboard-show");
  };

  const fadeShowInvite = () => {
    const htmlTag = document.getElementById("html");
    if (htmlTag) htmlTag.classList.add("popupInvite-show");
  };

  const fadeShowAir = () => {
    const htmlTag = document.getElementById("html");
    if (htmlTag) htmlTag.classList.add("popupAirdrop-show");
  };

  const leaderboardCloseToggler = () => {
    setLeaderboardOpen(false);
    const htmlTag = document.getElementById("html");
    if (htmlTag) htmlTag.classList.remove("popupLeaderboard-show");
  };

  const inviteCloseToggler = () => {
    setInviteOpen(false);
    const htmlTag = document.getElementById("html");
    if (htmlTag) htmlTag.classList.remove("popupInvite-show");
  };

  const airCloseToggler = () => {
    setAirOpen(false);
    const htmlTag = document.getElementById("html");
    if (htmlTag) htmlTag.classList.remove("popupAirdrop-show");
  };

  const [code, setCode] = useState("");
  const [generateCode] = useGenerateCodeMutation();

  useEffect(() => {
    if (authContext && authContext.referral_code) {
      setCode(authContext.referral_code);
    }
  }, [authContext]);

  const copyLink = async () => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(`${window.location.href}${code}`);
    } else {
      return document.execCommand('copy', true, `${window.location.href}${code}`);
    }
  }

  const generateCodeCallback = async () => {
    try {
      if(authContext.wallet_address){
        const res = await generateCode(authContext.wallet_address).unwrap();
        res && res.code && setCode(res.code);
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <a href="#">
              <img src={logo} alt={logo} />
            </a>
          </div>
          <div
            className={
              isElementPresent
                ? "header__leaderboard header__leaderboardCenter"
                : "header__leaderboard"
            }
          >
            <button onClick={leaderBordBtn}>Leaderboard</button>
          </div>
          <div className="header__mobileBtns">
            {authContext && totalPoints !== null && (
              <div id="header__totalScore" className="header__totalScore">
                Total Points: <span>{totalPoints}</span>
              </div>
            )}
            <div className="soundToggler">
              {isVisible ? (
                <div
                  className="soundToggler__itemOn"
                  onClick={toggleVisibilitySound}
                >
                  <button>
                    <svg
                      width="23"
                      height="19"
                      viewBox="0 0 23 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.697 4.80667C19.697 4.80667 21.2996 6.37109 21.2996 8.97844C21.2996 11.5858 19.697 13.1502 19.697 13.1502"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 11.4367V7.56325C1 7.01003 1.22512 6.47948 1.62584 6.0883C2.02656 5.69712 2.57006 5.47736 3.13676 5.47736H6.23507C6.44396 5.47731 6.64825 5.41748 6.82267 5.30527L13.233 1.17939C13.394 1.07585 13.5808 1.01679 13.7735 1.00849C13.9661 1.00019 14.1575 1.04295 14.3273 1.13223C14.497 1.22152 14.6389 1.354 14.7378 1.51563C14.8367 1.67725 14.8889 1.86199 14.8889 2.05025V16.9497C14.8889 17.138 14.8367 17.3227 14.7378 17.4844C14.6389 17.646 14.497 17.7785 14.3273 17.8677C14.1575 17.957 13.9661 17.9998 13.7735 17.9915C13.5808 17.9832 13.394 17.9241 13.233 17.8206L6.82267 13.6947C6.64825 13.5825 6.44396 13.5227 6.23507 13.5226H3.13676C2.57006 13.5226 2.02656 13.3029 1.62584 12.9117C1.22512 12.5205 1 11.9899 1 11.4367Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <div
                  className="soundToggler__itemOff"
                  onClick={toggleVisibilitySound}
                >
                  <button>
                    <svg
                      width="26"
                      height="19"
                      viewBox="0 0 26 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.1947 11.5865L22.2812 9.50001M22.2812 9.50001L24.3677 7.41351M22.2812 9.50001L20.1947 7.41351M22.2812 9.50001L24.3677 11.5865"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.6322 11.4373V7.56269C1.6322 7.00932 1.85203 6.47861 2.24332 6.08732C2.63462 5.69602 3.16533 5.4762 3.7187 5.4762H6.74412C6.9481 5.47614 7.14758 5.4163 7.31791 5.30406L13.5774 1.17697C13.7347 1.0734 13.917 1.01432 14.1052 1.00602C14.2933 0.997715 14.4802 1.04049 14.646 1.1298C14.8118 1.21911 14.9503 1.35163 15.0468 1.5133C15.1434 1.67497 15.1944 1.85977 15.1944 2.04808V16.9519C15.1944 17.1402 15.1434 17.325 15.0468 17.4867C14.9503 17.6484 14.8118 17.7809 14.646 17.8702C14.4802 17.9595 14.2933 18.0023 14.1052 17.994C13.917 17.9857 13.7347 17.9266 13.5774 17.823L7.31791 13.6959C7.14758 13.5837 6.9481 13.5239 6.74412 13.5238H3.7187C3.16533 13.5238 2.63462 13.304 2.24332 12.9127C1.85203 12.5214 1.6322 11.9907 1.6322 11.4373Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
            <div className="header__walletBtn">
              <WalletMultiButton />
            </div>
            <div className="header__inviteBtn">
              <button onClick={inviteFriendsBtn}>
                Invite a friend
              </button>
            </div>
          </div>
        </div>
        {/* <div className="header__airdropBtn">
          <button onClick={airdropBtn}>
            Claim an airdrop
          </button>
        </div> */}
      </header>
      {isLeaderboardOpen && (
        <div id="leaderboard" aria-hidden="true" className={popupClasses}>
          <div className="popupLeaderboard__wrapper">
            <div className="popupLeaderboard__content">
              <button
                onClick={leaderboardCloseToggler}
                type="button"
                className="popupLeaderboard__close"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 9.5L2 2M9.5 9.5L17 17M9.5 9.5L17 2M9.5 9.5L2 17"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="popupLeaderboard__title">
                <h4>Leaderboard</h4>
              </div>
              <div className="popupLeaderboard__crownIcon">
                <svg
                  width="39"
                  height="30"
                  viewBox="0 0 39 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.4225 8.61694C38.174 8.39826 37.8666 8.25901 37.5394 8.21688C37.2122 8.17474 36.88 8.23161 36.585 8.38028L28.0134 12.6902L20.9292 0.815487C20.7806 0.566685 20.5707 0.360855 20.32 0.21797C20.0692 0.0750856 19.7861 0 19.4981 0C19.2101 0 18.927 0.0750856 18.6763 0.21797C18.4255 0.360855 18.2157 0.566685 18.067 0.815487L10.9828 12.6902L2.41456 8.38195C2.11957 8.23341 1.78756 8.17631 1.46042 8.21787C1.13329 8.25944 0.825693 8.39779 0.576441 8.61547C0.327189 8.83316 0.147451 9.12043 0.0599063 9.44103C-0.0276385 9.76163 -0.0190678 10.1012 0.0845371 10.4169L6.19879 29.3097C6.24484 29.4523 6.32209 29.5826 6.42484 29.691C6.52759 29.7994 6.6532 29.8831 6.79236 29.9359C6.93153 29.9888 7.08069 30.0093 7.22881 29.9961C7.37693 29.9829 7.5202 29.9363 7.64803 29.8597C7.6596 29.8597 8.73207 29.2197 10.7217 28.5964C12.5576 28.0197 15.5668 27.3331 19.4981 27.3331C23.4294 27.3331 26.4386 28.0197 28.2762 28.5964C30.2592 29.2197 31.3383 29.853 31.3465 29.858C31.4743 29.935 31.6176 29.9819 31.7659 29.9954C31.9141 30.0089 32.0634 29.9885 32.2028 29.9359C32.3421 29.8832 32.4679 29.7996 32.5709 29.6912C32.6738 29.5828 32.7513 29.4524 32.7974 29.3097L38.9117 10.4202C39.0183 10.1048 39.0286 9.76434 38.9414 9.44289C38.8542 9.12145 38.6735 8.83374 38.4225 8.61694ZM31.2689 27.5881C29.4511 26.7681 25.419 25.3331 19.4981 25.3331C13.5772 25.3331 9.5451 26.7681 7.72735 27.5881L2.19974 10.5086L10.3548 14.6084C10.7313 14.7956 11.1636 14.8338 11.5667 14.7157C11.9697 14.5976 12.3144 14.3316 12.5328 13.9701L19.4981 2.30378L26.4634 13.9785C26.6818 14.3395 27.0261 14.6052 27.4288 14.7233C27.8315 14.8414 28.2634 14.8034 28.6397 14.6168L36.7965 10.5152L31.2689 27.5881Z"
                    fill="#FFF500"
                  />
                </svg>
              </div>
              <div className="popupLeaderboard__playerList">
                <ul className="popupLeaderboard__table">
                  {leaderboardData.map((player, index) => (
                    <li className="popupLeaderboard__tableItem" key={index}>
                      <div className="popupLeaderboard__itemData">
                        <div className="popupLeaderboard__id">
                          <span>{player.position}</span>
                        </div>
                        <div className="popupLeaderboard__playerName">
                          <span>
                            {player.wallet_address.slice(0, 4) +
                              ".." +
                              player.wallet_address.slice(-4)}
                          </span>
                        </div>
                        <div className="popupLeaderboard__coins">
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
      {
        isInviteOpen && (
          <div id="popupInvite" aria-hidden="true" className={popupInvite}>
          <div className="popupInvite__wrapper">
            <div className="popupInvite__content">
              <button onClick={inviteCloseToggler} type="button" className="popupInvite__close"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 9.5L2 2M9.5 9.5L17 17M9.5 9.5L17 2M9.5 9.5L2 17"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <h3>
                Invite friends. 
                <br />
                Earn together
              </h3>
              <div className="popupInvite__header">
                <h6>
                  How it Works
                </h6>
                <div className="popupInvite__headerDescr">
                  <h6>
                    Referred Friends:
                  </h6>
                  <div className="popupInvite__headerItem">
                    <img src={people} alt="people"/>
                      <h3>200</h3>
                  </div>
                </div>
              </div>
              <div className="popupInvite__grid">
                <div className="popupInvite__gridItem">
                  <ul className="popupInvite__list">
                    <li className="popupInvite__list-item">
                      <img src={envelope} alt="" className="popupInvite__icon" />
                      <div className="popupInvite__list-itemDescr">
                        <h5>Get referral link</h5>
                        <p>Register and get your unique referral link and code</p>
                      </div>
                    </li>
                    <li className="popupInvite__list-item">
                      <img src={link} alt="" className="popupInvite__icon" />
                      <div className="popupInvite__list-itemDescr">
                        <h5>Invite your friends</h5>
                        <p>Invite your friends to register via your link or code</p>
                      </div>
                    </li>
                    <li className="popupInvite__list-item">
                      <img src={money} alt="" className="popupInvite__icon" />
                      <div className="popupInvite__list-itemDescr">
                        <h5>Earn crypto together</h5>
                        <p>You will receive up to $2,000 USD when your friends stake CRO on Crypto.com Exchange</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="popupInvite__gridItem">
                  <div className="popupInvite__item-box">
                    <div className="popupInvite__item-group">
                      <p>Your referral link</p>
                      <p className="popupInvite__input">
                        {code.length ? `${window.location.href}${code}` : "link"}
                        <button onClick={() => copyLink()} className="popupInvite__input-btn">
                            <img src={copy} alt=""/>
                            {/* <span></span> */}
                        </button>
                      </p>
                    </div>
                    <div className="popupInvite__item-group">
                      <button className="popupInvite__submit" onClick={generateCodeCallback}>
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      }
      {/* {
        isAirOpen && (
          <div id="popupAirdrop" aria-hidden="true" className={popupAirdrop}>
            <div className="popupAirdrop__wrapper">
            <div className="popupAirdrop__content">
              <button onClick={airCloseToggler} type="button" className="popupAirdrop__close"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 9.5L2 2M9.5 9.5L17 17M9.5 9.5L17 2M9.5 9.5L2 17"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="popupAirdrop__header">
                <p>
                  You're almost there
                </p>
                <h4>
                To start a game:
                </h4>
              </div>
              <div className="popupAirdrop__form">
                <div className="popupAirdrop__form-item">
                  <div className="popupAirdrop__form-itemText">
                    <span className="1">1</span>
                  </div>
                  <button className="popupAirdrop__form-btn">
                    <span>
                      Connect
                    </span>
                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.364 2.503C0.345333 2.40967 0.326667 2.28133 0.308 2.118C0.294 1.95 0.28 1.775 0.266 1.593C0.256667 1.411 0.249667 1.24767 0.245 1.103C0.240333 0.953666 0.238 0.850999 0.238 0.795C0.765333 0.757666 1.365 0.724999 2.037 0.696999C2.71367 0.669 3.39733 0.655 4.088 0.655C4.606 0.655 5.10767 0.666666 5.593 0.69C6.083 0.708666 6.531 0.746 6.937 0.802C6.94167 1.13333 6.93233 1.44833 6.909 1.747C6.88567 2.041 6.85767 2.265 6.825 2.419C6.73167 2.419 6.59633 2.419 6.419 2.419C6.24167 2.41433 6.04333 2.40967 5.824 2.405C5.60467 2.40033 5.38767 2.398 5.173 2.398C4.95833 2.39333 4.77167 2.391 4.613 2.391C4.61767 2.56367 4.62467 2.82267 4.634 3.168C4.648 3.50867 4.66433 3.903 4.683 4.351C4.70167 4.799 4.72033 5.268 4.739 5.758C4.76233 6.248 4.78333 6.731 4.802 7.207C4.82067 7.683 4.837 8.11933 4.851 8.516C4.86967 8.91267 4.88367 9.23933 4.893 9.496C4.907 9.75267 4.914 9.909 4.914 9.965C4.75067 9.98833 4.536 10.0093 4.27 10.028C4.00867 10.0513 3.74733 10.0677 3.486 10.077C3.22467 10.091 3.01233 10.098 2.849 10.098C2.835 9.82267 2.821 9.482 2.807 9.076C2.793 8.67 2.78133 8.229 2.772 7.753C2.76267 7.27233 2.75333 6.78233 2.744 6.283C2.73467 5.779 2.72767 5.289 2.723 4.813C2.71833 4.337 2.716 3.90067 2.716 3.504C2.716 3.28933 2.716 3.091 2.716 2.909C2.716 2.727 2.71833 2.56367 2.723 2.419C2.555 2.42833 2.36833 2.43767 2.163 2.447C1.96233 2.45167 1.75467 2.45867 1.54 2.468C1.32533 2.47733 1.11767 2.48433 0.917 2.489C0.716333 2.49367 0.532 2.49833 0.364 2.503ZM13.0064 10.112C12.9271 9.86467 12.8408 9.58933 12.7474 9.286C12.6588 8.978 12.5654 8.663 12.4674 8.341C12.3741 8.01433 12.2854 7.69933 12.2014 7.396C12.1174 7.088 12.0428 6.81267 11.9774 6.57C11.9168 6.32733 11.8724 6.136 11.8444 5.996L12.0754 5.968C12.0568 6.02867 12.0124 6.15233 11.9424 6.339C11.8724 6.521 11.7861 6.74267 11.6834 7.004C11.5808 7.26533 11.4711 7.54533 11.3544 7.844C11.2378 8.138 11.1211 8.42733 11.0044 8.712C10.8878 8.992 10.7804 9.24633 10.6824 9.475C10.5844 9.70367 10.5074 9.881 10.4514 10.007L8.30244 9.93C8.2511 9.47733 8.2021 8.97567 8.15544 8.425C8.11344 7.87433 8.07144 7.28633 8.02944 6.661C7.9921 6.03567 7.9571 5.387 7.92444 4.715C7.89644 4.03833 7.8731 3.35 7.85444 2.65C7.83577 1.94533 7.82644 1.24067 7.82644 0.535999L9.95444 0.62C9.95444 1.054 9.94977 1.52767 9.94044 2.041C9.93577 2.54967 9.92877 3.07 9.91944 3.602C9.91477 4.12933 9.9101 4.64967 9.90544 5.163C9.90077 5.67167 9.89844 6.14533 9.89844 6.584C9.9031 7.02267 9.9101 7.403 9.91944 7.725L9.80744 7.823C9.85877 7.669 9.92644 7.46367 10.0104 7.207C10.0991 6.95033 10.1948 6.66567 10.2974 6.353C10.4048 6.04033 10.5121 5.71833 10.6194 5.387C10.7268 5.05567 10.8271 4.736 10.9204 4.428C11.0184 4.11533 11.0978 3.83767 11.1584 3.595C11.2238 3.35233 11.2634 3.16333 11.2774 3.028L12.7614 3.007C12.7661 3.08167 12.7871 3.24267 12.8244 3.49C12.8664 3.73733 12.9201 4.036 12.9854 4.386C13.0554 4.736 13.1278 5.107 13.2024 5.499C13.2818 5.88633 13.3588 6.26433 13.4334 6.633C13.5128 6.997 13.5851 7.32133 13.6504 7.606C13.7158 7.89067 13.7694 8.096 13.8114 8.222L13.5524 8.243C13.6411 7.74833 13.7204 7.165 13.7904 6.493C13.8604 5.81633 13.9188 5.114 13.9654 4.386C14.0168 3.658 14.0541 2.96033 14.0774 2.293C14.1008 1.621 14.1124 1.04467 14.1124 0.564L16.0514 0.368C16.0514 1.194 16.0188 2.03167 15.9534 2.881C15.8928 3.72567 15.8134 4.54 15.7154 5.324C15.6174 6.108 15.5171 6.82433 15.4144 7.473C15.3118 8.117 15.2161 8.65367 15.1274 9.083C15.0434 9.51233 14.9851 9.79233 14.9524 9.923L13.0064 10.112Z" fill="white"/>
                    </svg>
                  </button>
                </div>
                <div className="popupAirdrop__form-item">
                  <div className="popupAirdrop__form-itemText">
                    <span className="2">2</span>
                  </div>
                  <button className="popupAirdrop__form-btn">
                    <span>
                        Connect
                    </span>
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.63574 11.2012C9.13682 13.3786 11.8375 13.3786 16.3385 11.2012" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M13.6381 12.5081L14.5383 14.25C14.5383 14.25 18.2931 13.0934 19.4895 11.2016C19.4895 10.3306 19.9666 4.10584 16.7888 2.05645C15.4385 1.18548 13.188 0.75 13.188 0.75L12.2877 2.49194H10.4873" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.36171 12.5081L6.46149 14.25C6.46149 14.25 2.7067 13.0934 1.51031 11.2016C1.51031 10.3306 1.03319 4.10584 4.21096 2.05645C5.56128 1.18548 7.81182 0.75 7.81182 0.75L8.71203 2.49194H10.5125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.33665 9.46043C6.59127 9.46043 5.98633 8.68092 5.98633 7.7185C5.98633 6.75608 6.59127 5.97656 7.33665 5.97656C8.08203 5.97656 8.68698 6.75608 8.68698 7.7185C8.68698 8.68092 8.08203 9.46043 7.33665 9.46043ZM13.6382 9.46043C12.8928 9.46043 12.2878 8.68092 12.2878 7.7185C12.2878 6.75608 12.8928 5.97656 13.6382 5.97656C14.3835 5.97656 14.9885 6.75608 14.9885 7.7185C14.9885 8.68092 14.3835 9.46043 13.6382 9.46043Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
                <div className="popupAirdrop__form-item">
                  <div className="popupAirdrop__form-itemText">
                    <span className="3">3</span>
                  </div>
                  <button className="popupAirdrop__form-btn">
                    <span>
                        Connect
                    </span>
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.63574 11.2012C9.13682 13.3786 11.8375 13.3786 16.3385 11.2012" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M13.6381 12.5081L14.5383 14.25C14.5383 14.25 18.2931 13.0934 19.4895 11.2016C19.4895 10.3306 19.9666 4.10584 16.7888 2.05645C15.4385 1.18548 13.188 0.75 13.188 0.75L12.2877 2.49194H10.4873" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.36171 12.5081L6.46149 14.25C6.46149 14.25 2.7067 13.0934 1.51031 11.2016C1.51031 10.3306 1.03319 4.10584 4.21096 2.05645C5.56128 1.18548 7.81182 0.75 7.81182 0.75L8.71203 2.49194H10.5125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.33665 9.46043C6.59127 9.46043 5.98633 8.68092 5.98633 7.7185C5.98633 6.75608 6.59127 5.97656 7.33665 5.97656C8.08203 5.97656 8.68698 6.75608 8.68698 7.7185C8.68698 8.68092 8.08203 9.46043 7.33665 9.46043ZM13.6382 9.46043C12.8928 9.46043 12.2878 8.68092 12.2878 7.7185C12.2878 6.75608 12.8928 5.97656 13.6382 5.97656C14.3835 5.97656 14.9885 6.75608 14.9885 7.7185C14.9885 8.68092 14.3835 9.46043 13.6382 9.46043Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            </div>
          </div>
        )
      } */}
    </>
  );
}

export default Header;

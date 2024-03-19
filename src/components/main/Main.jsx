import { useWallet } from '@solana/wallet-adapter-react'
import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from "react"
import sadIdle from '../../img/1_idle.gif'
import sadSpeak from '../../img/1talk.gif'
import normalIdle from '../../img/2_idle.gif'
import normalSpeak from '../../img/2talk.gif'
import smileIdle from '../../img/3_idle.gif'
import smileSpeak from '../../img/3talk.gif'
import happyIdle from '../../img/4_idle.gif'
import happySpeak from '../../img/4talk.gif'
import finalForm from '../../img/finalForm.gif'
import smile from '../../img/smile.png'
// import goldForm from '../../img/gold.gif'
import { useLocation } from "react-router-dom"
import catCoin from '../../img/cat_coin.png'
import catCoinMove from '../../img/cat_coin_move.png'
import { useTwitterAuthMutation } from "../../services/auth"
import Boost from '../boost/Boost'
import { AuthContext } from '../helper/contexts'
import './Main.scss'

function Main() {

    const authContext = useContext(AuthContext);
    const [idleState, setidleState] = useState(true);
    const [currentImage, setCurrentImage] = useState(true);
    const [coinState, setCoinState] = useState(false);
    const [currCoins, setCurrCoins] = useState(0);
    const [currEnergy, setCurrEnergy] = useState(0);
    const [isCoinsChanged, setIsCoinsChanged] = useState(false);
    const [catIdle, setCatIdle] = useState(sadIdle);
    const [catSpeak, setCatSpeak] = useState(sadSpeak);
    const timeoutRef = useRef(null);
    const coinRef = useRef(null);
    const accumulatedCoinsRef = useRef(0);
    const { publicKey, connected } = useWallet();
    const wallet_address = publicKey?.toBase58();
    const [requestAuth] = useTwitterAuthMutation();
    const location = useLocation();
    const formRef = useRef(null);

    const executeScroll = () => formRef.current.scrollIntoView();
    const [isChildClicked, setIsChildClicked] = useState(false);

    const handleChildClick = (clicked) => {
      setIsChildClicked(clicked); // Receive clicked status from child component
      boostActive();
    };

    const boostActive = () => {
        alert('BOOST ACTIVE');
    }

    useEffect(() => {
        const energyInterval = setInterval(() => {
            setCurrEnergy(prevEnergy => {
                let energyDecrement = 1;
                if (prevEnergy >= 751 && prevEnergy <= 990) {
                    energyDecrement = 2;
                } else if (prevEnergy >= 991 && prevEnergy <= 1000) {
                    energyDecrement = 3;
                }
                return Math.max(prevEnergy - energyDecrement, 0);
            });
        }, 1000);

        return () => clearInterval(energyInterval);
    }, []);

    useEffect(() => {
        if (currEnergy <= 0) {
            setCurrEnergy(0);
        }
    }, [currEnergy]);

    const updateCurrCoins = () => {
        let catIdleImage = catIdle;
        let catSpeakImage = catSpeak;
        let clickNewCoins = 0;
        if (currEnergy >= 0 && currEnergy <= 250) {
            catIdleImage = sadIdle;
            catSpeakImage = sadSpeak;
            clickNewCoins = 1;
        } else if (currEnergy >= 251 && currEnergy <= 500) {
            catIdleImage = normalIdle;
            catSpeakImage = normalSpeak;
            clickNewCoins = 2;
        } else if (currEnergy >= 501 && currEnergy <= 750) {
            catIdleImage = smileIdle;
            catSpeakImage = smileSpeak;
            clickNewCoins = 3;
        } else if (currEnergy >= 751 && currEnergy <= 990) {
            catIdleImage = happyIdle;
            catSpeakImage = happySpeak;
            clickNewCoins = 4;
        } else if (currEnergy >= 991 && currEnergy <= 1000) {
            catIdleImage = happyIdle;
            catSpeakImage = finalForm;
            clickNewCoins = 5;
        }
        
        setCatIdle(catIdleImage);
        setCatSpeak(catSpeakImage);
        setIsCoinsChanged(true);
        return clickNewCoins;
    };

    useEffect(() => {
        updateCurrCoins();
    }, [currEnergy]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (isCoinsChanged) {
                submitData(accumulatedCoinsRef.current);
                setIsCoinsChanged(false);
                accumulatedCoinsRef.current = 0;
            }
        }, 4900);
    
        return () => clearInterval(timer);
    }, [isCoinsChanged]);

    const submitData = async (coins) => {
        try {
            const response = await axios.post('https://admin.prodtest1.space/api/update-balance', {
                score: coins,
                wallet_address: wallet_address
            });
    
            console.log('Coins submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting coins:', error);
        }
    };

    const firstClick = (event) => {
        if (!event.isTrusted) return;
        setCurrentImage(false);
        setCurrEnergy(prevEnergy => Math.min(prevEnergy + 5, 1000));
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCurrentImage(true), 1150);
        const clickNewCoins = updateCurrCoins();
        setCurrCoins(prevCoins => prevCoins + clickNewCoins);
        accumulatedCoinsRef.current += clickNewCoins;
    };
    
    const coinClicker = (event) => {
        if (!event.isTrusted) return;
        setCoinState(true);
        setCurrEnergy(prevEnergy => Math.min(prevEnergy + 5, 1000));
        clearTimeout(timeoutRef.current);
        clearTimeout(coinRef.current);
        timeoutRef.current = setTimeout(() => setCurrentImage(true), 1150);
        coinRef.current = setTimeout(() => setCoinState(false), 4000);
        const clickNewCoins = updateCurrCoins();
        setCurrCoins(prevCoins => prevCoins + clickNewCoins);
        accumulatedCoinsRef.current += clickNewCoins;
    };

    useEffect(() => {
        if (connected === false) {
            setCurrCoins(0);
        }
    }, [connected]);

    const startFarm = () => {
        setCurrentImage(true);
        setidleState(prevState => !prevState);
    };

    const stopFarm = () => {
        setCurrentImage(false);
        setidleState(prevState => !prevState);
        setCoinState(false);
    };

    const loginTwitter = async () => {
        try {
          const res = await requestAuth().unwrap();
          window.location.href = `https://api.twitter.com/oauth/authorize?oauth_token=${res.token}`;
        } catch (e) {
          console.log(e);
        }
      };

      useEffect(() => {
        if (location.state && location.state?.auth) {
          executeScroll();
          window.history.replaceState({}, "");
        }
      }, []);

return (
        <div className="mainContent">
            <div className="mainContent__container">
                {idleState ? (
                <div className="mainContent__phaseOne">
                    <div className="mainContent__title">
                        <h4>Tim The Cat</h4>
                    </div>
                    <div className="mainContent__descr">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna.
                        </p>
                    </div>
                    
                    <div className="mainContent__form" ref={formRef}> 
                        <div id="steps" aria-hidden="true" className="steps">
                            <div className="steps__header">
                                <p>
                                You're almost there,
                                <br />
                                connect your wallet and
                                </p>
                                <h4>
                                To start a game:
                                    </h4>
                            </div>
                            <div className="steps__items">
                                {/* <div className="steps__item"> */}
                                    {/* <div className="steps__item-number">
                                        <span >1</span>
                                    </div> */}
                                    {/* <span>
                                        Connect your wallet
                                    </span>
                                </div> */}
                                <div className="steps__item">
                                    {/* <div className="steps__item-number">
                                        <span>2</span>
                                    </div> */}
                                    {authContext.twitter !== 1 && (
                                        <span>
                                            Follow @crypto_tom on Twitter
                                        </span>
                                        )}
                                    {authContext.twitter !== 1 && (
                                        <button className="steps__item-btn" onClick={loginTwitter}>
                                            Connect
                                        </button>
                                    )}
                                </div>
                                <div className="steps__item">
                                    {/* <div className="steps__item-number">
                                        <span>3</span>
                                    </div> */}
                                    <span>
                                        Join Crypto Telegram
                                    </span>
                                    <button className="steps__item-btn">
                                        Connect
                                    </button>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div className="mainContent__startBtn-box">
                            <button className="mainContent__startBtn" onClick={startFarm}>Play
                                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11" cy="11.5" r="10" stroke="white" stroke-width="2" />
                                        <path
                                            d="M16.7333 11.9536C16.8536 11.8333 16.9211 11.6701 16.9211 11.5C16.9211 11.3298 16.8536 11.1666 16.7333 11.0463L13.1034 7.4164C13.0442 7.35511 12.9734 7.30623 12.8951 7.2726C12.8168 7.23897 12.7326 7.22127 12.6474 7.22053C12.5622 7.21979 12.4777 7.23602 12.3988 7.26829C12.32 7.30055 12.2483 7.3482 12.1881 7.40844C12.1278 7.46869 12.0802 7.54034 12.0479 7.61919C12.0157 7.69805 11.9994 7.78255 12.0002 7.86775C12.0009 7.95295 12.0186 8.03715 12.0522 8.11543C12.0859 8.19372 12.1348 8.26452 12.196 8.32371L14.7306 10.8583H6.23304C6.06286 10.8583 5.89964 10.9259 5.77931 11.0462C5.65897 11.1666 5.59137 11.3298 5.59137 11.5C5.59137 11.6701 5.65897 11.8334 5.77931 11.9537C5.89964 12.074 6.06286 12.1416 6.23304 12.1416H14.7306L12.196 14.6762C12.0792 14.7972 12.0145 14.9593 12.0159 15.1276C12.0174 15.2958 12.0849 15.4567 12.2039 15.5757C12.3228 15.6947 12.4838 15.7622 12.652 15.7636C12.8203 15.7651 12.9823 15.7004 13.1034 15.5835L16.7333 11.9536Z"
                                            fill="white" />
                                    </svg>
                            </button>
                        </div> 
                    <div className="mainContent__catBox">
                        <img className="mainContent__catIdle" draggable="false" src={catIdle} alt="cat animation"/>                
                    </div>
                </div>
                 ) : (
                <div className="mainContent__phaseTwo">
                    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
                        <Boost onClick={handleChildClick} />
                    </div>
                    <div className="mainContent__energyBox">
                        <div className="mainContent__energyContainer">
                            <img src={smile} alt=""/>
                            <div className="mainContent__energyValue">
                                <p className="energyCount" id="energyCount">{currEnergy}</p>
                                <span>/</span>
                                <p className="maximumEnergy" id="maximumEnergy">1000</p>
                            </div>
                        </div>
                        <div className="mainContent__energyBar">
                            <progress className="filledBar" id="filledBar" max="1000" value={currEnergy}>
                                
                            </progress>
                        </div>
                        <div className="mainContent__energyHint">
                            <p>
                            The happier The Tom — 
                            <br />
                            The more you get
                            </p>
                        </div>
                    </div>
                    {currentImage === true ? (
                        <div className="mainContent__catBox" onClick={firstClick}>
                        <img id="catGif" className="mainContent__catIdle" src={catIdle} draggable="false" alt="cat animation"/>
                        </div>
                        ) : (
                        <div className="mainContent__catBox" onClick={coinClicker}>
                        <img id="catGif" className="mainContent__catMeow" src={catSpeak} draggable="false" alt="cat animation"/>
                        </div>
                        )}
                    <div className="mainContent__backBtn" onClick={stopFarm}>
                        <button>
                            <span>
                            &lt; Stop
                            </span>
                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L11 11.5M1 11.5L11 1.5" stroke="white" strokeOpacity="0.5" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className="mainContent__coinBox">
                    <div className="mainContent__coinImg" draggable="false"><img src={catCoinMove} alt="coin animation" draggable="false"/></div>
                        <div className="mainContent__coinAmount"><span id="coinAmount">{currCoins}</span></div>
                    </div>
                    {coinState && (
                    <div className="mainContent__animation">
                        <div className="mainContent__coinOne">
                            <img src={catCoinMove} alt=""/>
                        </div>
                        <div className="mainContent__coinTwo">
                            <img src={catCoin} alt=""/>
                        </div>
                        <div className="mainContent__coinThree">
                            <img src={catCoin} alt=""/>
                        </div>
                        {/* <div className="mainContent__coinFour">
                            <img src={catCoin} alt=""/>
                        </div>
                        <div className="mainContent__coinFive">
                            <img src={catCoin} alt=""/>
                        </div> */}
                        {/* <div className="mainContent__coinSix">
                            <img src="img/cat_coin.svg" alt=""/>
                        </div>
                        <div className="mainContent__coinSeven">
                            <img src="img/cat_coin.svg" alt=""/>
                        </div> */}
                    </div>
                    )}
                </div>
            )}
            </div>
        </div>
)
}

export default Main;
import React from "react"
import './Main.scss'

function Main() {
	return (
<div className="mainContent">
    <div className="mainContent__container">
        <div className="mainContent__phaseOne">
            <div className="mainContent__title">
                <h4>Crypto Talking Tom</h4>
            </div>
            <div className="mainContent__descr">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna.
                </p>
            </div>
            <div className="mainContent__startBtn">
                <button>Start farm 
									{/* <svg width="22" height="23" viewBox="0 0 22 23" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11.5" r="10" stroke="white" stroke-width="2" />
                        <path
                            d="M16.7333 11.9536C16.8536 11.8333 16.9211 11.6701 16.9211 11.5C16.9211 11.3298 16.8536 11.1666 16.7333 11.0463L13.1034 7.4164C13.0442 7.35511 12.9734 7.30623 12.8951 7.2726C12.8168 7.23897 12.7326 7.22127 12.6474 7.22053C12.5622 7.21979 12.4777 7.23602 12.3988 7.26829C12.32 7.30055 12.2483 7.3482 12.1881 7.40844C12.1278 7.46869 12.0802 7.54034 12.0479 7.61919C12.0157 7.69805 11.9994 7.78255 12.0002 7.86775C12.0009 7.95295 12.0186 8.03715 12.0522 8.11543C12.0859 8.19372 12.1348 8.26452 12.196 8.32371L14.7306 10.8583H6.23304C6.06286 10.8583 5.89964 10.9259 5.77931 11.0462C5.65897 11.1666 5.59137 11.3298 5.59137 11.5C5.59137 11.6701 5.65897 11.8334 5.77931 11.9537C5.89964 12.074 6.06286 12.1416 6.23304 12.1416H14.7306L12.196 14.6762C12.0792 14.7972 12.0145 14.9593 12.0159 15.1276C12.0174 15.2958 12.0849 15.4567 12.2039 15.5757C12.3228 15.6947 12.4838 15.7622 12.652 15.7636C12.8203 15.7651 12.9823 15.7004 13.1034 15.5835L16.7333 11.9536Z"
                            fill="white" />
                    </svg> */}
										</button>
            </div>
            {/* <div className="mainContent__catBox">
                <img className="mainContent__catIdle" draggable="false" src="img/idle.svg" alt="">                
                <img className="mainContent__catIdle" draggable="false" src="img/idle.gif" alt="">
                <object className="mainContent__catIdle" data="img/idle.svg" type="image/svg+xml">
                </object>
            </div> */}
        </div>
        <div className="mainContent__phaseTwo">
            <div className="mainContent__energyBox">
                <div className="mainContent__energyContainer">
                    {/* <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.2887 8.2625C13.2658 8.16631 13.2194 8.07721 13.1534 8.00313C13.0875 7.92905 13.0042 7.87228 12.9109 7.83786L8.55704 6.21657L9.66495 0.714983C9.69004 0.587156 9.67257 0.454697 9.61517 0.337593C9.55777 0.22049 9.46357 0.125096 9.34677 0.0658076C9.22997 0.00651882 9.09691 -0.013448 8.96768 0.00892022C8.83844 0.0312884 8.72004 0.0947778 8.63034 0.189808L0.166052 9.19281C0.0973057 9.26473 0.047574 9.35242 0.0212997 9.44807C-0.0049745 9.54372 -0.00697303 9.64434 0.0154829 9.74094C0.0379387 9.83754 0.0841495 9.92712 0.149987 10.0017C0.215824 10.0762 0.299237 10.1334 0.392774 10.1681L4.74811 11.7894L3.64321 17.285C3.61813 17.4128 3.6356 17.5453 3.693 17.6624C3.75039 17.7795 3.8446 17.8749 3.9614 17.9342C4.0782 17.9935 4.21126 18.0134 4.34049 17.9911C4.46972 17.9687 4.58812 17.9052 4.67782 17.8102L13.1421 8.80719C13.2096 8.73526 13.2583 8.64797 13.2839 8.553C13.3094 8.45802 13.3111 8.35827 13.2887 8.2625ZM5.24614 15.4522L6.0374 11.5223C6.06572 11.383 6.04328 11.2381 5.97408 11.1137C5.90488 10.9892 5.79341 10.8931 5.65953 10.8426L1.6662 9.35337L8.06127 2.5516L7.27077 6.48141C7.24245 6.62078 7.26489 6.76561 7.33409 6.89009C7.40329 7.01457 7.51476 7.11063 7.64864 7.16114L11.6389 8.64663L5.24614 15.4522Z"
                            fill="white" />
                    </svg> */}
                    <div className="mainContent__energyValue">
                        <p className="energyCount" id="energyCount">1000</p>
                        <span>/</span>
                        <p className="maximumEnergy" id="maximumEnergy">1000</p>
                    </div>
                </div>
                <div className="mainContent__energyBar">
                    <progress className="filledBar" id="filledBar" max="1000" value="1000"></progress>
                </div>
            </div>
            <div className="mainContent__catBox">
							{/* <object id="catIdle" className="mainContent__catIdle" data="img/idle.svg" type="image/svg+xml">
                </object>
                <object id="catActive" className="mainContent__catMeow" data="img/speaking.svg" type="image/svg+xml">
                </object>
                <img id="catIdle" className="mainContent__catIdle" src="img/idle.svg" draggable="false" alt=""/>
                <img id="catActive" className="mainContent__catMeow" src="img/speaking.svg" draggable="false" alt=""/> */}
            </div>
            <div className="mainContent__sayBtn">
                <button>
                    Say!
                </button>
            </div>
            {/* <div className="mainContent__backBtn">
                <button>
                    < Back</button>
            </div> */}
            <div className="mainContent__coinBox">
                {/* <div className="mainContent__coinImg" draggable="false"><img src="@img/cat_coin_move.svg" alt=""draggable="false"/></div> */}
                <div className="mainContent__coinAmount"><span id="coinAmount">0</span></div>
            </div>
            {/* <div className="mainContent__animation">
                <div className="mainContent__coinOne">
                    <img src="img/cat_coin_move.svg" alt=""/>
                </div>
                <div className="mainContent__coinTwo">
                    <img src="img/cat_coin.svg" alt=""/>
                </div>
                <div className="mainContent__coinThree">
                    <img src="img/cat_coin.svg" alt=""/>
                </div>
                <div className="mainContent__coinFour">
                    <img src="img/cat_coin.svg" alt=""/>
                </div>
                <div className="mainContent__coinFive">
                    <img src="img/cat_coin.svg" alt=""/>
                </div>
                <div className="mainContent__coinSix">
                    <img src="img/cat_coin.svg" alt=""/>
                </div>
                <div className="mainContent__coinSeven">
                    <img src="img/cat_coin.svg" alt=""/>
                </div>
            </div> */}
        </div>
    </div>
</div>
	)
}

export default Main;
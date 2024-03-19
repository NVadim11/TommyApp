import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import AOS from "aos";
// import Landing from "./Landing";
import { useEffect, useState } from "react";
import Preloader from "./preloader/Preloader";

const MainComponent = () => {
  const [preloaderLoaded, setPreloaderLoaded] = useState(false);

	useEffect(() => {
		const preloaderTimeout = setTimeout(() => {
			setPreloaderLoaded(true);
		}, 2000);

		const timeout = setTimeout(() => {
			AOS.init({
				easing: "custom",
			});
		}, 2100);
		return () => {
			clearTimeout(timeout);
			clearTimeout(preloaderTimeout);
		};
	}, []);
  return (
    <div className="wrapper">
      <Preloader loaded={preloaderLoaded} />
      <Header />
      <main className="main">
        <Main />
      </main>
      {/* <Landing /> */}
      <Footer />
      <div className="bgImageFirst">
      </div>
      {/* <div className="bgImageSecond">
      </div> */}
      {/* <div className="bgImageThird">
      </div> */}
      {/* <div className="bgImageFourth">
      </div> */}
      {/* <div className="bgImageFives">
      </div> */}
    </div>
  );
};

export default MainComponent;

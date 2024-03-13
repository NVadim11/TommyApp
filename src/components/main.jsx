import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import Landing from "./Landing";

const MainComponent = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Main />
        <Footer />
        <div className="bgImage">
      </div>
      </main>
      <Landing />
    </div>
  );
};

export default MainComponent;

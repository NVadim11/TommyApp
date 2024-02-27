import React, { Suspense } from 'react'
import './App.scss'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Leaderboard from './components/leaderboard/Leaderboard'
import Main from './components/main/Main'
import Preloader from './components/preloader/Preloader'

function App() {
  return (
    <>   
      <Suspense fallback={<Preloader />}>
        <Header/>
        <Leaderboard/>          
        <Main/>
        <Footer/>
      </Suspense>
    </>    
  );
}

export default App;

import React from 'react'
import './App.scss'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Leaderboard from './components/leaderboard/Leaderboard'
import Main from './components/main/Main'

function App() {
  return (
        <div className="wrapper">
          <Header/>
          <Leaderboard/>   
          <main className='main'>       
          <Main/>
          </main>
          <Footer/>
        </div>
  );
}

export default App;

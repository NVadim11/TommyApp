import React from 'react'
import './App.scss'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'

function App() {
  return (
        <div className="wrapper">
          <Header/>
          <main className='main'>       
          <Main/>
          </main>      
          <Footer/>
        </div>
  );
}

export default App;

// import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
// import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui"
// import '@solana/wallet-adapter-react-ui/styles.css'
// import {
//   PhantomWalletAdapter,
//   SolflareWalletAdapter,
//   TorusWalletAdapter,
// } from "@solana/wallet-adapter-wallets"
// import React, { useMemo } from 'react'
// import './App.css'

// function App() {
//   return (
//     <Context>
//       <Content />
//     </Context>
//   );
// }

// export default App;

// const Context = ({children}) => {
//   // const network = WalletAdapterNetwork.Devnet;
//   // const endpoint = useMemo(() => clusterApiUrl(network), [network])
//   const endpoint = "http://localhost:3000"; // local cluster override

//   const wallets = useMemo( () => [
//     new PhantomWalletAdapter(),
//     new SolflareWalletAdapter(),
//     new TorusWalletAdapter()
//   ], []);

//   return (
//     <ConnectionProvider endpoint={ endpoint }>
//       <WalletProvider wallets={wallets} autoConnect>
//         <WalletModalProvider>{children}</WalletModalProvider>
//       </WalletProvider>
//     </ConnectionProvider>
//   )
// }

// const Content = () => {
//   return (
//     <div className="App">
//       <WalletMultiButton />
//     </div>
//   );
// }
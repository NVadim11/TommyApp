import { useWallet } from '@solana/wallet-adapter-react'
import axios from 'axios'

  const { publicKey, wallet } = useWallet();

  const postKey = publicKey?.toBase58();
  const walletName = wallet.adapter.name;

  const coinSubmitHandler = async (event) => {
    event.preventDefault(); 

    try {
      const response = await axios.post(
        'https://admin.prodtest1.space/api/users',
        {
          walletAddress: postKey,
          walletName: walletName
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (response.status !== 200) {
        throw new Error('Failed to submit data');
      }

      console.log('Data submitted successfully');
    } catch (error) {
      console.error('Error submitting data:', error.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  export default coinSubmitHandler;
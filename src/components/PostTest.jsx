import { useWallet } from '@solana/wallet-adapter-react'
import axios from 'axios'
import { useState } from 'react'


function SolanaWalletButton() {
  const { publicKey, wallet } = useWallet();
  const [isLoading, setIsLoading] = useState(false);

  const postKey = publicKey?.toBase58();
  const postName = wallet?.name;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('https://admin.prodtest1.space/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          walletAddress: postKey,
          walletName: postName,	
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      console.log('Data submitted successfully');
    } catch (error) {
      console.error('Error submitting data:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" disabled={!publicKey || isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
}

export default SolanaWalletButton;

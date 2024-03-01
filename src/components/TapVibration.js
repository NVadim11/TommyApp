import React, { useEffect } from 'react'

const TapVibration = () => {
  useEffect(() => {
    const handleTap = () => {
      // Check if the device supports vibration
      if ('vibrate' in navigator) {
        // Vibrate for 100 milliseconds
        navigator.vibrate(100);
      }
    };

    // Add event listener for touchstart event
    window.addEventListener('touchstart', handleTap);

    return () => {
      // Cleanup: Remove event listener when component unmounts
      window.removeEventListener('touchstart', handleTap);
    };
  }, []); // Empty dependency array ensures effect runs only once

  return <div>Tap here to trigger vibration</div>;
};

export default TapVibration;
import React, { useEffect, useState } from 'react'
import boostCoin from '../../img/boostCoin.png'
import './Boost.scss'

const Boost = ({ onClick }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true); // Start with visible true
  const [clicked, setClicked] = useState(false);

  const randomizePosition = () => {
    const maxX = window.innerWidth - 400; // Considering width of 150px
    const maxY = window.innerHeight - 400; // Considering height of 150px
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    setPosition({ x, y });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false); // Hide the Boost component after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [visible]);

  useEffect(() => {
    if (!visible) {
      randomizePosition(); // Randomize position when Boost disappears
      const timeout = Math.random() * (5000 - 1000) + 1000; // Random timeout between 1 to 5 seconds
      const boostTimer = setTimeout(() => {
        setVisible(true); // Show the Boost component
      }, timeout);

      return () => clearTimeout(boostTimer);
    }
  }, [visible]);

  const handleClick = () => {
    console.log('Element clicked!');
    setVisible(false);
    setClicked(true);
    onClick(true); // Pass clicked status to parent component
    randomizePosition(); // Randomize position when Boost is clicked
  };

  return visible ? (
    <div
      className={`boost-element ${clicked ? 'clicked' : ''}`}
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: 'pointer',
        width: '150px',
        height: '150px',
        borderRadius: '150px',
        overflow: 'hidden',
        zIndex: 1500
      }}
      onClick={handleClick}
    >
      <img src={boostCoin} alt="Boost coin" style={{ width: '100%', height: '100%', userSelect: 'none' }} />
    </div>
  ) : null;
};

export default Boost;

// import { motion } from "framer-motion"
// import React, { useEffect, useState } from 'react'
// import boostCoin from '../../img/cat_coin_move.png'
// import './Boost.scss'

// const Boost = ({ onClick }) => {
//   const [position, setPosition] = useState({ x: 300, y: 150 });
//   const [visible, setVisible] = useState(true); // Start with visible true
//   const [clicked, setClicked] = useState(false);

//   const randomizePosition = () => {
//     const maxX = window.innerWidth - 500; // Considering width of 150px
//     const maxY = window.innerHeight - 500; // Considering height of 150px
//     const x = Math.random() * maxX;
//     const y = Math.random() * maxY;
//     setPosition({ x, y });
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(false);
//     }, 8300);

//     return () => clearTimeout(timer);
//   }, [visible]);

//   useEffect(() => {
//     if (!visible) {
//       randomizePosition(); // Randomize position when Boost disappears
//       const timeout = Math.random() * (10000 - 1000) + 1000;
//       const boostTimer = setTimeout(() => {
//         setVisible(true); // Show the Boost component
//       }, timeout);

//       return () => clearTimeout(boostTimer);
//     }
//   }, [visible]);

//   const handleBoostClick = () => {
//     setVisible(false);
//     setClicked(true);
//     onClick(true); // Pass clicked status to parent component
//     randomizePosition(); // Randomize position when Boost is clicked
//   };

//   return visible ? (
//     <motion.div
//       initial={{
//         y: 7,
//         rotate: 0,
//         opacity: 1 // Initial opacity set to 0
//       }}
//       animate={{
//         y: [0, -15, 0],
//         rotate: [0, 3, -7, 0]
//       }}
//       transition={{
//         duration: 4,
//         repeat: Infinity,
//         repeatType: "mirror",
//         ease: "easeInOut"
//       }}
//       style={{ position: 'absolute', zIndex: 1500 }}
//     >
//       <motion.div
//         animate={{
//           opacity: [0, 1] // Transition from 0 to 1 opacity
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           repeatType: "mirror", // Apply mirror effect to opacity animation
//           ease: "easeInOut"
//         }}
//       >
//         <div
//           className={`boost-element ${clicked ? 'clicked' : ''}`}
//           style={{
//             position: 'absolute',
//             left: `${position.x}px`,
//             top: `${position.y}px`,
//             cursor: 'pointer',
//             width: '150px',
//             height: '150px',
//             borderRadius: '150px',
//             overflow: 'hidden',
//             zIndex: 1500
//           }}
//           onClick={handleClick}
//         >
//             <motion.img
//             src={boostCoin}
//             alt="Boost coin"
//             style={{ width: '100%', height: '100%', userSelect: 'none' }}
//             initial={{ opacity: 0, rotate: 0 }} // Initial opacity set to 0 and rotation set to 0 degrees
//             animate={{ opacity: 1, rotate: 360 }} // Animate opacity to 1 and rotate 360 degrees
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               repeatType: "mirror", // Apply mirror effect to image opacity and rotation animation
//               ease: "easeInOut"
//             }}
//           />
//         </div>
//       </motion.div>
//     </motion.div>
//   ) : null;
// };

// export default Boost;
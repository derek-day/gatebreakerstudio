// 'use client';

// import { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';
// import Head from 'next/head';

// const FaultyTerminal = dynamic(
//   () => import('./components/FaultyTerminal'),
//   { ssr: false }
// );

// export default function GatebreakerComingSoon() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Gatebreaker Studios – Coming Soon</title>
//         <meta name="description" content="Gatebreaker Studios LLC" />
//         <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"></meta>
//         <meta name="theme-color" content="#060706"></meta>
//         <meta name="keywords" content="Game Studio"></meta>
//         <meta name="author" content="Derek Day"></meta>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
//       </Head>

//       {/* Background Terminal - Lowest Layer */}
//       <div className="background">
//         <FaultyTerminal
//           scale={1.5}
//           digitSize={1.5}
//           scanlineIntensity={0.5}
//           glitchAmount={1}
//           flickerAmount={1}
//           noiseAmp={1}
//           chromaticAberration={1}
//           dither={1}
//           curvature={0.35}
//           tint="#ff6b35"
//           mouseReact
//           mouseStrength={0.5}
//           brightness={0.6}
//           className={undefined}
//           style={undefined}
//         />
//         <div className="overlay" />
//         <div className="grain" />
//       </div>

//       {/* Main Content - Middle Layer */}
//       <main 
//         className="wrapper"
//         style={{ 
//           opacity: isLoaded ? 1 : 0, 
//           transform: isLoaded ? 'translateY(0)' : 'translateY(30px)' 
//         }}
//       >
//         <section className="content">
//           <div className="logo-container">
//             <h1 className="title">
//               <span className="title-word" style={{ animationDelay: '1.2s' }}>GATEBREAKER</span>
//             </h1>
//             <p className="subtitle" style={{ animationDelay: '1.5s' }}>STUDIOS</p>
//           </div>
          
//           <div className="status-container" style={{ animationDelay: '1.7s' }}>
//             <div className="status-line" />
//             <span className="status">Initializing...</span>
//             <div className="status-line" />
//           </div>
//         </section>

//         <footer className="footer" style={{ animationDelay: '2.1s' }}>
//           <div className="footer-content">
//             <span>© {new Date().getFullYear()} Gatebreaker Studios LLC</span>
//           </div>
//         </footer>
//       </main>

//       {/* Portal Gate Container - Highest Layer */}
//       <div className="gate-container">
//         {/* Depth layers for 3D portal effect */}
//         <div className="portal-depth-layer layer-1" style={{ opacity: isLoaded ? 0 : 1 }} />
//         <div className="portal-depth-layer layer-2" style={{ opacity: isLoaded ? 0 : 1 }} />
//         <div className="portal-depth-layer layer-3" style={{ opacity: isLoaded ? 0 : 1 }} />
        
//         {/* Energy rings */}
//         <div 
//           className="portal-ring ring-1" 
//           style={{ 
//             opacity: isLoaded ? 0 : 1,
//             transform: isLoaded ? 'scale(0)' : 'scale(1)'
//           }}
//         />
//         <div 
//           className="portal-ring ring-2" 
//           style={{ 
//             opacity: isLoaded ? 0 : 1,
//             transform: isLoaded ? 'scale(0)' : 'scale(1)'
//           }}
//         />
        
//         {/* Energy vortex in center */}
//         <div 
//           className="portal-vortex" 
//           style={{ 
//             opacity: isLoaded ? 0 : 1,
//             transform: isLoaded ? 'scale(0) rotate(180deg)' : 'scale(1) rotate(0deg)'
//           }}
//         />
        
//         {/* Main gate panels */}
//         <div 
//           className="gate-panel gate-left"
//           style={{ transform: isLoaded ? 'translateX(-100%)' : 'translateX(0)' }}
//         >
//           <div className="gate-texture" />
//           <div className="gate-inner-shadow" />
//           <div className="gate-edge-glow" />
//         </div>
        
//         <div 
//           className="gate-panel gate-right"
//           style={{ transform: isLoaded ? 'translateX(100%)' : 'translateX(0)' }}
//         >
//           <div className="gate-texture" />
//           <div className="gate-inner-shadow" />
//           <div className="gate-edge-glow" />
//         </div>
//       </div>

//       <style jsx global>{`
//         @font-face {
//           font-family: "BluuNext";
//           src: url('BluuNext-Bold.otf') format("opentype");
//           font-display: swap;
//         }

//         @font-face {
//           font-family: "OfficeLight";
//           src: url('officecodeprod-light.otf') format("opentype");
//           font-display: swap;
//         }

//         @font-face {
//           font-family: "OfficeRegular";
//           src: url('officecodeprod-regular.otf') format("opentype");
//           font-display: swap;
//         }

//         html, body {
//           margin: 0;
//           padding: 0;
//           width: 100%;
//           height: 100%;
//           overflow: hidden;
//           background-color: #000000;
//         }
        
//         body {
//           background: #000000 !important;
//         }

//         * {
//           box-sizing: border-box;
//         }
//       `}</style>

//       <style jsx>{`
//         :root {
//           --bg-deep: #0d0a1a;
//           --bg-mid: #1a0f2e;
//           --fg-primary: #ffd89a;
//           --fg-secondary: #d4a574;
//           --accent-orange: #ff6b35;
//           --accent-gold: #ffb347;
//           --accent-purple: #7b2cbf;
//           --accent-deep-purple: #5a189a;
//           --accent-magenta: #c77dff;
//           --cosmic-blue: #4895ef;
//         }

//         /* BACKGROUND - z-index: 1 */
//         .background {
//           position: fixed;
//           inset: 0;
//           z-index: 1;
//           width: 100vw;
//           height: 100vh;
//           background: linear-gradient(135deg, #0d0518 0%, #1a0f2e 50%, #0f0820 100%);
//         }

//         .overlay {
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(
//             ellipse at center,
//             rgba(123, 44, 191, 0.1) 0%,
//             rgba(13, 10, 26, 0.5) 50%,
//             rgba(13, 10, 26, 0.9) 100%
//           );
//           z-index: 1;
//         }

//         .grain {
//           position: absolute;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
//           opacity: 0.04;
//           z-index: 2;
//         }

//         /* CONTENT - z-index: 10 */
//         .wrapper {
//           position: relative;
//           z-index: 10;
//           min-height: 100vh;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           color: var(--fg-primary);
//           text-align: center;
//           transition: opacity 2.2s cubic-bezier(0.19, 1, 0.22, 1) 0.8s, 
//                       transform 2.2s cubic-bezier(0.19, 1, 0.22, 1) 0.8s;
//         }

//         .content {
//           max-width: 1100px;
//           padding: 0 2rem;
//         }

//         .logo-container {
//           margin-bottom: 3rem;
//         }

//         /* Enhanced title styling */
//         .title {
//           font-family: 'BluuNext', monospace;
//           font-size: clamp(3rem, 10vw, 6.5rem);
//           font-weight: 900;
//           letter-spacing: -0.02em;
//           margin: 0;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           line-height: 1;
//         }

//         .title-word {
//           display: block;
//           opacity: 0;
//           animation: titleFadeIn 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
//           color: var(--fg-primary);
//           position: relative;
//           transform-style: preserve-3d;
//         }

//         .title-word::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             135deg,
//             var(--accent-gold) 0%,
//             var(--accent-orange) 25%,
//             var(--cosmic-blue) 50%,
//             var(--accent-magenta) 75%,
//             var(--accent-purple) 100%
//           );
//           background-size: 200% 200%;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           animation: gradientShift 8s ease infinite;
//           z-index: 1;
//         }

//         .title-word::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: inherit;
//           filter: blur(20px);
//           opacity: 0.6;
//           z-index: -1;
//         }

//         @keyframes gradientShift {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         /* Subtitle */
//         .subtitle {
//           font-family: 'Montserrat', sans-serif;
//           font-size: clamp(2rem, 3vw, 1.6rem);
//           font-weight: 400;
//           letter-spacing: 0.7em;
//           color: var(--fg-secondary);
//           opacity: 0;
//           animation: fadeInUp 1.2s ease forwards;
//           text-indent: 0.8em;
//           text-shadow: 0 0 20px rgba(255, 107, 53, 0.3);
//         }

//         @keyframes titleFadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(30px) scale(0.9);
//             filter: blur(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//             filter: blur(0px);
//           }
//         }

//         /* Status section */
//         .status-container {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 2rem;
//           margin: 3rem 0;
//           opacity: 0;
//           animation: fadeInUp 1.2s ease forwards;
//         }

//         .status-line {
//           width: 60px;
//           height: 1px;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             var(--cosmic-blue),
//             var(--accent-orange),
//             var(--accent-magenta),
//             transparent
//           );
//           box-shadow: 0 0 12px var(--cosmic-blue);
//         }

//         .status {
//           font-family: 'OfficeRegular', sans-serif;
//           font-size: 0.8rem;
//           font-weight: 600;
//           letter-spacing: 0.3em;
//           text-transform: uppercase;
//           color: var(--accent-gold);
//           position: relative;
//           padding: 0.5rem 1.5rem;
//           border: 1px solid rgba(255, 107, 53, 0.4);
//           background: linear-gradient(
//             135deg,
//             rgba(255, 107, 53, 0.1) 0%,
//             rgba(123, 44, 191, 0.1) 100%
//           );
//           backdrop-filter: blur(10px);
//           box-shadow: 
//             0 0 20px rgba(255, 107, 53, 0.2),
//             inset 0 0 20px rgba(123, 44, 191, 0.1);
//         }

//         .status::after {
//           content: '';
//           position: absolute;
//           top: 50%;
//           right: -30px;
//           width: 8px;
//           height: 8px;
//           background: var(--accent-orange);
//           border-radius: 50%;
//           transform: translateY(-50%);
//           box-shadow: 0 0 15px var(--accent-orange),
//                       0 0 30px var(--accent-magenta);
//           animation: pulse 2s ease-in-out infinite;
//         }

//         @keyframes pulse {
//           0%, 100% { 
//             opacity: 1; 
//             transform: translateY(-50%) scale(1);
//             box-shadow: 0 0 15px var(--accent-orange),
//                         0 0 30px var(--accent-magenta);
//           }
//           50% { 
//             opacity: 0.4; 
//             transform: translateY(-50%) scale(0.8);
//             box-shadow: 0 0 8px var(--accent-orange),
//                         0 0 15px var(--accent-magenta);
//           }
//         }

//         /* Footer */
//         .footer {
//           position: absolute;
//           bottom: 2rem;
//           opacity: 0;
//           animation: fadeInUp 1.2s ease forwards;
//         }

//         .footer-content {
//           font-family: 'OfficeRegular', sans-serif;
//           font-size: 0.75rem;
//           font-weight: 400;
//           letter-spacing: 0.15em;
//           text-transform: uppercase;
//           color: var(--fg-secondary);
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         /* PORTAL GATE SYSTEM - z-index: 9999 */
//         .gate-container {
//           position: fixed;
//           inset: 0;
//           z-index: 9999;
//           pointer-events: none;
//           display: flex;
//         }

//         /* Portal depth layers */
//         .portal-depth-layer {
//           position: absolute;
//           inset: 0;
//           transition: opacity 1.8s ease-out;
//           pointer-events: none;
//         }

//         .layer-1 {
//           background: radial-gradient(
//             ellipse at center,
//             rgba(255, 107, 53, 0.2) 0%,
//             rgba(72, 149, 239, 0.15) 30%,
//             rgba(123, 44, 191, 0.15) 50%,
//             transparent 70%
//           );
//           animation: portalPulse 3s ease-in-out infinite;
//         }

//         .layer-2 {
//           background: radial-gradient(
//             ellipse at center,
//             rgba(72, 149, 239, 0.25) 0%,
//             rgba(255, 179, 71, 0.2) 25%,
//             rgba(199, 125, 255, 0.2) 45%,
//             transparent 60%
//           );
//           animation: portalPulse 3s ease-in-out infinite;
//           animation-delay: 0.4s;
//         }

//         .layer-3 {
//           background: radial-gradient(
//             ellipse at center,
//             rgba(199, 125, 255, 0.3) 0%,
//             rgba(72, 149, 239, 0.25) 20%,
//             rgba(255, 107, 53, 0.15) 40%,
//             transparent 50%
//           );
//           animation: portalPulse 3s ease-in-out infinite;
//           animation-delay: 0.8s;
//         }

//         @keyframes portalPulse {
//           0%, 100% { transform: scale(1); opacity: 1; }
//           50% { transform: scale(1.08); opacity: 0.7; }
//         }

//         /* Portal rings */
//         .portal-ring {
//           position: absolute;
//           left: 50%;
//           top: 50%;
//           border-radius: 50%;
//           border: 2px solid;
//           transition: opacity 1.4s ease-out, transform 1.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
//         }

//         .ring-1 {
//           width: 300px;
//           height: 300px;
//           margin-left: -150px;
//           margin-top: -150px;
//           border-color: var(--cosmic-blue);
//           box-shadow: 
//             0 0 40px rgba(72, 149, 239, 0.8), 
//             inset 0 0 40px rgba(72, 149, 239, 0.5),
//             0 0 80px rgba(255, 107, 53, 0.4);
//           animation: ringRotate 4s linear infinite;
//         }

//         .ring-2 {
//           width: 200px;
//           height: 200px;
//           margin-left: -100px;
//           margin-top: -100px;
//           border-color: var(--accent-orange);
//           box-shadow: 
//             0 0 30px rgba(255, 107, 53, 0.8), 
//             inset 0 0 30px rgba(255, 107, 53, 0.5),
//             0 0 60px rgba(199, 125, 255, 0.4);
//           animation: ringRotate 6s linear infinite reverse;
//         }

//         @keyframes ringRotate {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         /* Central vortex */
//         .portal-vortex {
//           position: absolute;
//           left: 50%;
//           top: 50%;
//           width: 180px;
//           height: 180px;
//           margin-left: -90px;
//           margin-top: -90px;
//           background: radial-gradient(
//             circle,
//             rgba(255, 179, 71, 1) 0%,
//             rgba(255, 107, 53, 0.9) 20%,
//             rgba(199, 125, 255, 0.7) 40%,
//             rgba(123, 44, 191, 0.5) 60%,
//             rgba(72, 149, 239, 0.3) 80%,
//             transparent 100%
//           );
//           border-radius: 50%;
//           filter: blur(20px);
//           transition: opacity 1.5s ease-out, transform 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
//           animation: vortexPulse 2.5s ease-in-out infinite;
//           box-shadow: 
//             0 0 60px rgba(255, 107, 53, 0.6),
//             0 0 120px rgba(123, 44, 191, 0.4);
//         }

//         @keyframes vortexPulse {
//           0%, 100% { 
//             transform: scale(1) rotate(0deg); 
//             filter: blur(20px); 
//           }
//           50% { 
//             transform: scale(1.2) rotate(180deg); 
//             filter: blur(25px); 
//           }
//         }

//         /* Main gate panels */
//         .gate-panel {
//           width: 50%;
//           height: 100%;
//           background: linear-gradient(
//             135deg,
//             #1a0f2e 0%,
//             #0d0518 40%,
//             #0f0820 60%,
//             #1a0f2e 100%
//           );
//           position: relative;
//           transition: transform 3.5s cubic-bezier(0.76, 0, 0.24, 1);
//           overflow: hidden;
//         }

//         .gate-texture {
//           position: absolute;
//           inset: 0;
//           opacity: 0.12;
//           background-image: 
//             repeating-linear-gradient(
//               0deg,
//               rgba(255, 107, 53, 0.04) 0px,
//               transparent 1px,
//               transparent 3px,
//               rgba(123, 44, 191, 0.04) 4px
//             ),
//             repeating-linear-gradient(
//               90deg,
//               rgba(199, 125, 255, 0.04) 0px,
//               transparent 1px,
//               transparent 3px,
//               rgba(255, 107, 53, 0.04) 4px
//             );
//         }

//         .gate-inner-shadow {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to right,
//             rgba(13, 10, 26, 0.9) 0%,
//             transparent 100%
//           );
//         }

//         .gate-edge-glow {
//           position: absolute;
//           top: 0;
//           bottom: 0;
//           width: 3px;
//           background: linear-gradient(
//             to bottom,
//             transparent 0%,
//             var(--cosmic-blue) 15%,
//             var(--accent-orange) 35%,
//             var(--accent-gold) 50%,
//             var(--accent-magenta) 65%,
//             var(--accent-purple) 85%,
//             transparent 100%
//           );
//           box-shadow: 
//             0 0 30px 5px var(--cosmic-blue),
//             0 0 60px 3px var(--accent-magenta);
//           opacity: 0.9;
//           animation: edgeGlow 3s ease-in-out infinite;
//         }

//         @keyframes edgeGlow {
//           0%, 100% { 
//             opacity: 0.9;
//             box-shadow: 
//               0 0 30px 5px var(--cosmic-blue),
//               0 0 60px 3px var(--accent-magenta);
//           }
//           50% { 
//             opacity: 1;
//             box-shadow: 
//               0 0 40px 8px var(--accent-orange),
//               0 0 80px 5px var(--accent-purple);
//           }
//         }

//         .gate-left {
//           border-right: 1px solid rgba(255, 107, 53, 0.4);
//         }

//         .gate-left .gate-edge-glow {
//           right: -1px;
//         }

//         .gate-left .gate-inner-shadow {
//           transform: scaleX(1);
//         }

//         .gate-right {
//           border-left: 1px solid rgba(255, 107, 53, 0.4);
//         }

//         .gate-right .gate-edge-glow {
//           left: -1px;
//         }

//         .gate-right .gate-inner-shadow {
//           transform: scaleX(-1);
//         }

//         /* Responsive adjustments */
//         @media (max-width: 768px) {
//           .title {
//             font-size: clamp(2rem, 10vw, 4rem);
//             letter-spacing: -0.02em;
//           }

//           .subtitle {
//             font-size: 1.2rem;
//             letter-spacing: 0.5em;
//             margin-top: 0.25rem;
//           }

//           .status-container {
//             gap: 1rem;
//           }

//           .status-line {
//             width: 30px;
//           }

//           .footer-content {
//             flex-direction: column;
//             gap: 0.5rem;
//           }
//         }
//       `}</style>
//     </>
//   );
// }










'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const FaultyTerminal = dynamic(
  () => import('./components/FaultyTerminal'),
  { ssr: false }
);

export default function GatebreakerComingSoon() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Gatebreaker Studios – Coming Soon</title>
        <meta name="description" content="Gatebreaker Studios LLC" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"></meta>
        <meta name="theme-color" content="#060706"></meta>
        <meta name="keywords" content="Game Studio"></meta>
        <meta name="author" content="Derek Day"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Background Terminal - Lowest Layer */}
      <div className="background">
        <FaultyTerminal
          scale={1.5}
          digitSize={1.5}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={1}
          dither={1}
          curvature={0.35}
          tint="#4fd1c5"
          mouseReact
          mouseStrength={0.5}
          brightness={0.6}
          className={undefined}
          style={undefined}
        />
        <div className="overlay" />
        <div className="grain" />
      </div>

      {/* Main Content - Middle Layer */}
      <main 
        className="wrapper"
        style={{ 
          opacity: isLoaded ? 1 : 0, 
          transform: isLoaded ? 'translateY(0)' : 'translateY(30px)' 
        }}
      >
        <section className="content">
          <div className="logo-container">
            <h1 className="title">
              <span className="title-word" style={{ animationDelay: '1.2s' }}>GATEBREAKER</span>
            </h1>
            <p className="subtitle" style={{ animationDelay: '1.5s' }}>STUDIOS</p>
          </div>
          
          <div className="status-container" >
            <div className="status-line" />
            <span className="status" style={{ animationDelay: '1.7s' }}>Initializing...</span>
            <div className="status-line" />
          </div>
        </section>

        <footer className="footer" style={{ animationDelay: '2.1s' }}>
          <div className="footer-content">
            <span>© {new Date().getFullYear()} Gatebreaker Studios LLC</span>
            {/* <span className="footer-divider">|</span>
            <span>All Rights Reserved</span> */}
          </div>
        </footer>
      </main>

      {/* Portal Gate Container - Highest Layer */}
      <div className="gate-container">
        {/* Depth layers for 3D portal effect */}
        <div className="portal-depth-layer layer-1" style={{ opacity: isLoaded ? 0 : 1 }} />
        <div className="portal-depth-layer layer-2" style={{ opacity: isLoaded ? 0 : 1 }} />
        <div className="portal-depth-layer layer-3" style={{ opacity: isLoaded ? 0 : 1 }} />
        
        {/* Energy rings */}
        <div 
          className="portal-ring ring-1" 
          style={{ 
            opacity: isLoaded ? 0 : 1,
            transform: isLoaded ? 'scale(0)' : 'scale(1)'
          }}
        />
        <div 
          className="portal-ring ring-2" 
          style={{ 
            opacity: isLoaded ? 0 : 1,
            transform: isLoaded ? 'scale(0)' : 'scale(1)'
          }}
        />
        
        {/* Energy vortex in center */}
        <div 
          className="portal-vortex" 
          style={{ 
            opacity: isLoaded ? 0 : 1,
            transform: isLoaded ? 'scale(0) rotate(180deg)' : 'scale(1) rotate(0deg)'
          }}
        />
        
        {/* Main gate panels */}
        <div 
          className="gate-panel gate-left"
          style={{ transform: isLoaded ? 'translateX(-100%)' : 'translateX(0)' }}
        >
          <div className="gate-texture" />
          <div className="gate-inner-shadow" />
          <div className="gate-edge-glow" />
        </div>
        
        <div 
          className="gate-panel gate-right"
          style={{ transform: isLoaded ? 'translateX(100%)' : 'translateX(0)' }}
        >
          <div className="gate-texture" />
          <div className="gate-inner-shadow" />
          <div className="gate-edge-glow" />
        </div>
      </div>

      <style jsx global>{`
        @font-face {
          font-family: "BluuNext";
          src: url('BluuNext-Bold.otf') format("opentype");
          font-display: swap;
        }

        @font-face {
          font-family: "OfficeLight";
          src: url('officecodeprod-light.otf') format("opentype");
          font-display: swap;
        }

        @font-face {
          font-family: "OfficeRegular";
          src: url('officecodeprod-regular.otf') format("opentype");
          font-display: swap;
        }


        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: #000000;
        }
        
        body {
          background: #000000 !important;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>

      <style jsx>{`
        :root {
          --bg-deep: #050811;
          --bg-mid: #0a1628;
          --fg-primary: #e8f4f8;
          --fg-secondary: #94a9b8;
          --accent-cyan: #4fd1c5;
          --accent-blue: #3182ce;
          --accent-teal: #38b2ac;
          --gold: #d4af37;
          --silver: #c0c0c0;
          --cosmic-purple: #2d3561;
        }

        /* BACKGROUND - z-index: 1 */
        .background {
          position: fixed;
          inset: 0;
          z-index: 1;
          width: 100vw;
          height: 100vh;
          height: 100svh;
          background: linear-gradient(135deg, var(--bg-deep) 0%, var(--bg-mid) 100%);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            transparent 0%,
            rgba(5, 8, 17, 0.4) 50%,
            rgba(5, 8, 17, 0.85) 100%
          );
          z-index: 1;
        }

        .grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03;
          z-index: 2;
        }

        /* CONTENT - z-index: 10 */
        .wrapper {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--fg-primary);
          text-align: center;
          transition: opacity 2.2s cubic-bezier(0.19, 1, 0.22, 1) 0.8s, 
                      transform 2.2s cubic-bezier(0.19, 1, 0.22, 1) 0.8s;
        }

        .content {
          max-width: 1100px;
          padding: 0 2rem;
        }

        .logo-container {
          margin-bottom: 3rem;
        }

        /* Enhanced title styling with Orbitron */
        .title {
          font-family: 'Orbitron', monospace;
          font-family: 'BluuNext', monospace;
          font-size: clamp(3rem, 10vw, 6.5rem);
          font-weight: 900;
          // letter-spacing: 0.15em;
          letter-spacing: -0.02em;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          // gap: 0.2em;
          line-height: 1;
        }

        .title-word {
          display: block;
          opacity: 0;
          animation: titleFadeIn 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          color: var(--fg-primary);
          text-shadow: 
            0 0 30px rgba(79, 209, 197, 0.6),
            0 0 60px rgba(49, 130, 206, 0.4),
            0 0 90px rgba(56, 178, 172, 0.2),
            0 4px 8px rgba(0, 0, 0, 0.9);
          position: relative;
          transform-style: preserve-3d;
        }

        .title-word::before {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          z-index: -1;
          background: linear-gradient(
            180deg,
            var(--accent-cyan) 0%,
            var(--accent-blue) 50%,
            var(--accent-teal) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0.5;
          filter: blur(8px);
        }

        /* Subtitle with Space Grotesk */
        .subtitle {
          font-family: 'Space Grotesk', sans-serif;
          font-family: 'BluuNext', monospace;
          font-family: 'OfficeRegular', sans-serif;
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2rem, 3vw, 1.6rem);
          font-weight: 400;
          // letter-spacing: 0.8em;
          letter-spacing: 0.7em;
          // letter-spacing: -0.04em;
          color: var(--fg-secondary);
          // margin: 1rem 0 0;
          // margin: .5rem 0 0;
          opacity: 0;
          animation: fadeInUp 1.2s ease forwards;
          text-indent: 0.8em;
        }

        @keyframes titleFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }

        /* Status section */
        .status-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin: 3rem 0;
          // opacity: 0;
          // animation: fadeInUp 1.2s ease forwards;
        }

        .status-line {
          width: 60px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--accent-cyan),
            transparent
          );
          box-shadow: 0 0 8px var(--accent-cyan);
        }

        .status {
          font-family: 'OfficeRegular', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--accent-cyan);
          position: relative;
          padding: 0.5rem 1.5rem;
          border: 1px solid rgba(79, 209, 197, 0.3);
          background: rgba(79, 209, 197, 0.05);
          // backdrop-filter: blur(10px);
          opacity: 0;
          animation: fadeInUp 1.2s ease forwards, backdropBlur 18s ease forwards;
        }

        .status::before {
          content: '';
          position: absolute;
        }

        .status::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -30px;
          width: 8px;
          height: 8px;
          background: var(--accent-cyan);
          border-radius: 50%;
          transform: translateY(-50%);
          box-shadow: 0 0 12px var(--accent-cyan);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: translateY(-50%) scale(1); }
          50% { opacity: 0.4; transform: translateY(-50%) scale(0.8); }
        }

        /* Tagline */
        .tagline {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-weight: 300;
          letter-spacing: 0.05em;
          color: var(--fg-secondary);
          margin: 0;
          opacity: 0;
          animation: fadeInUp 1.2s ease forwards;
          font-style: italic;
        }

        /* Footer */
        .footer {
          position: absolute;
          bottom: 2rem;
          opacity: 0;
          animation: fadeInUp 1.2s ease forwards;
        }

        .footer-content {
          font-family: 'OfficeRegular', sans-serif;
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--fg-secondary);
          color: rgba(154, 164, 178, 1);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .footer-divider {
          opacity: 0.3;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes backdropBlur {
          from {
            backdrop-filter: blur(0px);
          }
          to {
            backdrop-filter: blur(10px);
          }
        }

        /* PORTAL GATE SYSTEM - z-index: 9999 */
        .gate-container {
          position: fixed;
          inset: 0;
          z-index: 9999;
          pointer-events: none;
          display: flex;
        }

        /* Portal depth layers */
        .portal-depth-layer {
          position: absolute;
          inset: 0;
          transition: opacity 1.8s ease-out;
          pointer-events: none;
        }

        .layer-1 {
          background: radial-gradient(
            ellipse at center,
            rgba(79, 209, 197, 0.15) 0%,
            rgba(49, 130, 206, 0.1) 40%,
            transparent 65%
          );
          animation: portalPulse 3s ease-in-out infinite;
        }

        .layer-2 {
          background: radial-gradient(
            ellipse at center,
            rgba(56, 178, 172, 0.2) 0%,
            rgba(79, 209, 197, 0.15) 35%,
            transparent 55%
          );
          animation: portalPulse 3s ease-in-out infinite;
          animation-delay: 0.4s;
        }

        .layer-3 {
          background: radial-gradient(
            ellipse at center,
            rgba(49, 130, 206, 0.25) 0%,
            rgba(56, 178, 172, 0.18) 25%,
            transparent 45%
          );
          animation: portalPulse 3s ease-in-out infinite;
          animation-delay: 0.8s;
        }

        @keyframes portalPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.7; }
        }

        /* Portal rings */
        .portal-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 50%;
          border: 2px solid var(--accent-cyan);
          transition: opacity 1.4s ease-out, transform 1.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .ring-1 {
          width: 300px;
          height: 300px;
          margin-left: -150px;
          margin-top: -150px;
          box-shadow: 0 0 30px rgba(79, 209, 197, 0.6), inset 0 0 30px rgba(79, 209, 197, 0.4);
          animation: ringRotate 4s linear infinite;
        }

        .ring-2 {
          width: 200px;
          height: 200px;
          margin-left: -100px;
          margin-top: -100px;
          box-shadow: 0 0 20px rgba(56, 178, 172, 0.5), inset 0 0 20px rgba(56, 178, 172, 0.3);
          animation: ringRotate 6s linear infinite reverse;
        }

        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Central vortex */
        .portal-vortex {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 150px;
          height: 150px;
          margin-left: -75px;
          margin-top: -75px;
          background: radial-gradient(
            circle,
            rgba(79, 209, 197, 1) 0%,
            rgba(49, 130, 206, 0.8) 25%,
            rgba(56, 178, 172, 0.4) 50%,
            rgba(45, 53, 97, 0.2) 70%,
            transparent 100%
          );
          border-radius: 50%;
          filter: blur(15px);
          transition: opacity 1.5s ease-out, transform 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation: vortexPulse 2s ease-in-out infinite;
        }

        @keyframes vortexPulse {
          0%, 100% { transform: scale(1); filter: blur(15px); }
          50% { transform: scale(1.15); filter: blur(20px); }
        }

        /* Main gate panels */
        .gate-panel {
          width: 50%;
          height: 100%;
          background: linear-gradient(
            135deg,
            #0a1628 0%,
            #050811 50%,
            #0a1628 100%
          );
          position: relative;
          transition: transform 3.5s cubic-bezier(0.76, 0, 0.24, 1);
          overflow: hidden;
        }

        .gate-texture {
          position: absolute;
          inset: 0;
          opacity: 0.08;
          background-image: 
            repeating-linear-gradient(
              0deg,
              rgba(79, 209, 197, 0.03) 0px,
              transparent 1px,
              transparent 3px,
              rgba(79, 209, 197, 0.03) 4px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(79, 209, 197, 0.03) 0px,
              transparent 1px,
              transparent 3px,
              rgba(79, 209, 197, 0.03) 4px
            );
        }

        .gate-inner-shadow {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.8) 0%,
            transparent 100%
          );
        }

        .gate-edge-glow {
          position: absolute;
          top: 0;d
          bottom: 0;
          width: 2px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            var(--accent-cyan) 30%,
            var(--accent-blue) 50%,
            var(--accent-cyan) 70%,
            transparent 100%
          );
          box-shadow: 0 0 25px 4px var(--accent-cyan);
          opacity: 0.8;
        }

        .gate-left {
          border-right: 1px solid rgba(79, 209, 197, 0.25);
        }

        .gate-left .gate-edge-glow {
          right: -1px;
        }

        .gate-left .gate-inner-shadow {
          transform: scaleX(1);
        }

        .gate-right {
          border-left: 1px solid rgba(79, 209, 197, 0.25);
        }

        .gate-right .gate-edge-glow {
          left: -1px;
        }

        .gate-right .gate-inner-shadow {
          transform: scaleX(-1);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .title {
            font-size: clamp(2rem, 10vw, 4rem);
            letter-spacing: 0.1em;
          }

          .subtitle {
            font-size: 1.2rem;
            letter-spacing: 0.5em;
            margin-top: 0.25rem;
          }

          .status-container {
            gap: 1rem;
          }

          .status-line {
            width: 30px;
          }

          .footer-content {
            flex-direction: column;
            gap: 0.5rem;
          }

          .footer-divider {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
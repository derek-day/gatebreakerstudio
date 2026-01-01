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
          
          <div className="status-container" style={{ animationDelay: '1.7s' }}>
            <div className="status-line" />
            <span className="status">Initializing...</span>
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
          opacity: 0;
          animation: fadeInUp 1.2s ease forwards;
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
          backdrop-filter: blur(10px);
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
          top: 0;
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











// 'use client';

// import { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';
// import Head from 'next/head';

// const FaultyTerminal = dynamic(
//   () => import('./components/FaultyTerminal'),
//   { ssr: false }
// );

// const PrismaticBurst = dynamic(
//   () => import('./components/PrismaticBurst'),
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
//         <meta name="description" content="Gatebreaker Studios – A game creation studio." />
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
//           tint="#a78bff"
//           mouseReact
//           mouseStrength={0.5}
//           brightness={0.6}
//           className={undefined}
//           style={undefined}
//         />

//         <div className="overlay" />
//       </div>

//       {/* Main Content - Middle Layer */}
//       <main 
//         className="wrapper"
//         style={{ 
//           opacity: isLoaded ? 1 : 0, 
//           transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)' 
//         }}
//       >
//         <section className="content">
//           <h1 className="title">
//             <span className="title-word" style={{ animationDelay: '1.2s' }}>Gatebreaker</span>
//             <span className="title-word" style={{ animationDelay: '1.4s' }}>Studios</span>
//           </h1>
//           <div className="divider" style={{ animationDelay: '1.6s' }} />
//           <span className="status" style={{ animationDelay: '1.8s' }}>Coming Soon</span>
//         </section>

//         <footer className="footer" style={{ animationDelay: '2s' }}>
//           © {new Date().getFullYear()} Gatebreaker Studios LLC
//         </footer>
//       </main>

//       {/* Portal Gate Container - Highest Layer */}
//       <div className="gate-container">
//         {/* Depth layers for 3D portal effect */}
//         <div className="portal-depth-layer layer-1" style={{ opacity: isLoaded ? 0 : 1 }} />
//         <div className="portal-depth-layer layer-2" style={{ opacity: isLoaded ? 0 : 1 }} />
//         <div className="portal-depth-layer layer-3" style={{ opacity: isLoaded ? 0 : 1 }} />
        
//         {/* Energy vortex in center */}
//         <div 
//           className="portal-vortex" 
//           style={{ 
//             opacity: isLoaded ? 0 : 1,
//             transform: isLoaded ? 'scale(0)' : 'scale(1)'
//           }}
//         />
        
//         {/* Main gate panels */}
//         <div 
//           className="gate-panel gate-left"
//           style={{ transform: isLoaded ? 'translateX(-100%)' : 'translateX(0)' }}
//         >
//           <div className="gate-texture" />
//           <div className="gate-edge-glow" />
//         </div>
        
//         <div 
//           className="gate-panel gate-right"
//           style={{ transform: isLoaded ? 'translateX(100%)' : 'translateX(0)' }}
//         >
//           <div className="gate-texture" />
//           <div className="gate-edge-glow" />
//         </div>
//       </div>

//       <style jsx global>{`
//         html, body {
//           margin: 0;
//           padding: 0;
//           width: 100%;
//           height: 100%;
//           overflow: hidden;
//           background-color: #000000;
//         }
        
//         /* Prevent white flash */
//         body {
//           background: #000000 !important;
//         }
//       `}</style>

//       <style jsx>{`
//         :root {
//           --bg: #06080c;
//           --fg: #e7ebf3;
//           --accent: #33285bff;
//           --accent-bright: #a78bff;
//           --gate-dark: #0a0c12;
//         }

//         // @media (max-width: 900px) {
//         //   .content {
//         //     padding: 0 50px;
//         //   }
//         // }

//         /* BACKGROUND - z-index: 1 */
//         .background {
//           position: fixed;
//           inset: 0;
//           z-index: 1;
//           width: 100vw;
//           height: 100vh;
//           background: #000;
//         }

//         .overlay {
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(
//             ellipse at center,
//             transparent 0%,
//             rgba(0,0,0,0.2) 50%,
//             rgba(0,0,0,0.5) 100%
//           );
//           z-index: 1;
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
//           color: var(--fg);
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
//           text-align: center;
//           transition: opacity 2s ease 1s, transform 2s cubic-bezier(0.19, 1, 0.22, 1) 1s;
//         }

//         .content {
//           max-width: 900px;
//         }

//         /* Enhanced title styling */
//         .title {
//           font-size: clamp(2.5rem, 8vw, 5rem);
//           font-weight: 800;
//           font-weight: 700;
//           letter-spacing: -0.02em;
//           margin-bottom: 0.5rem;
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           gap: 0.3em;
//           line-height: 1.2;
//         }

//         .title-word {
//           display: inline-block;
//           opacity: 0;
//           animation: titleFadeIn 1s ease forwards;
//           color: #ffffff;
//           text-shadow: 
//             0 0 40px rgba(127, 92, 255, 0.5),
//             0 0 20px rgba(167, 139, 255, 0.4),
//             0 2px 4px rgba(0, 0, 0, 0.8);
//           position: relative;
//         }

//         .title-word::after {
//           content: attr(data-text);
//           position: absolute;
//           left: 0;
//           top: 0;
//           background: linear-gradient(
//             135deg,
//             #ffffff 0%,
//             var(--accent-bright) 50%,
//             #ffffff 100%
//           );
//           background-size: 200% 200%;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           animation: shimmer 4s ease-in-out infinite;
//           z-index: 1;
//         }

//         @keyframes titleFadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px) rotateX(90deg);
//             filter: blur(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) rotateX(0deg);
//             filter: blur(0px);
//           }
//         }

//         @keyframes shimmer {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         /* Divider */
//         .divider {
//           width: 80px;
//           height: 3px;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             var(--accent),
//             var(--accent-bright),
//             var(--accent),
//             transparent
//           );
//           margin: 2rem auto;
//           border-radius: 2px;
//           box-shadow: 0 0 20px var(--accent);
//           opacity: 0;
//           animation: fadeInUp 1s ease forwards;
//         }

//         /* Status text */
//         .status {
//           display: inline-block;
//           font-size: 1rem;
//           letter-spacing: 0.5em;
//           text-transform: uppercase;
//           color: #c5cdd8;
//           opacity: 0;
//           animation: fadeInUp 1s ease forwards;
//           position: relative;
//         }

//         .status::before,
//         .status::after {
//           content: '//';
//           position: absolute;
//           color: var(--accent);
//           opacity: 0.5;
//           font-size: 0.8em;
//         }

//         .status::before {
//           left: -2em;
//         }

//         .status::after {
//           right: -2em;
//         }

//         /* Footer */
//         .footer {
//           position: absolute;
//           bottom: 3rem;
//           font-size: 0.7rem;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           opacity: 0;
//           color: rgba(154, 164, 178, 0.6);
//           color: rgba(154, 164, 178, 1);
//           animation: fadeInUp 1s ease forwards;
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

//         /* Portal depth layers - creates tunnel effect */
//         .portal-depth-layer {
//           position: absolute;
//           inset: 0;
//           transition: opacity 1.5s ease-out;
//           pointer-events: none;
//         }

//         .layer-1 {
//           background: radial-gradient(
//             ellipse at center,
//             rgba(127, 92, 255, 0.15) 0%,
//             transparent 50%
//           );
//           animation: portalPulse 2s ease-in-out infinite;
//         }

//         .layer-2 {
//           background: radial-gradient(
//             ellipse at center,
//             rgba(127, 92, 255, 0.25) 0%,
//             transparent 40%
//           );
//           animation: portalPulse 2s ease-in-out infinite;
//           animation-delay: 0.3s;
//         }

//         .layer-3 {
//           background: radial-gradient(
//             ellipse at center,
//             rgba(167, 139, 255, 0.35) 0%,
//             transparent 30%
//           );
//           animation: portalPulse 2s ease-in-out infinite;
//           animation-delay: 0.6s;
//         }

//         @keyframes portalPulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }

//         /* Central vortex */
//         .portal-vortex {
//           position: absolute;
//           left: 50%;
//           top: 50%;
//           width: 200px;
//           height: 200px;
//           margin-left: -100px;
//           margin-top: -100px;
//           background: radial-gradient(
//             circle,
//             rgba(167, 139, 255, 0.8) 0%,
//             rgba(127, 92, 255, 0.4) 30%,
//             transparent 70%
//           );
//           border-radius: 50%;
//           filter: blur(20px);
//           animation: vortexSpin 3s linear infinite;
//           transition: opacity 1.2s ease-out, transform 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
//         }

//         @keyframes vortexSpin {
//           from { transform: rotate(0deg) scale(1); }
//           50% { transform: rotate(180deg) scale(1.2); }
//           to { transform: rotate(360deg) scale(1); }
//         }

//         /* Main gate panels */
//         .gate-panel {
//           width: 50%;
//           height: 100%;
//           background: linear-gradient(
//             to bottom,
//             #0a0c12 0%,
//             #06080c 50%,
//             #0a0c12 100%
//           );
//           position: relative;
//           transition: transform 3.2s cubic-bezier(0.76, 0, 0.24, 1);
//           overflow: hidden;
//         }

//         .gate-texture {
//           position: absolute;
//           inset: 0;
//           opacity: 0.15;
//           background-image: 
//             repeating-linear-gradient(
//               0deg,
//               rgba(255,255,255,0.03) 0px,
//               transparent 2px,
//               transparent 4px,
//               rgba(255,255,255,0.03) 6px
//             ),
//             repeating-linear-gradient(
//               90deg,
//               rgba(255,255,255,0.03) 0px,
//               transparent 2px,
//               transparent 4px,
//               rgba(255,255,255,0.03) 6px
//             );
//         }

//         .gate-edge-glow {
//           position: absolute;
//           top: 0;
//           bottom: 0;
//           width: 3px;
//           background: linear-gradient(
//             to bottom,
//             transparent 0%,
//             var(--accent) 50%,
//             transparent 100%
//           );
//           box-shadow: 0 0 20px 5px var(--accent);
//           opacity: 0.6;
//         }

//         .gate-left {
//           border-right: 1px solid rgba(127, 92, 255, 0.3);
//         }

//         .gate-left .gate-edge-glow {
//           right: -2px;
//         }

//         .gate-right {
//           border-left: 1px solid rgba(127, 92, 255, 0.3);
//         }

//         .gate-right .gate-edge-glow {
//           left: -2px;
//         }

//         /* Responsive adjustments */
//         @media (max-width: 768px) {
//           .title {
//             font-size: clamp(2rem, 10vw, 3.5rem);
//           }
          
//           .status::before,
//           .status::after {
//             display: none;
//           }
//         }
//       `}</style>
//     </>
//   );
// }












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
//     }, 300);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Gatebreaker Studios — Coming Soon</title>
//         <meta name="description" content="Gatebreaker Studios — A game creation studio." />
//       </Head>

//       {/* --- IMMERSIVE GATES --- */}
//       <div className="gate-container">
//         {/* The "Energy Crack" - Glows in the middle before opening */}
//         <div 
//           className="gate-energy-beam" 
//           style={{ opacity: isLoaded ? 0 : 1, transition: 'opacity 0.8s ease' }}
//         />
        
//         <div 
//           className="gate-panel gate-left"
//           style={{ transform: isLoaded ? 'translateX(-100%)' : 'translateX(0)' }}
//         >
//           <div className="gate-texture" />
//         </div>
        
//         <div 
//           className="gate-panel gate-right"
//           style={{ transform: isLoaded ? 'translateX(100%)' : 'translateX(0)' }}
//         >
//           <div className="gate-texture" />
//         </div>
//       </div>

//       {/* --- BACKGROUND (TERMINAL) --- */}
//       <div 
//         className="background"
//         style={{ 
//           transform: isLoaded ? 'scale(1)' : 'scale(1.2)', 
//           filter: isLoaded ? 'blur(0px)' : 'blur(10px)',
//           transition: 'transform 3s cubic-bezier(0.19, 1, 0.22, 1), filter 2s ease'
//         }}
//       >
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
//           tint="#A7EF9E"
//           mouseReact
//           mouseStrength={0.5}
//           brightness={0.6}
//           className={undefined}
//           style={undefined}
//         />
//         <div className="overlay" />
//       </div>

//       {/* --- CONTENT --- */}
//       <main 
//         className="wrapper"
//         style={{ 
//           opacity: isLoaded ? 1 : 0, 
//           transform: isLoaded ? 'translateY(0)' : 'translateY(20px)' 
//         }}
//       >
//         <section className="content">
//           <h1 className="title">Gatebreaker Studios</h1>
//           <div className="divider" />
//           <span className="status">Coming Soon</span>
//         </section>

//         <footer className="footer">
//           © {new Date().getFullYear()} Gatebreaker Studios LLC
//         </footer>
//       </main>

//       <style jsx global>{`
//         html, body {
//           margin: 0;
//           padding: 0;
//           width: 100%;
//           height: 100%;
//           overflow: hidden;
//           background-color: #06080c;
//         }
//       `}</style>

//       <style jsx>{`
//         :root {
//           --bg: #06080c;
//           --fg: #e7ebf3;
//           --accent: #7f5cff;
//           --gate-dark: #0a0c12;
//         }

//         /* GATES */
//         .gate-container {
//           position: fixed;
//           inset: 0;
//           z-index: 9999;
//           pointer-events: none;
//           display: flex;
//         }

//         .gate-panel {
//           width: 50%;
//           height: 100%;
//           background-color: var(--gate-dark);
//           position: relative;
//           transition: transform 2.8s cubic-bezier(0.85, 0, 0.15, 1);
//           overflow: hidden;
//         }

//         /* Subtle metallic texture for the gates */
//         .gate-texture {
//           position: absolute;
//           inset: 0;
//           opacity: 0.1;
//           background-image: url("https://www.transparenttextures.com/patterns/carbon-fibre.png");
//         }

//         .gate-left { border-right: 2px solid #1a1a1a; }
//         .gate-right { border-left: 2px solid #1a1a1a; }

//         /* Energy beam in the center crack */
//         .gate-energy-beam {
//           position: absolute;
//           left: 50%;
//           top: 0;
//           bottom: 0;
//           width: 4px;
//           // background: #7f5cff;
//           transform: translateX(-50%);
//           z-index: 10000;
//           // box-shadow: 0 0 30px 10px rgba(127, 92, 255, 0.6);
//         }

//         /* BACKGROUND & TERMINAL */
//         .background {
//           position: fixed;
//           inset: 0;
//           z-index: 0; /* Changed to 0 as requested */
//           width: 100vw;
//           height: 100vh;
//           background: #000;
//         }

//         .overlay {
//           position: absolute;
//           inset: 0;
//           /* Heavy vignette for "Gate" immersion */
//           background: radial-gradient(circle, transparent 20%, rgba(0,0,0,0.8) 100%);
//           z-index: 1;
//         }

//         /* WRAPPER */
//         .wrapper {
//           position: relative;
//           z-index: 10; /* Sits above background */
//           min-height: 100vh;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           color: var(--fg);
//           font-family: 'Inter', system-ui, sans-serif;
//           text-align: center;
//           transition: opacity 2.5s ease 0.8s, transform 2.5s ease 0.8s;
//         }

//         .title {
//           font-size: clamp(2.5rem, 8vw, 4.5rem);
//           font-weight: 800;
//           letter-spacing: -0.02em;
//           margin-bottom: 0.5rem;
//           text-shadow: 0 0 20px rgba(255,255,255,0.1);
//         }

//         .divider {
//           width: 60px;
//           height: 4px;
//           background: var(--accent);
//           margin: 1.5rem auto;
//           border-radius: 2px;
//         }

//         .status {
//           font-size: 1rem;
//           letter-spacing: 0.5em;
//           text-transform: uppercase;
//           color: #9aa4b2;
//         }

//         .footer {
//           position: absolute;
//           bottom: 3rem;
//           font-size: 0.7rem;
//           letter-spacing: 0.2em;
//           opacity: 0.5;
//         }
//       `}</style>
//     </>
//   );
// }









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
//     // Start animation 100ms after mount to ensure DOM is ready
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Gatebreaker Studios — Coming Soon</title>
//         <meta
//           name="description"
//           content="Gatebreaker Studios — A game creation studio. New worlds are forming."
//         />
//       </Head>

//       {/* --- THE GATES --- 
//           Using inline styles for the transform ensures the browser animates it 
//           even if CSS classes are slow to attach. 
//       */}
//       <div className="gate-container">
//         <div 
//           className="gate-panel gate-left"
//           style={{ transform: isLoaded ? 'translateX(-100%)' : 'translateX(0)' }}
//         />
//         <div 
//           className="gate-panel gate-right"
//           style={{ transform: isLoaded ? 'translateX(100%)' : 'translateX(0)' }}
//         />
//       </div>

//       {/* BACKGROUND */}
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
//           tint="#A7EF9E"
//           mouseReact
//           mouseStrength={0.5}
//           brightness={0.6}
//           className={undefined}
//           style={undefined}
//         />
//         <div className="overlay" />
//       </div>

//       {/* CONTENT 
//           We force opacity: 0 and display: flex inline to prevent the "Upper Left" flash.
//       */}
//       <main 
//         className="wrapper"
//         style={{ 
//           opacity: isLoaded ? 1 : 0, 
//           transform: isLoaded ? 'scale(1)' : 'scale(0.95)' 
//         }}
//       >
//         <section className="content">
//           <h1 className="title">Gatebreaker Studios</h1>
//           <span className="status">Coming Soon</span>
//         </section>

//         <footer className="footer">
//           © {new Date().getFullYear()} Gatebreaker Studios LLC
//         </footer>
//       </main>

//       <style jsx global>{`
//         /* GLOBAL RESET to ensure full screen */
//         html, body {
//           margin: 0;
//           padding: 0;
//           width: 100%;
//           height: 100%;
//           overflow: hidden; /* Prevent scrollbars during animation */
//           background-color: #06080c;
//         }
//       `}</style>

//       <style jsx>{`
//         :root {
//           --bg: #06080c;
//           --fg: #e7ebf3;
//           --muted: #9aa4b2;
//           --accent: #7f5cff;
//           --gate-color: #06080c; /* Matches BG */
//         }

//         /* --- GATE STYLES --- */
//         .gate-container {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100vw;
//           height: 100vh;
//           z-index: 9999;
//           pointer-events: none;
//           display: flex; /* Ensures gates sit side-by-side correctly */
//         }

//         .gate-panel {
//           width: 50%;
//           height: 100%;
//           background-color: var(--gate-color);
//           position: relative;
//           z-index: 10000;
//           /* The transition handles the smoothness of the inline transform change */
//           transition: transform 2.5s cubic-bezier(0.19, 1, 0.22, 1);
//           will-change: transform;
//         }

//         .gate-left {
//           border-right: 1px solid #1a1a1a;
//           box-shadow: inset -10px 0 30px rgba(0,0,0,1);
//         }

//         .gate-right {
//           border-left: 1px solid #1a1a1a;
//           box-shadow: inset 10px 0 30px rgba(0,0,0,1);
//         }

//         /* --- BACKGROUND --- */
//         .background {
//           position: fixed;
//           inset: 0;
//           z-index: 0;
//           width: 100vw;
//           height: 100vh;
//         }

//         .overlay {
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(
//             circle at 50% 50%,
//             rgba(20, 24, 36, 0.1),
//             rgba(6, 8, 12, 0.4)
//           );
//           z-index: 1;
//         }

//         /* --- WRAPPER LAYOUT --- */
//         .wrapper {
//           position: relative;
//           z-index: 10;
//           min-height: 100vh;
//           width: 100%;
          
//           /* Critical Flexbox centering */
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
          
//           padding: 3rem 1.5rem;
//           color: var(--fg);
//           font-family: system-ui, -apple-system, sans-serif;
//           text-align: center;
          
//           /* The transition handles the smoothness of the inline opacity change */
//           transition: opacity 2s ease 0.5s, transform 2s ease 0.5s;
//         }

//         .content {
//           max-width: 720px;
//         }

//         .title {
//           font-size: clamp(2.6rem, 6vw, 4.2rem);
//           margin-bottom: 1rem;
//         }

//         .status {
//           display: inline-block;
//           font-size: 0.95rem;
//           letter-spacing: 0.35em;
//           text-transform: uppercase;
//           color: var(--accent);
//           margin-bottom: 2.5rem;
//         }

//         .footer {
//           margin-top: 4rem;
//           font-size: 0.75rem;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           color: #6f7885;
//         }
//       `}</style>
//     </>
//   );
// }








// 'use client';

// import dynamic from 'next/dynamic';
// import Head from 'next/head';
// import Link from 'next/link';

// const FaultyTerminal = dynamic(
//   () => import('./components/FaultyTerminal'),
//   { ssr: false }
// );

// export default function GatebreakerComingSoon() {
//   return (
//     <>
//       <Head>
//         <title>Gatebreaker Studios — Coming Soon</title>
//         <meta
//           name="description"
//           content="Gatebreaker Studios — A game creation studio. New worlds are forming."
//         />
//       </Head>

//       {/* BACKGROUND */}
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
//           tint="#A7EF9E"
//           mouseReact
//           mouseStrength={0.5}
//           brightness={0.6} className={undefined} style={undefined}        />
//         <div className="overlay" />
//       </div>

//       {/* CONTENT */}
//       <main className="wrapper">
//         <section className="content">
//           <h1 className="title">Gatebreaker Studios</h1>

//           <span className="status">Coming Soon</span>

//         </section>

//         <footer className="footer">
//           © {new Date().getFullYear()} Gatebreaker Studios LLC
//         </footer>
//       </main>

//       <style jsx>{`
//         :root {
//           --bg: #06080c;
//           --fg: #e7ebf3;
//           --muted: #9aa4b2;
//           --accent: #7f5cff;
//         }

//         /* Background layer */
//         .background {
//           position: fixed;
//           inset: 0;
//           z-index: -2;
//         }

//         .background :global(canvas),
//         .background :global(div) {
//           width: 100% !important;
//           height: 100% !important;
//         }

//         /* Dark overlay for readability */
//         .overlay {
//           position: absolute;
//           inset: 0;
//           background:
//             radial-gradient(
//               900px 500px at 50% -10%,
//               rgba(20, 24, 36, 0.1),
//               rgba(6, 8, 12, 0.25)
//             );
//           z-index: 1;
//         }

//         /* Content */
//         .wrapper {
//           min-height: 100vh;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           padding: 3rem 1.5rem;
//           color: var(--fg);
//           font-family: system-ui, -apple-system, BlinkMacSystemFont,
//             'Segoe UI', Roboto, sans-serif;
//           text-align: center;
//         }

//         .content {
//           max-width: 720px;
//           z-index: 2;
//         }

//         .title {
//           font-size: clamp(2.6rem, 6vw, 4.2rem);
//           // letter-spacing: 0.14em;
//           // text-transform: uppercase;
//           margin-bottom: 1rem;
//           // animation: float 6s ease-in-out infinite;
//         }

//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         .divider {
//           width: 96px;
//           height: 2px;
//           margin: 2rem auto;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             var(--accent),
//             transparent
//           );
//         }

//         .description {
//           font-size: 1.1rem;
//           line-height: 1.7;
//           color: var(--muted);
//           margin-bottom: 2.5rem;
//         }

//         .status {
//           display: inline-block;
//           font-size: 0.95rem;
//           letter-spacing: 0.35em;
//           text-transform: uppercase;
//           color: var(--accent);
//           margin-bottom: 2.5rem;
//         }

//         .project {
//           font-size: 0.95rem;
//           color: var(--muted);
//         }

//         .link {
//           color: var(--fg);
//           text-decoration: none;
//           border-bottom: 1px solid rgba(127, 92, 255, 0.35);
//           padding-bottom: 2px;
//           transition: color 0.2s ease, border-color 0.2s ease;
//         }

//         .link:hover {
//           color: var(--accent);
//           border-color: var(--accent);
//         }

//         .footer {
//           margin-top: 4rem;
//           font-size: 0.75rem;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           color: #6f7885;
//           z-index: 2;
//         }
//       `}</style>
//     </>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const FaultyTerminal = dynamic(
  () => import('./components/FaultyTerminal'),
  { ssr: false }
);

const PrismaticBurst = dynamic(
  () => import('./components/PrismaticBurst'),
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
        <meta name="description" content="Gatebreaker Studios – A game creation studio." />
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
          tint="#a78bff"
          mouseReact
          mouseStrength={0.5}
          brightness={0.6}
          className={undefined}
          style={undefined}
        />

        <div className="overlay" />
      </div>

      {/* Main Content - Middle Layer */}
      <main 
        className="wrapper"
        style={{ 
          opacity: isLoaded ? 1 : 0, 
          transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)' 
        }}
      >
        <section className="content">
          <h1 className="title">
            <span className="title-word" style={{ animationDelay: '1.2s' }}>Gatebreaker</span>
            <span className="title-word" style={{ animationDelay: '1.4s' }}>Studios</span>
          </h1>
          <div className="divider" style={{ animationDelay: '1.6s' }} />
          <span className="status" style={{ animationDelay: '1.8s' }}>Coming Soon</span>
        </section>

        <footer className="footer" style={{ animationDelay: '2s' }}>
          © {new Date().getFullYear()} Gatebreaker Studios LLC
        </footer>
      </main>

      {/* Portal Gate Container - Highest Layer */}
      <div className="gate-container">
        {/* Depth layers for 3D portal effect */}
        <div className="portal-depth-layer layer-1" style={{ opacity: isLoaded ? 0 : 1 }} />
        <div className="portal-depth-layer layer-2" style={{ opacity: isLoaded ? 0 : 1 }} />
        <div className="portal-depth-layer layer-3" style={{ opacity: isLoaded ? 0 : 1 }} />
        
        {/* Energy vortex in center */}
        <div 
          className="portal-vortex" 
          style={{ 
            opacity: isLoaded ? 0 : 1,
            transform: isLoaded ? 'scale(0)' : 'scale(1)'
          }}
        />
        
        {/* Main gate panels */}
        <div 
          className="gate-panel gate-left"
          style={{ transform: isLoaded ? 'translateX(-100%)' : 'translateX(0)' }}
        >
          <div className="gate-texture" />
          <div className="gate-edge-glow" />
        </div>
        
        <div 
          className="gate-panel gate-right"
          style={{ transform: isLoaded ? 'translateX(100%)' : 'translateX(0)' }}
        >
          <div className="gate-texture" />
          <div className="gate-edge-glow" />
        </div>
      </div>

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: #000000;
        }
        
        /* Prevent white flash */
        body {
          background: #000000 !important;
        }
      `}</style>

      <style jsx>{`
        :root {
          --bg: #06080c;
          --fg: #e7ebf3;
          --accent: #33285bff;
          --accent-bright: #a78bff;
          --gate-dark: #0a0c12;
        }

        // @media (max-width: 900px) {
        //   .content {
        //     padding: 0 50px;
        //   }
        // }

        /* BACKGROUND - z-index: 1 */
        .background {
          position: fixed;
          inset: 0;
          z-index: 1;
          width: 100vw;
          height: 100vh;
          background: #000;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            transparent 0%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.5) 100%
          );
          z-index: 1;
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
          color: var(--fg);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          text-align: center;
          transition: opacity 2s ease 1s, transform 2s cubic-bezier(0.19, 1, 0.22, 1) 1s;
        }

        .content {
          max-width: 900px;
        }

        /* Enhanced title styling */
        .title {
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 800;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.3em;
          line-height: 1.2;
        }

        .title-word {
          display: inline-block;
          opacity: 0;
          animation: titleFadeIn 1s ease forwards;
          color: #ffffff;
          text-shadow: 
            0 0 40px rgba(127, 92, 255, 0.5),
            0 0 20px rgba(167, 139, 255, 0.4),
            0 2px 4px rgba(0, 0, 0, 0.8);
          position: relative;
        }

        .title-word::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            var(--accent-bright) 50%,
            #ffffff 100%
          );
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s ease-in-out infinite;
          z-index: 1;
        }

        @keyframes titleFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px) rotateX(90deg);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
            filter: blur(0px);
          }
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Divider */
        .divider {
          width: 80px;
          height: 3px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--accent),
            var(--accent-bright),
            var(--accent),
            transparent
          );
          margin: 2rem auto;
          border-radius: 2px;
          box-shadow: 0 0 20px var(--accent);
          opacity: 0;
          animation: fadeInUp 1s ease forwards;
        }

        /* Status text */
        .status {
          display: inline-block;
          font-size: 1.1rem;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: #c5cdd8;
          opacity: 0;
          animation: fadeInUp 1s ease forwards;
          position: relative;
        }

        .status::before,
        .status::after {
          content: '//';
          position: absolute;
          color: var(--accent);
          opacity: 0.5;
          font-size: 0.8em;
        }

        .status::before {
          left: -2em;
        }

        .status::after {
          right: -2em;
        }

        /* Footer */
        .footer {
          position: absolute;
          bottom: 3rem;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0;
          color: rgba(154, 164, 178, 0.6);
          color: rgba(154, 164, 178, 1);
          animation: fadeInUp 1s ease forwards;
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

        /* Portal depth layers - creates tunnel effect */
        .portal-depth-layer {
          position: absolute;
          inset: 0;
          transition: opacity 1.5s ease-out;
          pointer-events: none;
        }

        .layer-1 {
          background: radial-gradient(
            ellipse at center,
            rgba(127, 92, 255, 0.15) 0%,
            transparent 50%
          );
          animation: portalPulse 2s ease-in-out infinite;
        }

        .layer-2 {
          background: radial-gradient(
            ellipse at center,
            rgba(127, 92, 255, 0.25) 0%,
            transparent 40%
          );
          animation: portalPulse 2s ease-in-out infinite;
          animation-delay: 0.3s;
        }

        .layer-3 {
          background: radial-gradient(
            ellipse at center,
            rgba(167, 139, 255, 0.35) 0%,
            transparent 30%
          );
          animation: portalPulse 2s ease-in-out infinite;
          animation-delay: 0.6s;
        }

        @keyframes portalPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Central vortex */
        .portal-vortex {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 200px;
          height: 200px;
          margin-left: -100px;
          margin-top: -100px;
          background: radial-gradient(
            circle,
            rgba(167, 139, 255, 0.8) 0%,
            rgba(127, 92, 255, 0.4) 30%,
            transparent 70%
          );
          border-radius: 50%;
          filter: blur(20px);
          animation: vortexSpin 3s linear infinite;
          transition: opacity 1.2s ease-out, transform 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes vortexSpin {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
          to { transform: rotate(360deg) scale(1); }
        }

        /* Main gate panels */
        .gate-panel {
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            #0a0c12 0%,
            #06080c 50%,
            #0a0c12 100%
          );
          position: relative;
          transition: transform 3.2s cubic-bezier(0.76, 0, 0.24, 1);
          overflow: hidden;
        }

        .gate-texture {
          position: absolute;
          inset: 0;
          opacity: 0.15;
          background-image: 
            repeating-linear-gradient(
              0deg,
              rgba(255,255,255,0.03) 0px,
              transparent 2px,
              transparent 4px,
              rgba(255,255,255,0.03) 6px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255,255,255,0.03) 0px,
              transparent 2px,
              transparent 4px,
              rgba(255,255,255,0.03) 6px
            );
        }

        .gate-edge-glow {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            var(--accent) 50%,
            transparent 100%
          );
          box-shadow: 0 0 20px 5px var(--accent);
          opacity: 0.6;
        }

        .gate-left {
          border-right: 1px solid rgba(127, 92, 255, 0.3);
        }

        .gate-left .gate-edge-glow {
          right: -2px;
        }

        .gate-right {
          border-left: 1px solid rgba(127, 92, 255, 0.3);
        }

        .gate-right .gate-edge-glow {
          left: -2px;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .title {
            font-size: clamp(2rem, 10vw, 3.5rem);
          }
          
          .status::before,
          .status::after {
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
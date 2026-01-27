'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const FaultyTerminal = dynamic(
  () => import('./components/FaultyTerminal'),
  { 
    ssr: false,
    loading: () => null
  }
);

/**
 * CountdownDisplay with random glitches showing Caesar cipher of "PROTOCOL"
 */
const CountdownDisplay = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState('');

  // Caesar cipher function
  const caesarCipher = (text: string, shift: number) => {
    return text.split('').map(char => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const base = code >= 65 && code <= 90 ? 65 : 97;
        return String.fromCharCode(((code - base + shift) % 26) + base);
      }
      return char;
    }).join('');
  };

  useEffect(() => {
    const targetDate = new Date('2026-03-01T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setIsCountdownComplete(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      // Random chance of glitch (10% every 3 seconds)
      if (Math.random() < 0.1 && !isCountdownComplete) {
        // Random Caesar shift between 3 and 23
        const shift = Math.floor(Math.random() * 21) + 3;
        const ciphered = caesarCipher('PROTOCOL', shift);
        
        setGlitchText(ciphered);
        setIsGlitching(true);
        
        // Glitch lasts 150-400ms
        setTimeout(() => {
          setIsGlitching(false);
        }, Math.random() * 250 + 250);
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, [isCountdownComplete]);

  return (
    <>
      {!isCountdownComplete ? (
        <div className="countdown-container" style={{ animationDelay: '1.7s' }}>
          {!isGlitching ? (
            <div className="countdown-grid">
              <div className="countdown-item">
                <div className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="countdown-label">Days</div>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item">
                <div className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="countdown-label">Hours</div>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item">
                <div className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="countdown-label">Minutes</div>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item">
                <div className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="countdown-label">Seconds</div>
              </div>
            </div>
          ) : (
            <div className="glitch-display">
              <div className="glitch-text">{glitchText}</div>
            </div>
          )}
        </div>
      ) : (
        <div className="launch-container" style={{ animationDelay: '1.7s' }}>
          <a 
            href="https://gatebreakerprotocol.com" 
            // target="_blank" 
            rel="noopener noreferrer"
            className="launch-link"
          >
            <span className="launch-text">Enter Protocol</span>
            <span className="launch-arrow">→</span>
          </a>
        </div>
      )}

      {!isCountdownComplete && (
        <div className="kickstarter-container" style={{ animationDelay: '2s' }}>
          <a 
            href="https://www.kickstarter.com/projects/your-project-link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="kickstarter-button"
          >
            <span className="kickstarter-text">Back the breakers</span>
            {/* <span className="kickstarter-text">Back the breakers <span className="kickstarter-icon">♦</span> Kickstarter</span> */}
          </a>
        </div>
      )}

      <style jsx>{`
        .countdown-container {
          // margin: 3rem 0;
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeInUp 1.2s ease forwards;
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .countdown-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          // gap: 1rem;
        }

        .countdown-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          // gap: 0.5rem;
        }

        .countdown-value {
          font-family: 'OfficeRegular', sans-serif;
          font-size: clamp(2rem, 5vw, 2.5rem);
          font-weight: 700;
          // color: #d4b884;
          // color: #f8dca9;
          color: #e8ca95;
          line-height: 1;
          // padding: 1rem 1.5rem;
          // padding: 1rem;
          padding: 0.5rem;
          // border: 1px solid rgba(90, 127, 168, 0.3);
          // background: linear-gradient(
          //   135deg,
          //   rgba(90, 127, 168, 0.08) 0%,
          //   rgba(120, 86, 161, 0.08) 100%
          // );
          // border-radius: 8px;
          min-width: 80px;
          text-align: center;
          // box-shadow: 
          //   0 0 20px rgba(90, 127, 168, 0.1),
          //   inset 0 0 20px rgba(120, 86, 161, 0.05);
          will-change: contents;
          // opacity: 0;
          // animation: fadeInUp 1.2s ease forwards, backdropBlur 18s ease forwards;
          // animation: backdropBlur 18s ease forwards;
        }

        .countdown-label {
          font-family: 'OfficeRegular', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #a8b5c7;
        }

        .countdown-separator {
          font-family: 'OfficeRegular', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          color: #becfe2;
          margin: 0 0.15rem;
          padding-bottom: 1.1rem;
          opacity: 0.6;
          animation: blink 2s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.3; }
        }

        /* Glitch display */
        .glitch-display {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .glitch-text {
          font-family: 'OfficeRegular', sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          letter-spacing: 0.5em;
          color: #d97742;
          text-shadow: 
            0 0 20px rgba(217, 119, 66, 0.8),
            2px 2px 0 rgba(90, 127, 168, 0.5),
            -2px -2px 0 rgba(120, 86, 161, 0.5);
          animation: glitchShake 0.3s infinite, colorShift 0.1s infinite;
          filter: blur(0.5px);
          text-transform: uppercase;
        }

        @keyframes glitchShake {
          0% { transform: translate(0, 0) skew(0deg); }
          25% { transform: translate(-1px, 1px) skew(2deg); }
          50% { transform: translate(1px, -1px) skew(-2deg); }
          75% { transform: translate(-1px, -1px) skew(1deg); }
          100% { transform: translate(1px, 1px) skew(-1deg); }
        }

        @keyframes colorShift {
          0% { color: #d97742; }
          33% { color: #5a7fa8; }
          66% { color: #7856a1; }
          100% { color: #d97742; }
        }

        .kickstarter-container {
          margin-top: 2rem;
          opacity: 0;
          animation: fadeInUp 1.2s ease forwards;
          display: flex;
          justify-content: center;
        }

        .kickstarter-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          font-family: 'OfficeRegular', sans-serif;
          font-size: 1rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          color: #eafff3; /* subtle mint-white for contrast */
          // border: 2px solid rgba(90, 127, 168, 0.4);
          border: 2px solid rgba(43, 222, 115, 0.45);
          // background: linear-gradient(
          //   135deg,
          //   rgba(90, 127, 168, 0.25) 0%,
          //   rgba(217, 119, 66, 0.25) 40%,
          //   rgba(120, 86, 161, 0.25) 100%
          // );
          background: linear-gradient(
            135deg,
            rgba(43, 222, 115, 0.20) 0%,
            rgba(27, 180, 90, 0.25) 40%,
            rgba(15, 120, 60, 0.30) 100%
          );
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .kickstarter-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(212, 184, 132, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        .kickstarter-button:hover::before {
          // left: 100%;
        }

        .kickstarter-button:hover {
          // border-color: rgba(217, 119, 66, 0.8);
          // transform: translateY(-2px);
          // box-shadow: 
          //   0 0 50px rgba(217, 119, 66, 0.6),
          //   inset 0 0 50px rgba(120, 86, 161, 0.2);

          color: #eafff3; /* subtle mint-white for contrast */
          border-color: rgba(43, 222, 115, 0.9);
          transform: translateY(-2px);
          box-shadow: 
            0 0 50px rgba(43, 222, 115, 0.6),
            inset 0 0 50px rgba(20, 140, 75, 0.25);
        }

        .kickstarter-text {
          position: relative;
          z-index: 1;
        }

        .kickstarter-icon {
          font-size: 0.8rem;
          transition: transform 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .kickstarter-button:hover .kickstarter-icon {
          transform: scale(1.2);
        }

        .launch-container {
          margin: 3rem 0;
          opacity: 0;
          animation: fadeInUp 1.2s ease forwards, scaleIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          animation-delay: 0s, 1.2s;
        }

        @keyframes scaleIn {
          from { transform: scale(0.8); }
          to { transform: scale(1); }
        }

        .launch-link {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem 2rem;
          font-family: 'OfficeRegular', sans-serif;
          font-size: 1.2rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          color: #d4b884;
          color: #f8dca9;
          color: #fff2dc;
          border: 2px solid rgba(90, 127, 168, 0.5);
          // background: linear-gradient(
          //   135deg,
          //   rgba(90, 127, 168, 0.15) 0%,
          //   rgba(217, 119, 66, 0.15) 50%,
          //   rgba(120, 86, 161, 0.15) 100%
          // );
          background: linear-gradient(
            135deg,
            rgba(90, 127, 168, 0.3) 0%,
            rgba(217, 119, 66, 0.3) 40%,
            rgba(120, 86, 161, 0.3) 100%
          );
          background-size: 200% 200%;
          // border-radius: 4px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 
            0 0 30px rgba(90, 127, 168, 0.3),
            inset 0 0 30px rgba(120, 86, 161, 0.1);
          animation: buttonPulse 3s ease-in-out infinite;
        }

        .launch-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(212, 184, 132, 0.2) 0%,
            rgba(90, 127, 168, 0.2) 50%,
            rgba(217, 119, 66, 0.2) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .launch-link:hover {
          border-color: rgba(217, 119, 66, 0.8);
          transform: translateY(-2px);
          box-shadow: 
            0 0 50px rgba(217, 119, 66, 0.6),
            inset 0 0 50px rgba(120, 86, 161, 0.2);
        }

        .launch-link:hover::before { opacity: 1; }

        .launch-text { position: relative; z-index: 1; }
        
        .launch-arrow {
          position: relative;
          z-index: 1;
          font-size: 1.5rem;
          transition: transform 0.3s ease;
        }

        .launch-link:hover .launch-arrow { transform: translateX(5px); }

        @keyframes buttonPulse {
          0%, 100% {
            box-shadow: 
              0 0 30px rgba(90, 127, 168, 0.3),
              inset 0 0 30px rgba(120, 86, 161, 0.1);
          }
          50% {
            box-shadow: 
              0 0 50px rgba(90, 127, 168, 0.5),
              inset 0 0 50px rgba(120, 86, 161, 0.2);
          }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .countdown-grid { 
            // gap: 0.5rem; 
            gap: 0;
          }

          .countdown-value {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            padding: 0.75rem 1rem;
            min-width: 60px;
          }
          .countdown-label { font-size: 0.6rem; }
          .countdown-separator {
            font-size: clamp(1.5rem, 3vw, 2rem);
            margin: 0 0.1rem;
          }
          .glitch-text {
            font-size: clamp(1.8rem, 8vw, 3.5rem);
            letter-spacing: 0.3em;
          }
          .launch-link {
            padding: 1rem 2rem;
            font-size: 1rem;
            gap: 0.75rem;
          }
        }
      `}</style>
    </>
  );
};

export default function GatebreakerComingSoon() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
      {isMounted && (
        <div className="background" key="background-static">
          <FaultyTerminal
            scale={1.5}
            digitSize={1.5}
            scanlineIntensity={0.5}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={1}
            dither={1}
            curvature={0.3}
            tint="#5a7fa8"
            mouseReact
            mouseStrength={0.5}
            brightness={0.65}
            className={undefined}
            style={undefined}
          />
          <div className="overlay" />
          <div className="grain" />
        </div>
      )}

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
          
          <CountdownDisplay />
        </section>

        <footer className="footer" style={{ animationDelay: '2.1s' }}>
          <div className="footer-content">
            <span>© {new Date().getFullYear()} Gatebreaker Studios LLC</span>
          </div>
        </footer>
      </main>

      {/* Portal Gate Container - Highest Layer */}
      <div className="gate-container">
        <div className="portal-depth-layer layer-1" style={{ opacity: isLoaded ? 0 : 1 }} />
        <div className="portal-depth-layer layer-2" style={{ opacity: isLoaded ? 0 : 1 }} />
        <div className="portal-depth-layer layer-3" style={{ opacity: isLoaded ? 0 : 1 }} />
                
        <div 
          className="portal-vortex" 
          style={{ 
            opacity: isLoaded ? 0 : 1,
            transform: isLoaded ? 'scale(0) rotate(180deg)' : 'scale(1) rotate(0deg)'
          }}
        />
        
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
        .background {
          position: fixed;
          inset: 0;
          z-index: 1;
          width: 100vw;
          height: 100vh;
          height: 100svh;
          background: linear-gradient(135deg, #0a0d16 0%, #111825 50%, #0d1018 100%);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            rgba(90, 127, 168, 0.05) 0%,
            rgba(10, 13, 22, 0.4) 50%,
            rgba(10, 13, 22, 0.85) 100%
          );
          z-index: 1;
          opacity: 0.7;
        }

        .grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.04;
          z-index: 2;
        }

        .wrapper {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #e8f4f8;
          text-align: center;
          transition: opacity 2.2s cubic-bezier(0.19, 1, 0.22, 1) 0.8s, 
          transform 2.2s cubic-bezier(0.19, 1, 0.22, 1) 0.8s;
        }

        .content {
          max-width: 1100px;
          padding: 0 2rem;
        }

        .logo-container {
          // margin-bottom: 3rem;
          // margin-bottom: 1rem;
          margin: 1rem 0;
        }

        .title {
          font-family: 'BluuNext', monospace;
          font-size: clamp(3rem, 10vw, 6.5rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1;
        }

        .title-word {
          display: block;
          opacity: 0;
          animation: titleFadeIn 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          color: #e8f4f8;
          position: relative;
          transform-style: preserve-3d;
          letter-spacing: 0rem;
        }

        .title-word::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            #d4b884 0%,
            #5a7fa8 30%,
            #d97742 60%,
            #7856a1 100%
          );
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 10s ease infinite;
          z-index: 1;
        }

        .title-word::after {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          filter: blur(15px);
          opacity: 0.3;
          z-index: -1;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2rem, 3vw, 1.6rem);
          font-weight: 400;
          letter-spacing: 0.7em;
          color: #a8b5c7;
          opacity: 0;
          animation: fadeInUp 1.2s ease forwards;
          text-indent: 0.8em;
          text-shadow: 
            0 0 15px rgba(90, 127, 168, 0.3);
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
          color: rgba(154, 164, 178, 1);
          display: flex;
          align-items: center;
          gap: 1rem;
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

        .gate-container {
          position: fixed;
          inset: 0;
          z-index: 9999;
          pointer-events: none;
          display: flex;
        }

        .portal-depth-layer {
          position: absolute;
          inset: 0;
          transition: opacity 1.8s ease-out;
          pointer-events: none;
        }

        .layer-1 {
          background: radial-gradient(
            ellipse at center,
            rgba(90, 127, 168, 0.12) 0%,
            rgba(217, 119, 66, 0.08) 40%,
            transparent 65%
          );
          animation: portalPulse 3s ease-in-out infinite;
        }

        .layer-2 {
          background: radial-gradient(
            ellipse at center,
            rgba(120, 86, 161, 0.15) 0%,
            rgba(90, 127, 168, 0.1) 35%,
            transparent 55%
          );
          animation: portalPulse 3s ease-in-out infinite;
          animation-delay: 0.4s;
        }

        .layer-3 {
          background: radial-gradient(
            ellipse at center,
            rgba(217, 119, 66, 0.18) 0%,
            rgba(120, 86, 161, 0.12) 25%,
            transparent 45%
          );
          animation: portalPulse 3s ease-in-out infinite;
          animation-delay: 0.8s;
        }

        @keyframes portalPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.08); opacity: 0.25; }
        }

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
            rgba(212, 184, 132, 0.6) 0%,
            rgba(90, 127, 168, 0.5) 30%,
            rgba(217, 119, 66, 0.3) 50%,
            rgba(120, 86, 161, 0.2) 70%,
            transparent 100%
          );
          border-radius: 50%;
          filter: blur(18px);
          transition: opacity 1.5s ease-out, transform 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation: vortexPulse 2.5s ease-in-out infinite;
        }

        @keyframes vortexPulse {
          0%, 100% { 
            transform: scale(1) rotate(0deg); 
            filter: blur(18px); 
          }
          50% { 
            transform: scale(1.15) rotate(180deg); 
            filter: blur(22px); 
          }
        }

        .gate-panel {
          width: 50%;
          height: 100%;
          background: linear-gradient(
            135deg,
            #111825 0%,
            #0a0d16 50%,
            #111825 100%
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
              rgba(90, 127, 168, 0.03) 0px,
              transparent 1px,
              transparent 3px,
              rgba(90, 127, 168, 0.03) 4px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(120, 86, 161, 0.03) 0px,
              transparent 1px,
              transparent 3px,
              rgba(120, 86, 161, 0.03) 4px
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
            #5a7fa8 20%,
            #d97742 50%,
            #7856a1 80%,
            transparent 100%
          );
          box-shadow: 
            0 0 20px 3px #5a7fa8,
            0 0 40px 2px #d97742;
          opacity: 0.7;
          animation: edgeGlow 4s ease-in-out infinite;
        }

        @keyframes edgeGlow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.9; }
        }

        .gate-left {
          border-right: 1px solid rgba(90, 127, 168, 0.25);
        }

        .gate-left .gate-edge-glow {
          right: -1px;
        }

        .gate-left .gate-inner-shadow {
          transform: scaleX(1);
        }

        .gate-right {
          border-left: 1px solid rgba(90, 127, 168, 0.25);
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
            font-size: clamp(2rem, 11vw, 4rem);
            letter-spacing: -0.02em;
          }

          .subtitle {
            font-size: 1.4rem;
            letter-spacing: 0.5em;
            margin-top: 0rem;
          }

          .logo-container {
            // margin-bottom: 0.5rem;
            // margin-bottom: 0;
            margin: 2rem 0 0;
          }

          .countdown-container {
            // margin: 0;
          }

          .footer-content {
            flex-direction: column;
            gap: 0.5rem;
            font-size: 0.6rem;
          }

          .kickstarter-button {
            padding: 0.8rem 1.5rem;
            font-size: 0.75rem;
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
//   { 
//     ssr: false,
//     loading: () => null
//   }
// );

// /**
//  * CountdownDisplay with random glitches showing Caesar cipher of "PROTOCOL"
//  */
// const CountdownDisplay = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });
//   const [isCountdownComplete, setIsCountdownComplete] = useState(false);
//   const [isGlitching, setIsGlitching] = useState(false);
//   const [glitchText, setGlitchText] = useState('');

//   // Caesar cipher function
//   const caesarCipher = (text: string, shift: number) => {
//     return text.split('').map(char => {
//       if (char.match(/[a-z]/i)) {
//         const code = char.charCodeAt(0);
//         const base = code >= 65 && code <= 90 ? 65 : 97;
//         return String.fromCharCode(((code - base + shift) % 26) + base);
//       }
//       return char;
//     }).join('');
//   };

//   useEffect(() => {
//     const targetDate = new Date('2026-03-01T00:00:00').getTime();

//     const updateCountdown = () => {
//       const now = new Date().getTime();
//       const distance = targetDate - now;

//       if (distance < 0) {
//         setIsCountdownComplete(true);
//         return;
//       }

//       setTimeLeft({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((distance % (1000 * 60)) / 1000)
//       });
//     };

//     updateCountdown();
//     const interval = setInterval(updateCountdown, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   // Random glitch effect
//   useEffect(() => {
//     const glitchInterval = setInterval(() => {
//       // Random chance of glitch (10% every 3 seconds)
//       if (Math.random() < 0.1 && !isCountdownComplete) {
//         // Random Caesar shift between 3 and 23
//         const shift = Math.floor(Math.random() * 21) + 3;
//         const ciphered = caesarCipher('PROTOCOL', shift);
        
//         setGlitchText(ciphered);
//         setIsGlitching(true);
        
//         // Glitch lasts 150-400ms
//         setTimeout(() => {
//           setIsGlitching(false);
//         }, Math.random() * 250 + 250);
//       }
//     }, 3000);

//     return () => clearInterval(glitchInterval);
//   }, [isCountdownComplete]);

//   return (
//     <>
//       {!isCountdownComplete ? (
//         <div className="countdown-container" style={{ animationDelay: '1.7s' }}>
//           {!isGlitching ? (
//             <div className="countdown-grid">
//               <div className="countdown-item">
//                 <div className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</div>
//                 <div className="countdown-label">Days</div>
//               </div>
//               <div className="countdown-separator">:</div>
//               <div className="countdown-item">
//                 <div className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</div>
//                 <div className="countdown-label">Hours</div>
//               </div>
//               <div className="countdown-separator">:</div>
//               <div className="countdown-item">
//                 <div className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
//                 <div className="countdown-label">Minutes</div>
//               </div>
//               <div className="countdown-separator">:</div>
//               <div className="countdown-item">
//                 <div className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
//                 <div className="countdown-label">Seconds</div>
//               </div>
//             </div>
//           ) : (
//             <div className="glitch-display">
//               <div className="glitch-text">{glitchText}</div>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div className="launch-container" style={{ animationDelay: '1.7s' }}>
//           <a 
//             href="https://gatebreakerprotocol.com" 
//             // target="_blank" 
//             rel="noopener noreferrer"
//             className="launch-link"
//           >
//             <span className="launch-text">Enter Protocol</span>
//             <span className="launch-arrow">→</span>
//           </a>
//         </div>
//       )}

//       <style jsx>{`
//         .countdown-container {
//           // margin: 3rem 0;
//           margin-bottom: 2rem;
//           opacity: 0;
//           animation: fadeInUp 1.2s ease forwards;
//           min-height: 120px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .countdown-grid {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           // gap: 1rem;
//         }

//         .countdown-item {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           // gap: 0.5rem;
//         }

//         .countdown-value {
//           font-family: 'OfficeRegular', sans-serif;
//           font-size: clamp(2rem, 5vw, 2.5rem);
//           font-weight: 700;
//           color: #d4b884;
//           line-height: 1;
//           // padding: 1rem 1.5rem;
//           // padding: 1rem;
//           padding: 0.5rem;
//           // border: 1px solid rgba(90, 127, 168, 0.3);
//           // background: linear-gradient(
//           //   135deg,
//           //   rgba(90, 127, 168, 0.08) 0%,
//           //   rgba(120, 86, 161, 0.08) 100%
//           // );
//           // border-radius: 8px;
//           min-width: 80px;
//           text-align: center;
//           // box-shadow: 
//           //   0 0 20px rgba(90, 127, 168, 0.1),
//           //   inset 0 0 20px rgba(120, 86, 161, 0.05);
//           will-change: contents;
//           // opacity: 0;
//           // animation: fadeInUp 1.2s ease forwards, backdropBlur 18s ease forwards;
//           // animation: backdropBlur 18s ease forwards;
//         }

//         .countdown-label {
//           font-family: 'OfficeRegular', sans-serif;
//           font-size: 0.7rem;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: #a8b5c7;
//         }

//         .countdown-separator {
//           font-family: 'OfficeRegular', sans-serif;
//           font-size: clamp(2rem, 4vw, 3rem);
//           font-size: clamp(1.5rem, 3vw, 2.5rem);
//           color: #becfe2;
//           margin: 0 0.15rem;
//           padding-bottom: 1.1rem;
//           opacity: 0.6;
//           animation: blink 2s ease-in-out infinite;
//         }

//         @keyframes blink {
//           0%, 100% { opacity: 0.7; }
//           50% { opacity: 0.3; }
//         }

//         /* Glitch display */
//         .glitch-display {
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .glitch-text {
//           font-family: 'OfficeRegular', sans-serif;
//           font-size: clamp(2rem, 5vw, 3.5rem);
//           font-weight: 700;
//           letter-spacing: 0.5em;
//           color: #d97742;
//           text-shadow: 
//             0 0 20px rgba(217, 119, 66, 0.8),
//             2px 2px 0 rgba(90, 127, 168, 0.5),
//             -2px -2px 0 rgba(120, 86, 161, 0.5);
//           animation: glitchShake 0.3s infinite, colorShift 0.1s infinite;
//           filter: blur(0.5px);
//           text-transform: uppercase;
//         }

//         @keyframes glitchShake {
//           0% { transform: translate(0, 0) skew(0deg); }
//           25% { transform: translate(-1px, 1px) skew(2deg); }
//           50% { transform: translate(1px, -1px) skew(-2deg); }
//           75% { transform: translate(-1px, -1px) skew(1deg); }
//           100% { transform: translate(1px, 1px) skew(-1deg); }
//         }

//         @keyframes colorShift {
//           0% { color: #d97742; }
//           33% { color: #5a7fa8; }
//           66% { color: #7856a1; }
//           100% { color: #d97742; }
//         }

//         .launch-container {
//           margin: 3rem 0;
//           opacity: 0;
//           animation: fadeInUp 1.2s ease forwards, scaleIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
//           animation-delay: 0s, 1.2s;
//         }

//         @keyframes scaleIn {
//           from { transform: scale(0.8); }
//           to { transform: scale(1); }
//         }

//         .launch-link {
//           display: inline-flex;
//           align-items: center;
//           gap: 1rem;
//           padding: 1.5rem 3rem;
//           font-family: 'OfficeRegular', sans-serif;
//           font-size: 1.2rem;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           text-decoration: none;
//           color: #d4b884;
//           border: 2px solid rgba(90, 127, 168, 0.5);
//           // background: linear-gradient(
//           //   135deg,
//           //   rgba(90, 127, 168, 0.15) 0%,
//           //   rgba(217, 119, 66, 0.15) 50%,
//           //   rgba(120, 86, 161, 0.15) 100%
//           // );
//           background: linear-gradient(
//             135deg,
//             rgba(90, 127, 168, 0.25) 0%,
//             rgba(217, 119, 66, 0.25) 50%,
//             rgba(120, 86, 161, 0.25) 100%
//           );
//           background-size: 200% 200%;
//           border-radius: 4px;
//           position: relative;
//           overflow: hidden;
//           transition: all 0.3s ease;
//           box-shadow: 
//             0 0 30px rgba(90, 127, 168, 0.3),
//             inset 0 0 30px rgba(120, 86, 161, 0.1);
//           animation: buttonPulse 3s ease-in-out infinite;
//         }

//         .launch-link::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             135deg,
//             rgba(212, 184, 132, 0.2) 0%,
//             rgba(90, 127, 168, 0.2) 50%,
//             rgba(217, 119, 66, 0.2) 100%
//           );
//           opacity: 0;
//           transition: opacity 0.3s ease;
//         }

//         .launch-link:hover {
//           border-color: rgba(217, 119, 66, 0.8);
//           transform: translateY(-2px);
//           box-shadow: 
//             0 0 50px rgba(217, 119, 66, 0.6),
//             inset 0 0 50px rgba(120, 86, 161, 0.2);
//         }

//         .launch-link:hover::before { opacity: 1; }

//         .launch-text { position: relative; z-index: 1; }
        
//         .launch-arrow {
//           position: relative;
//           z-index: 1;
//           font-size: 1.5rem;
//           transition: transform 0.3s ease;
//         }

//         .launch-link:hover .launch-arrow { transform: translateX(5px); }

//         @keyframes buttonPulse {
//           0%, 100% {
//             box-shadow: 
//               0 0 30px rgba(90, 127, 168, 0.3),
//               inset 0 0 30px rgba(120, 86, 161, 0.1);
//           }
//           50% {
//             box-shadow: 
//               0 0 50px rgba(90, 127, 168, 0.5),
//               inset 0 0 50px rgba(120, 86, 161, 0.2);
//           }
//         }

//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @media (max-width: 768px) {
//           .countdown-grid { 
//             // gap: 0.5rem; 
//             gap: 0;
//           }

//           .countdown-value {
//             font-size: clamp(1.5rem, 4vw, 2.5rem);
//             padding: 0.75rem 1rem;
//             min-width: 60px;
//           }
//           .countdown-label { font-size: 0.6rem; }
//           .countdown-separator {
//             font-size: clamp(1.5rem, 3vw, 2rem);
//             margin: 0 0.1rem;
//           }
//           .glitch-text {
//             font-size: clamp(1.8rem, 8vw, 3.5rem);
//             letter-spacing: 0.3em;
//           }
//           .launch-link {
//             padding: 1rem 2rem;
//             font-size: 1rem;
//             gap: 0.75rem;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default function GatebreakerComingSoon() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
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
//       {isMounted && (
//         <div className="background" key="background-static">
//           <FaultyTerminal
//             scale={1.5}
//             digitSize={1.5}
//             scanlineIntensity={0.5}
//             glitchAmount={1}
//             flickerAmount={1}
//             noiseAmp={1}
//             chromaticAberration={1}
//             dither={1}
//             curvature={0.3}
//             tint="#5a7fa8"
//             mouseReact
//             mouseStrength={0.5}
//             brightness={0.65}
//             className={undefined}
//             style={undefined}
//           />
//           <div className="overlay" />
//           <div className="grain" />
//         </div>
//       )}

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
          
//           <CountdownDisplay />
//         </section>

//         <footer className="footer" style={{ animationDelay: '2.1s' }}>
//           <div className="footer-content">
//             <span>© {new Date().getFullYear()} Gatebreaker Studios LLC</span>
//           </div>
//         </footer>
//       </main>

//       {/* Portal Gate Container - Highest Layer */}
//       <div className="gate-container">
//         <div className="portal-depth-layer layer-1" style={{ opacity: isLoaded ? 0 : 1 }} />
//         <div className="portal-depth-layer layer-2" style={{ opacity: isLoaded ? 0 : 1 }} />
//         <div className="portal-depth-layer layer-3" style={{ opacity: isLoaded ? 0 : 1 }} />
                
//         <div 
//           className="portal-vortex" 
//           style={{ 
//             opacity: isLoaded ? 0 : 1,
//             transform: isLoaded ? 'scale(0) rotate(180deg)' : 'scale(1) rotate(0deg)'
//           }}
//         />
        
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
//         .background {
//           position: fixed;
//           inset: 0;
//           z-index: 1;
//           width: 100vw;
//           height: 100vh;
//           height: 100svh;
//           background: linear-gradient(135deg, #0a0d16 0%, #111825 50%, #0d1018 100%);
//         }

//         .overlay {
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(
//             ellipse at center,
//             rgba(90, 127, 168, 0.05) 0%,
//             rgba(10, 13, 22, 0.4) 50%,
//             rgba(10, 13, 22, 0.85) 100%
//           );
//           z-index: 1;
//           opacity: 0.7;
//         }

//         .grain {
//           position: absolute;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
//           opacity: 0.04;
//           z-index: 2;
//         }

//         .wrapper {
//           position: relative;
//           z-index: 10;
//           min-height: 100vh;
//           min-height: 100svh;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           color: #e8f4f8;
//           text-align: center;
//           transition: opacity 2.2s cubic-bezier(0.19, 1, 0.22, 1) 0.8s, 
//           transform 2.2s cubic-bezier(0.19, 1, 0.22, 1) 0.8s;
//         }

//         .content {
//           max-width: 1100px;
//           padding: 0 2rem;
//         }

//         .logo-container {
//           // margin-bottom: 3rem;
//           // margin-bottom: 1rem;
//           margin: 1rem 0;
//         }

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
//           color: #e8f4f8;
//           position: relative;
//           transform-style: preserve-3d;
//           letter-spacing: 0rem;
//         }

//         .title-word::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             135deg,
//             #d4b884 0%,
//             #5a7fa8 30%,
//             #d97742 60%,
//             #7856a1 100%
//           );
//           background-size: 200% 200%;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           animation: gradientShift 10s ease infinite;
//           z-index: 1;
//         }

//         .title-word::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: inherit;
//           filter: blur(15px);
//           opacity: 0.3;
//           z-index: -1;
//         }

//         @keyframes gradientShift {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         .subtitle {
//           font-family: 'Montserrat', sans-serif;
//           font-size: clamp(2rem, 3vw, 1.6rem);
//           font-weight: 400;
//           letter-spacing: 0.7em;
//           color: #a8b5c7;
//           opacity: 0;
//           animation: fadeInUp 1.2s ease forwards;
//           text-indent: 0.8em;
//           text-shadow: 
//             0 0 15px rgba(90, 127, 168, 0.3);
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
//           color: rgba(154, 164, 178, 1);
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

//         @keyframes backdropBlur {
//            from {
//              backdrop-filter: blur(0px);
//            }
//            to {
//              backdrop-filter: blur(10px);
//            }
//          }

//         .gate-container {
//           position: fixed;
//           inset: 0;
//           z-index: 9999;
//           pointer-events: none;
//           display: flex;
//         }

//         .portal-depth-layer {
//           position: absolute;
//           inset: 0;
//           transition: opacity 1.8s ease-out;
//           pointer-events: none;
//         }

//         .layer-1 {
//           background: radial-gradient(
//             ellipse at center,
//             rgba(90, 127, 168, 0.12) 0%,
//             rgba(217, 119, 66, 0.08) 40%,
//             transparent 65%
//           );
//           animation: portalPulse 3s ease-in-out infinite;
//         }

//         .layer-2 {
//           background: radial-gradient(
//             ellipse at center,
//             rgba(120, 86, 161, 0.15) 0%,
//             rgba(90, 127, 168, 0.1) 35%,
//             transparent 55%
//           );
//           animation: portalPulse 3s ease-in-out infinite;
//           animation-delay: 0.4s;
//         }

//         .layer-3 {
//           background: radial-gradient(
//             ellipse at center,
//             rgba(217, 119, 66, 0.18) 0%,
//             rgba(120, 86, 161, 0.12) 25%,
//             transparent 45%
//           );
//           animation: portalPulse 3s ease-in-out infinite;
//           animation-delay: 0.8s;
//         }

//         @keyframes portalPulse {
//           0%, 100% { transform: scale(1); opacity: 0.5; }
//           50% { transform: scale(1.08); opacity: 0.25; }
//         }

//         .portal-vortex {
//           position: absolute;
//           left: 50%;
//           top: 50%;
//           width: 150px;
//           height: 150px;
//           margin-left: -75px;
//           margin-top: -75px;
//           background: radial-gradient(
//             circle,
//             rgba(212, 184, 132, 0.6) 0%,
//             rgba(90, 127, 168, 0.5) 30%,
//             rgba(217, 119, 66, 0.3) 50%,
//             rgba(120, 86, 161, 0.2) 70%,
//             transparent 100%
//           );
//           border-radius: 50%;
//           filter: blur(18px);
//           transition: opacity 1.5s ease-out, transform 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
//           animation: vortexPulse 2.5s ease-in-out infinite;
//         }

//         @keyframes vortexPulse {
//           0%, 100% { 
//             transform: scale(1) rotate(0deg); 
//             filter: blur(18px); 
//           }
//           50% { 
//             transform: scale(1.15) rotate(180deg); 
//             filter: blur(22px); 
//           }
//         }

//         .gate-panel {
//           width: 50%;
//           height: 100%;
//           background: linear-gradient(
//             135deg,
//             #111825 0%,
//             #0a0d16 50%,
//             #111825 100%
//           );
//           position: relative;
//           transition: transform 3.5s cubic-bezier(0.76, 0, 0.24, 1);
//           overflow: hidden;
//         }

//         .gate-texture {
//           position: absolute;
//           inset: 0;
//           opacity: 0.08;
//           background-image: 
//             repeating-linear-gradient(
//               0deg,
//               rgba(90, 127, 168, 0.03) 0px,
//               transparent 1px,
//               transparent 3px,
//               rgba(90, 127, 168, 0.03) 4px
//             ),
//             repeating-linear-gradient(
//               90deg,
//               rgba(120, 86, 161, 0.03) 0px,
//               transparent 1px,
//               transparent 3px,
//               rgba(120, 86, 161, 0.03) 4px
//             );
//         }

//         .gate-inner-shadow {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to right,
//             rgba(0, 0, 0, 0.8) 0%,
//             transparent 100%
//           );
//         }

//         .gate-edge-glow {
//           position: absolute;
//           top: 0;
//           bottom: 0;
//           width: 2px;
//           background: linear-gradient(
//             to bottom,
//             transparent 0%,
//             #5a7fa8 20%,
//             #d97742 50%,
//             #7856a1 80%,
//             transparent 100%
//           );
//           box-shadow: 
//             0 0 20px 3px #5a7fa8,
//             0 0 40px 2px #d97742;
//           opacity: 0.7;
//           animation: edgeGlow 4s ease-in-out infinite;
//         }

//         @keyframes edgeGlow {
//           0%, 100% { opacity: 0.7; }
//           50% { opacity: 0.9; }
//         }

//         .gate-left {
//           border-right: 1px solid rgba(90, 127, 168, 0.25);
//         }

//         .gate-left .gate-edge-glow {
//           right: -1px;
//         }

//         .gate-left .gate-inner-shadow {
//           transform: scaleX(1);
//         }

//         .gate-right {
//           border-left: 1px solid rgba(90, 127, 168, 0.25);
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
//             font-size: clamp(2rem, 11vw, 4rem);
//             letter-spacing: -0.02em;
//           }

//           .subtitle {
//             font-size: 1.4rem;
//             letter-spacing: 0.5em;
//             margin-top: 0rem;
//           }

//           .logo-container {
//             // margin-bottom: 0.5rem;
//             // margin-bottom: 0;
//             margin: 2rem 0 0;
//           }

//           .countdown-container {
//             // margin: 0;
//           }

//           .footer-content {
//             flex-direction: column;
//             gap: 0.5rem;
//             font-size: 0.6rem;
//           }
//         }
//       `}</style>
//     </>
//   );
// }
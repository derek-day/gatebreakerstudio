// 'use client';

// import Head from 'next/head';
// import Link from 'next/link';
// import dynamic from 'next/dynamic';
// import { useEffect, useState } from 'react';
// import GateBreakBackground from './components/GateBreakBackground';

// const FaultyTerminal = dynamic(
//   () => import('./components/FaultyTerminal'),
//   { ssr: false }
// );

// export default function GatebreakerComingSoon() {
//   const [glitchStrength, setGlitchStrength] = useState(1);
//   const [revealed, setRevealed] = useState(false);

//   // Random glitch spikes
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setGlitchStrength(Math.random() < 0.15 ? 4 : 1);
//     }, 3500 + Math.random() * 4500);

//     return () => clearInterval(interval);
//   }, []);

//   // Gate reveal trigger
//   useEffect(() => {
//     const timer = setTimeout(() => setRevealed(true), 900);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Gatebreaker Studios — Coming Soon</title>
//       </Head>

//           <GateBreakBackground>
//       <h1 style={{ color: '#cceaff', fontSize: '3rem' }}>
//         GATEBREAKER
//       </h1>
//     </GateBreakBackground>


//       {/* BACKGROUND */}
//       <div className="background">
//         <div className="interactive">
//          <FaultyTerminal
//            scale={1.5}
//            digitSize={1.5}
//            scanlineIntensity={0.5}
//            glitchAmount={1}
//            flickerAmount={1}
//            noiseAmp={1}
//            chromaticAberration={1}
//            dither={1}
//            curvature={0.35}
//            tint="#A7EF9E"
//            mouseReact
//            mouseStrength={0.5}
//            brightness={0.6} className={undefined} style={undefined}        />
//         </div>

//         <div className="grain" />
//         <div className="darken" />
//       </div>

//       {/* GATE PANELS */}
//       <div className={`gate top ${revealed ? 'open' : ''}`} />
//       <div className={`gate bottom ${revealed ? 'open' : ''}`} />

//       {/* CONTENT */}
//       <main className="wrapper">
//         <section className={`content ${revealed ? 'visible' : ''}`}>
//           <h1 className="title">Gatebreaker Studios</h1>

//           <div className="divider" />

//           <p className="description">
//             A game creation studio focused on immersive systems,
//             narrative-driven design, and worlds shaped by player choice.
//           </p>

//           <span className="status">Coming Soon</span>

//           <p className="project">
//             First Project:{' '}
//             <Link
//               href="https://gatebreakerprotocol.com"
//               target="_blank"
//               className="link"
//             >
//               Gatebreaker Protocol
//             </Link>
//           </p>
//         </section>
//       </main>

//       <style jsx>{`
//         /* BACKGROUND */
//         .background {
//           position: fixed;
//           inset: 0;
//           z-index: -3;
//         }

//         .interactive {
//           width: 100vw;
//           height: 100vh;
//         }

//         .grain {
//           position: absolute;
//           inset: 0;
//           background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.07'/></svg>");
//           mix-blend-mode: overlay;
//           pointer-events: none;
//         }

//         .darken {
//           position: absolute;
//           inset: 0;
//           background: rgba(0, 0, 0, 0.55);
//         }

//         /* GATES */
//         .gate {
//           position: fixed;
//           left: 0;
//           width: 100%;
//           height: 50%;
//           background: linear-gradient(
//             to bottom,
//             rgba(10, 12, 18, 1),
//             rgba(6, 8, 12, 0.95)
//           );
//           z-index: 3;
//           transition: transform 1.6s cubic-bezier(0.77, 0, 0.175, 1);
//         }

//         .gate.top {
//           top: 0;
//           transform: translateY(0);
//         }

//         .gate.bottom {
//           bottom: 0;
//           transform: translateY(0);
//         }

//         .gate.top.open {
//           transform: translateY(-100%);
//         }

//         .gate.bottom.open {
//           transform: translateY(100%);
//         }

//         /* CONTENT */
//         .wrapper {
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 3rem 1.5rem;
//           text-align: center;
//           color: #e7ebf3;
//         }

//         .content {
//           max-width: 720px;
//           opacity: 0;
//           transform: translateY(24px);
//           transition: opacity 1.2s ease, transform 1.2s ease;
//           transition-delay: 1.2s;
//           z-index: 1;
//         }

//         .content.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .title {
//           font-size: clamp(2.6rem, 6vw, 4.2rem);
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           margin-bottom: 1rem;
//         }

//         .divider {
//           width: 96px;
//           height: 2px;
//           margin: 2rem auto;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             #7f5cff,
//             transparent
//           );
//         }

//         .description {
//           color: #9aa4b2;
//           line-height: 1.7;
//           margin-bottom: 2.5rem;
//         }

//         .status {
//           letter-spacing: 0.35em;
//           text-transform: uppercase;
//           color: #7f5cff;
//           display: block;
//           margin-bottom: 2rem;
//         }

//         .project {
//           color: #9aa4b2;
//         }

//         .link {
//           color: #e7ebf3;
//           text-decoration: none;
//           border-bottom: 1px solid rgba(127, 92, 255, 0.35);
//         }
//       `}</style>
//     </>
//   );
// }










'use client';

import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
// import FaultyTerminal from './components/FaultyTerminal';

const FaultyTerminal = dynamic(
  () => import('./components/FaultyTerminal'),
  { ssr: false }
);

export default function GatebreakerComingSoon() {
  return (
    <>
      <Head>
        <title>Gatebreaker Studios — Coming Soon</title>
        <meta
          name="description"
          content="Gatebreaker Studios — A game creation studio. New worlds are forming."
        />
      </Head>

      {/* BACKGROUND */}
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
          tint="#A7EF9E"
          mouseReact
          mouseStrength={0.5}
          brightness={0.6} className={undefined} style={undefined}        />
        <div className="overlay" />
      </div>

      {/* CONTENT */}
      <main className="wrapper">
        <section className="content">
          <h1 className="title">Gatebreaker Studios</h1>

          {/* <div className="divider" /> */}

          {/* <p className="description">
            A game creation studio focused on immersive systems,
            narrative-driven design, and worlds shaped by player choice.
          </p> */}

          <span className="status">Coming Soon</span>

          {/* <p className="project">
            First Project:{' '}
            <Link
              href="https://gatebreakerprotocol.com"
              target="_blank"
              className="link"
            >
              Gatebreaker Protocol
            </Link>
          </p> */}
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Gatebreaker Studios LLC
        </footer>
      </main>

      <style jsx>{`
        :root {
          --bg: #06080c;
          --fg: #e7ebf3;
          --muted: #9aa4b2;
          --accent: #7f5cff;
        }

        /* Background layer */
        .background {
          position: fixed;
          inset: 0;
          z-index: -2;
        }

        .background :global(canvas),
        .background :global(div) {
          width: 100% !important;
          height: 100% !important;
        }

        /* Dark overlay for readability */
        .overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              900px 500px at 50% -10%,
              rgba(20, 24, 36, 0.1),
              rgba(6, 8, 12, 0.25)
            );
          z-index: 1;
        }

        /* Content */
        .wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 1.5rem;
          color: var(--fg);
          font-family: system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, sans-serif;
          text-align: center;
        }

        .content {
          max-width: 720px;
          z-index: 2;
        }

        .title {
          font-size: clamp(2.6rem, 6vw, 4.2rem);
          // letter-spacing: 0.14em;
          // text-transform: uppercase;
          margin-bottom: 1rem;
          // animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .divider {
          width: 96px;
          height: 2px;
          margin: 2rem auto;
          background: linear-gradient(
            90deg,
            transparent,
            var(--accent),
            transparent
          );
        }

        .description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--muted);
          margin-bottom: 2.5rem;
        }

        .status {
          display: inline-block;
          font-size: 0.95rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 2.5rem;
        }

        .project {
          font-size: 0.95rem;
          color: var(--muted);
        }

        .link {
          color: var(--fg);
          text-decoration: none;
          border-bottom: 1px solid rgba(127, 92, 255, 0.35);
          padding-bottom: 2px;
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        .link:hover {
          color: var(--accent);
          border-color: var(--accent);
        }

        .footer {
          margin-top: 4rem;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6f7885;
          z-index: 2;
        }
      `}</style>
    </>
  );
}
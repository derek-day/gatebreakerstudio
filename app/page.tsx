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
          digitSize={1.2}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
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

          <div className="divider" />

          <p className="description">
            A game creation studio focused on immersive systems,
            narrative-driven design, and worlds shaped by player choice.
          </p>

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
              rgba(20, 24, 36, 0.35),
              rgba(6, 8, 12, 0.85)
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
          letter-spacing: 0.14em;
          text-transform: uppercase;
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

// 'use client';

// import Head from 'next/head';
// import Link from 'next/link';
// import FaultyTerminal from './components/FaultyTerminal';

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Gatebreaker Studios — Coming Soon</title>
//         <meta
//           name="description"
//           content="Gatebreaker Studios is a game creation studio. New worlds are forming."
//         />
//       </Head>


//       <main className="wrapper">
//         <div className="glow" />

//         <section className="content">
//           <h1 className="title">Gatebreaker Studios</h1>

//           <div className="divider" />

//           <p className="description">
//             Gatebreaker Studios is a game creation studio focused on immersive
//             systems, narrative-driven design, and worlds shaped by player choice.
//           </p>

//           <span className="status">Coming Soon</span>

//           {/* <p className="project">
//             First Project:{' '}
//             <Link
//               href="https://gatebreakerprotocol.com"
//               target="_blank"
//               className="link"
//             >
//               Gatebreaker Protocol
//             </Link>
//           </p> */}
//         </section>

//         <footer className="footer">
//           © {new Date().getFullYear()} Gatebreaker Studios LLC
//         </footer>
//       </main>

//       <style jsx>{`
//         :root {
//           --bg: #0b0e14;
//           --fg: #e7ebf3;
//           --muted: #9aa4b2;
//           --accent: #7f5cff;
//           --accent-soft: rgba(127, 92, 255, 0.15);
//         }

//         .wrapper {
//           min-height: 100vh;
//           background:
//             radial-gradient(900px 500px at 50% -10%, #161c2a, transparent 60%),
//             var(--bg);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           padding: 3rem 1.5rem;
//           color: var(--fg);
//           font-family: system-ui, -apple-system, BlinkMacSystemFont,
//             'Segoe UI', Roboto, sans-serif;
//           position: relative;
//           overflow: hidden;
//         }

//         .glow {
//           position: absolute;
//           width: 600px;
//           height: 600px;
//           background: radial-gradient(
//             circle,
//             var(--accent-soft),
//             transparent 70%
//           );
//           filter: blur(60px);
//           animation: pulse 8s ease-in-out infinite;
//         }

//         @keyframes pulse {
//           0%,
//           100% {
//             transform: scale(1);
//             opacity: 0.6;
//           }
//           50% {
//             transform: scale(1.15);
//             opacity: 0.85;
//           }
//         }

//         .content {
//           max-width: 720px;
//           text-align: center;
//           z-index: 1;
//         }

//         .title {
//           font-size: clamp(2.6rem, 6vw, 4.2rem);
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
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
//           border-bottom: 1px solid var(--accent-soft);
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
//           z-index: 1;
//         }
//       `}</style>
//     </>
//   );
// }

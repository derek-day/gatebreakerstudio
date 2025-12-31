'use client';

import { useEffect, useState } from 'react';
import styles from './GateBreakBackground.module.css';

export default function GateBreakBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Background */}
      <div className={styles.background} />

      {/* Gates */}
      <div
        className={`${styles.gate} ${styles.left} ${
          open ? styles.open : ''
        }`}
      />
      <div
        className={`${styles.gate} ${styles.right} ${
          open ? styles.open : ''
        }`}
      />

      {/* Light seam */}
      <div
        className={`${styles.seam} ${open ? styles.seamOpen : ''}`}
      />

      {/* Content */}
      <main
        className={`${styles.content} ${
          open ? styles.contentVisible : ''
        }`}
      >
        {children}
      </main>
    </div>
  );
}

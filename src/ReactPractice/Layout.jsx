import React from 'react';
import styles from '../styling/Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.Layout}>
      <div className={styles.timeLine}>
        <div className={styles.logo}>logo</div>
        <div className={styles.user_clock}>
          <div>icon</div>
          <div>icon</div>
          <div className={styles.clock}>clock</div>
        </div>
      </div>
      <div className={styles.dashboard}>
        <div className={styles.narrowOptions}>Narrow Options</div>
        <div className={styles.mainSPA}>Main SPA</div>
      </div>
    </div>
  );
};

export default Layout;
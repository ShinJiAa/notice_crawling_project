import React from 'react';
import styles from './header.module.css';

const Header = ({ sideBarState, setSideBarState, getTestdata }) => {
  const handleButtonClick = () => {
    setSideBarState(!sideBarState);
  };

  return (
    <header className={styles.header}>
      {/* <button onClick={getTestdata}>테스트</button> */}
      <button className={styles.toggle_button} onClick={handleButtonClick}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
    </header>
  );
};

export default Header;

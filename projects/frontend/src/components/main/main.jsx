import React from 'react';
import Content from '../contents/content';
import Page from '../page/page';
import styles from './main.module.css';

const Main = ({
  notices,
  showedNotices,
  selectNotice,
  currentPage,
  setCurrentPage,
  setShowedNotices,
}) => {
  return (
    <main className={styles.main}>
      <Content notices={showedNotices} selectNotice={selectNotice} />
      <Page
        notices={notices}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setShowedNotices={setShowedNotices}
      />
    </main>
  );
};

export default Main;

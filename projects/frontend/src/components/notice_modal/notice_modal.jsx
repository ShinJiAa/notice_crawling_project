import React from 'react';
import styles from './notice_modal.module.css';

const NoticeModal = ({ selectedNotice }) => {
  return (
    <div className={styles.modal}>
      <iframe
        src={selectedNotice.url}
        className={styles.iframe}
        height={selectedNotice.height}
        title="notice_detail"
      ></iframe>
    </div>
  );
};

export default NoticeModal;

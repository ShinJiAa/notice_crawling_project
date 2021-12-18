import React from 'react';
import styles from '../contents/content.module.css';

const Notice = ({ notice, selectNotice }) => {
  return (
    <tr
      className={styles.notice_item}
      onClick={() => {
        selectNotice(notice);
      }}
    >
      <th className={styles.notice_title}>{notice.title}</th>
      <th className={styles.notice_date}>{notice.dateCreated}</th>
      <th className={styles.notice_writer}>{notice.writer}</th>
    </tr>
  );
};

export default Notice;

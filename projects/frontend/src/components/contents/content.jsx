import React from 'react';
import Notice from '../notice/notice';
import styles from './content.module.css';

const Content = ({ notices, selectNotice }) => {
  console.log(notices);
  const getData = () => {
    return Object.keys(notices).map((index) => {
      return (
        <Notice
          notice={notices[index]}
          selectNotice={selectNotice}
          key={index}
        />
      );
    });
  };

  return (
    <table className={styles.notice_list}>
      <thead className={styles.notice_head}>
        <tr className={styles.notice_head_item}>
          <th className={styles.notice_head_title}>Title</th>
          <th className={styles.notice_head_date}>Date Created</th>
          <th className={styles.notice_head_writer}>Writer</th>
        </tr>
      </thead>
      <tbody className={styles.table_body}>{getData()}</tbody>
    </table>
  );
};

export default Content;

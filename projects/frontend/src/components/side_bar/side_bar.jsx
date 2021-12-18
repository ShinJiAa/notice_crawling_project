import React from 'react';
import styles from './side_bar.module.css';

const SideBar = ({ sideBarState, selectTab }) => {
  const handleClick = (e) => {
    selectTab(e.target.dataset.tab);
  };

  return (
    <section className={`${styles.side_bar} ${sideBarState && styles.visible}`}>
      <div className={styles.side_bar_item}>
        <span className={styles.notice_section__title}>교내공지</span>
        <ul className={styles.notice_section__tab} onClick={handleClick}>
          <li className={styles.notice_section__selector} data-tab="HIUN/corona">
            코로나 19
          </li>
          <li className={styles.notice_section__selector} data-tab="HIUN/generalno">
            일반공지
          </li>
          <li className={styles.notice_section__selector} data-tab="HIUN/studentsno">
            학생공지
          </li>
          <li className={styles.notice_section__selector} data-tab="HIUN/contest">
            행사/공모전
          </li>
        </ul>
      </div>
      <div className={styles.side_bar_item}>
        <span className={styles.notice_section__title}>학과공지</span>
        <ul className={styles.notice_section__tab} onClick={handleClick}>
          <li className={styles.notice_section__selector} data-tab="HICEN/department">
            학과
          </li>
          <li className={styles.notice_section__selector} data-tab="HICEN/employment">
            취업/인턴
          </li>
          <li className={styles.notice_section__selector} data-tab="HICEN/class">
            수업/프로젝트
          </li>
          <li className={styles.notice_section__selector} data-tab="HICEN/SCSC">
            SCSC
          </li>
          <li className={styles.notice_section__selector} data-tab="HICEN/scholarship">
            장학금
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SideBar;

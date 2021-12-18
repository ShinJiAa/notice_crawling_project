import React, { useEffect } from "react";
import styles from "./page.module.css";

const Page = ({ notices, currentPage, setCurrentPage, setShowedNotices }) => {
  const postPerPage = 15;
  let lastIndex = postPerPage * currentPage;
  let startIndex = lastIndex - postPerPage;

  const setPageNumber = (e) => {
    let maximum = Math.ceil(notices.length / postPerPage);

    if (e.target.dataset.type === "prev") {
      let current = currentPage - 1;

      setCurrentPage(current < 1 ? 1 : current);
    } else if (e.target.dataset.type === "next") {
      let current = currentPage + 1;

      setCurrentPage(current > maximum ? maximum : current);
    } else {
      let page = Number(e.target.innerText);

      setCurrentPage(page > maximum ? maximum : page);
    }
  };

  const getPageIndexes = () => {
    const current = currentPage;
    let maximum = Math.ceil(notices.length / postPerPage);
    let start = current - 2 > 1 ? current - 2 : 1;
    const result = [];

    if (current > maximum - 2) {
      start = maximum - 4 > 1 ? maximum - 4 : 1;
    }

    for (let i = 0; i < 5; i++) {
      result.push(start++);
    }

    return result;
  };

  useEffect(() => {
    setShowedNotices(notices.slice(startIndex, lastIndex));
  }, [setShowedNotices, startIndex, lastIndex, notices]);

  return (
    <div className={styles.pageContainer}>
      <ul className={styles.page_selector} onClick={(e) => setPageNumber(e)}>
        <li className={styles.page_selector_item} data-type='prev'>
          이전
        </li>
        {getPageIndexes().map((data) => {
          return (
            <li className={styles.page_selector_item} key={data}>
              {data}
            </li>
          );
        })}
        <li className={styles.page_selector_item} data-type='next'>
          다음
        </li>
      </ul>
    </div>
  );
};

export default Page;

import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import SideBar from './components/side_bar/side_bar';

import Main from './components/main/main';
import NoticeModal from './components/notice_modal/notice_modal';

function App({ restful }) {
  const [sideBarState, setSideBarState] = useState(false);
  const [notices, setNotices] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [showedNotices, setShowedNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const editData = (data) => {
    const result = [];

    Object.keys(data).map((id) => {
      result[id - 1] = {
        id: id,
        title: data[id][0],
        writer: data[id][1],
        dateCreated: data[id][2].split(' ')[0],
        url: data[id][3],
        height: data[id][5],
      };

      return id;
    });

    result.reverse();
    console.log(result);
    return result;
  };

  useEffect(() => {
    restful
      .getData()
      .then((data) => editData(data))
      .then((result) => setNotices(result));
  }, [restful]);

  const getTestdata = () => {
    restful.testRequest();
  };

  const selectNotice = (notice) => {
    setSelectedNotice(notice);
  };

  const reset = () => {
    setSelectedNotice(null);
  };

  const selectTab = (query) => {
    restful
      .getData(query)
      .then((data) => editData(data))
      .then((result) => setNotices(result));
  };

  return (
    <div className={styles.app}>
      <Header
        sideBarState={sideBarState}
        setSideBarState={setSideBarState}
        getTestdata={getTestdata}
      />
      <div className={styles.container}>
        <SideBar sideBarState={sideBarState} selectTab={selectTab} />
        <Main
          notices={notices}
          sideBarState={sideBarState}
          showedNotices={showedNotices}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          selectNotice={selectNotice}
          setShowedNotices={setShowedNotices}
        />
      </div>
      {selectedNotice && (
        <div className={styles.modal__layover} onClick={reset}></div>
      )}
      {selectedNotice && <NoticeModal selectedNotice={selectedNotice} />}
    </div>
  );
}

export default App;

import { Link } from "react-router-dom";
import "./css/sb-admin-2.min.css";
import { useState, useEffect,useContext } from "react";
import { notesData } from "./App";
import styles from "./card.module.css";
function Subject() {
  const [data, setData] = useState([]);
  const [filteredData,setFilteredData] = useState("");
  const {apiState} = useContext(notesData);
  console.log(apiState)  
  useEffect(() => {
    fetch(
      `https://script.google.com/macros/s/AKfycbwVy1I7EB_0qg_3rMjpeOv00520LZIhmJnxtMdqb6T0EKwjL7mDP3Wwv1O271_J827C/exec?subject=${apiState}`
    )
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
 
  const handleChange = (event) => {
    setFilteredData(event.target.value);
    console.log(filteredData);
  };

  const searchCards = (cards, filter) => {
    if (filter === "") {
      return cards;
    } else {
      return cards.filter((card) => {
        return card.title.toLowerCase().includes(filter.toLowerCase()) ||
          card.type.toLowerCase().includes(filter.toLowerCase());
      });
    }
  };

  
  return (
    <div id="wrapper">
      {/* Sidebar */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <Link to="/"  style={{textDecoration:"none"}}>
          <div className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon rotate-n-15">
              <img src="./img/netflix (1).png" alt="Logo" />
            </div>
            <div className="sidebar-brand-text mx-3 main-title">notesj</div>
          </div>
        </Link>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
        <Link to="/"  style={{textDecoration:"none"}}>
          <a className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>GLA 1st year Dashboard</span>
          </a>
          </Link>
        </li>
        <li className="nav-item active">
        <Link to="/lab" style={{textDecoration:"none"}}>
          <a className="nav-link" href="Lab.html">
            <i className="fas fa-fw fa-flask" />
            <span>Practicals &amp; Lab</span>
          </a>
          </Link>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="PYQ.HTML">
            <i className="fas fa-fw fa-file" />
            <span>Previous Year Papers</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="About.html">
            <i className="fas fa-fw fa-regular fa-address-card" />
            <span>About us</span>
          </a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        <hr className="sidebar-divider d-none d-md-block" />
        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
        {/* Sidebar Message */}
      </ul>
      {/* End of Sidebar */}
      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Topbar */}
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <button
              id="sidebarToggleTop"
              className="btn btn-link d-md-none rounded-circle mr-3"
            >
              <i className="fa fa-bars" />
            </button>
            {/* Topbar Search */}
            <form className="d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  id="search-input"
                  placeholder="Search"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm" />
                  </button>
                </div>
              </div>
            </form>  
          </nav>
          <div className="container-fluid">
  <div id={styles['card-container']}>
    {data.data && data.data.length > 0 ? (
      searchCards(data.data, filteredData).map((item) => (
        <div className={styles.card} key={item.id} >
          <h1 className={styles.subject}>{item.subject}</h1>
          <h2 className={styles.title}>{item.title}</h2>
          <h3 className={styles.type}>{item.type}</h3>
          <a href={item.link} className={styles['download-button']}>Download</a>
        </div>
      ))
    ) : (
      <div className="loading">Loading...</div>
    )}
  </div>
</div>
          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Subject;

import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { notesData } from "./App";
import "./css/sb-admin-2.css";

function Home () {
  const {setApiState } = useContext(notesData);
 
    return (
        <div>
  <title>notesj - Dashboard</title>
  
  <div id="wrapper">
    {/* Sidebar */}
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
      >
        <div className="sidebar-brand-icon">
          <img src="./img/netflix (1).png" />
        </div>
        <div className="sidebar-brand-text mx-3 main-title">notesj</div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
      <Link to="/" style={{textDecoration:"none"}}>
        <a className="nav-link" >
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>GLA 1st year Dashboard</span>
        </a>
        </Link>
      </li>
      <li className="nav-item active">
      <Link to="/lab" style={{textDecoration:"none"}}>
        <a className="nav-link">
          <i className="fas fa-fw fa-flask" />
          <span>Practicals &amp; Lab</span>
        </a>
        </Link>
      </li>
      <li className="nav-item active">
        <a className="nav-link" >
          <i className="fas fa-fw fa-file" />
          <span>Previous Year Papers</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" >
          <i className="fas fa-fw fa-regular fa-address-card" />
          <span>About us</span>
        </a>
      </li>
      {/* Nav Item - Utilities Collapse Menu */}
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
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
          <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input
                type="text"
                className="form-control bg-light border-0 small"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm" />
                </button>
              </div>
            </div>
          </form>
          {/* Topbar Navbar */}
        </nav>
        {/* End of Topbar */}
        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Page Heading */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800"> Btech Dashboard</h1>
          </div>
          {/* Content Row */}
          <div className="row">
            <div className="row">
              {/* Content Column */}
              <div className="col-lg-12 mb-4">
                {/* Project Card Example */}
                {/* Color System */}
                <div className="row">
                  <div className="col-lg-4 mb-4" onClick={() => setApiState('Maths')}>
                  <Link to="/subject" style={{textDecoration:"none"}}>
                    <div
                      className="card bg-primary text-white shadow"
                      value="Maths"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="card-body">
                        Maths
                        <div className="text-white-50 small" />
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="col-lg-4 mb-4"  onClick={() => setApiState('python')} >
                  <Link to="/subject" style={{textDecoration:"none"}}>
                    <div
                      className="card bg-success text-white shadow"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="card-body">
                        Python
                        <div className="text-white-50 small" />
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="col-lg-4 mb-4">
                  <Link to="/subject" style={{textDecoration:"none"}}>
                    <div
                      className="card bg-info text-white shadow"
                      style={{ cursor: "pointer" }}
                      onClick={() => setApiState('C programming')}
                    >
                      <div className="card-body">
                        C programming
                        <div className="text-white-50 small" />
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="col-lg-4 mb-4">
                  <Link to="/subject" style={{textDecoration:"none"}}>
                    <div
                      className="card bg-warning text-white shadow"
                      style={{ cursor: "pointer" }}
                      onClick={() => setApiState('Physics')}
                    >
                      <div className="card-body">
                        Physics
                        <div className="text-white-50 small" />
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="col-lg-4 mb-4">
                  <Link to="/subject" style={{textDecoration:"none"}}>
                    <div
                      className="card bg-danger text-white shadow"
                      style={{ cursor: "pointer" }}
                      onClick={() => setApiState('chemistry')}
                    >
                      <div className="card-body">
                        Chemistry
                        <div className="text-white-50 small" />
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="col-lg-4 mb-4">
                  <Link to="/subject" style={{textDecoration:"none"}}>
                    <div
                      className="card bg-secondary text-white shadow"
                      style={{ cursor: "pointer" }}
                      onClick={() => setApiState('English')}
                    >
                      <div className="card-body">
                        English
                        <div className="text-white-50 small" />
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="col-lg-4 mb-4">
                  <Link to="/subject" style={{textDecoration:"none"}}>
                    <div
                      className="card text-white shadow elec"
                      style={{ backgroundColor: "#D8AED3" }}
                    >
                      <div
                        className="card-body"
                        style={{ cursor: "pointer" }}
                        onClick={() => setApiState('Electrical')}
                      >
                        Electrical engineering
                        <div />
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="col-lg-4 mb-4">
                  <Link to="/subject" style={{textDecoration:"none"}}>
                    <div
                      className="card bg-dark text-white shadow"
                      style={{ cursor: "pointer" }}
                      onClick={() => setApiState('Electronics')}

                    >
                      <div className="card-body">
                        Electronics engineering
                        <div className="text-white-50 small" />
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="col-lg-4 mb-4">
                  <Link to="/subject" style={{textDecoration:"none"}}>
                    <div
                      className="card bg-success text-white shadow"
                      style={{ cursor: "pointer" }}
                      onClick={() => setApiState('Mechanical')}
                    >
                      <div className="card-body">
                        Basic Mechanical engineering
                        <div className="text-white-50 small" />
                      </div>
                    </div>
                    </Link>
                  </div>
                </div>       
              </div>
              {/* End of Page Wrapper */}
              <div className="responsive-container-block inner-container">
                <p className="love">
                  Made with{" "}
                  <i
                    className="fas fa-solid fa-heart"
                    style={{ color: "red" }}
                  />{" "}
                  in GLA University
                </p>
              </div>
              {/* Scroll to Top Button*/}
              <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up" />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
    


export default Home;
import React from "react";
import { sidebar_data } from "./ChartData";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebarList">
        {sidebar_data.map((val, key) => {
          return (
            <li className="rowItems" key={key}>
              <div id="sidebarIcon"></div>
              <div id="sidebarTitle">
                <span className="me-2">{val.icon}</span>
                <Link className="linkItem" to={val.link}>
                  {val.title}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-5">
        <img src="../assets/documentation.png" className="img-fluid" alt="" />
        <div className="fileMngrPara">
          <p>
            Buy{" "}
            <span style={{ color: "#323a90", fontWeight: 600 }}>
              File Manager
            </span>{" "}
            to have <br /> documents organized
          </p>
          <button className="btn-getFile">Get File Manager</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

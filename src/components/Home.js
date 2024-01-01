import React from "react";

import { expenses_data, annual_lead_data, weekly_OSI_data } from "./ChartData";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

const Home = () => {
  const formatYAxisTick = (value) => {
    if (value >= 1000) {
      return `${value / 1000}k`;
    }
    return value;
  };

  return (
    <div>
      <div className="container-fluid d-flex flex-row main">
        <div className="col-2 leftScreen container-fluid ">
          <div className="header d-flex justify-content-center align-items-start">
            <img src="../assets/logo.png" alt="logo" className="img-fluid" />
            <p className="logoName ms-2 mt-1">Ackerman</p>
          </div>
          <div className="options">
            <SideBar />
          </div>
        </div>
        <div className="midScreen container-fluid col-8">
          <div className="header2  d-flex justify-content-between align-items-start">
            <p className="title">Overview</p>
            <div className="search d-flex justify-content-between align-items-start d-lg-flex d-md-none d-sm-none me-4">
              <p className="date mt-1">Thursday, December 07, 2023</p>
              <img
                src="../assets/magnifying-glass.png"
                alt="icon"
                width={30}
                style={{ padding: "7px" }}
                className="searchIcon img-fluid"
              />
            </div>
          </div>

          <div className="container row justify-content-start">
            <div className="col-md-3 col-sm-6">
              <div
                className="cards py-3 px-3 col"
                style={{
                  backgroundColor: "#FA9393",
                  color: "#fff",
                  borderRadius: "25px",
                  textAlign: "left",
                  marginBottom: "20px",
                }}
              >
                <div className="d-flex justify-content-between mt-1">
                  <h5 className="cardTitle">38.7 k</h5>
                  <i
                    className="fa-solid fa-ellipsis-vertical"
                    style={{
                      color: "#ededee",
                      marginInlineEnd: "5px",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
                <p className="cardText">Revenue this Month</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div
                className="cards py-3 px-3 col"
                style={{
                  backgroundColor: "#565CA3",
                  color: "#fff",
                  borderRadius: "25px",
                  textAlign: "left",
                  marginBottom: "20px",
                }}
              >
                <div className="d-flex justify-content-between mt-1">
                  <h5 className="cardTitle">118.7 k</h5>
                  <i
                    className="fa-solid fa-ellipsis-vertical"
                    style={{
                      color: "#ededee",
                      marginInlineEnd: "5px",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
                <p className="cardText">Projects Income</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div
                className="cards py-3 px-3 col"
                style={{
                  backgroundColor: "#FFB64C",
                  color: "#fff",
                  borderRadius: "25px",
                  textAlign: "left",
                  marginBottom: "20px",
                }}
              >
                <div className="d-flex justify-content-between mt-1">
                  <h5 className="cardTitle">56.3 k</h5>
                  <i
                    className="fa-solid fa-ellipsis-vertical"
                    style={{
                      color: "#ededee",
                      marginInlineEnd: "5px",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
                <p className="cardText">Quoted this Month</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div
                className="cards py-3 px-3 col"
                style={{
                  backgroundColor: "#A9ADE4",
                  color: "#fff",
                  borderRadius: "25px",
                  textAlign: "left",
                  marginBottom: "20px",
                }}
              >
                <div className="d-flex justify-content-between mt-1">
                  <h5 className="cardTitle">2 &nbsp; 114</h5>
                  <i
                    className="fa-solid fa-ellipsis-vertical"
                    style={{
                      color: "#ededee",
                      marginInlineEnd: "5px",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
                <p className="cardText">Outstanding Invoices</p>
              </div>
            </div>
          </div>
          <div className="graph row container">
            <div className="container-fluid col-lg-8 col-12">
              <div className="card py-5 mt-2">
                <p className="graph_heading">Planned and Actual Expenses</p>
                <ResponsiveContainer width="95%" height={300}>
                  <BarChart
                    className="bargrph"
                    width={600}
                    height={250}
                    data={expenses_data}
                  >
                    <CartesianGrid vertical={false} strokeWidth={0.5} />
                    <XAxis dataKey="name" fontSize={10} />
                    <YAxis
                      tickFormatter={formatYAxisTick}
                      axisLine={false}
                      tickLine={false}
                      fontSize={10}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#FDC471",
                        borderRadius: 15,
                        color: "#fff",
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                      itemStyle={{ color: "#fff" }}
                      cursor={{ fill: "#FFF2DA", opacity: 0.7 }}
                    />
                    <Legend
                      formatter={(value) => (
                        <span
                          style={{
                            color: "#777",
                            fontSize: 12,
                            textAlign: "start",
                          }}
                        >
                          {value}
                        </span>
                      )}
                      payload={[
                        {
                          value: "Planned expenses",
                          type: "circle",
                          color: "#FA9393",
                        },
                        {
                          value: "Actual expenses",
                          type: "circle",
                          color: "#A9ADE4",
                        },
                      ]}
                    />
                    <Bar
                      dataKey="uv"
                      name="Actual expenses"
                      fill="#FA9393"
                      barSize={10}
                      radius={[5, 5, 0, 0]}
                    />

                    <Bar
                      dataKey="pv"
                      fill="#A9ADE4"
                      name="Planned expenses"
                      barSize={10}
                      radius={[5, 5, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="container-fluid mb-3 col-lg-4 col-12">
              <div className="card mt-2">
                <p className="text-start headMileStone">Monthly milestones</p>
                <div className="d-flex justify-content-around align-items-center">
                  <div
                    className="rounded-circle d-md-block d-lg-none"
                    style={{
                      border: "2px solid #A9ADE4",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  <div className="text-start mt-1">
                    <p className="taskHead">1200 Resolved Tasks</p>
                    <p className="taskText">Total number of tasks resolved</p>
                  </div>
                  <div
                    className="progress"
                    style={{
                      height: "10px",
                      width: "25%",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: "71%",
                        borderRadius: "10px",
                        backgroundColor: "#A9ADE4",
                      }}
                      aria-valuenow="71"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-around align-items-center"
                  style={{ marginTop: "8px" }}
                >
                  <div
                    className="rounded-circle d-md-block d-lg-none"
                    style={{
                      border: "2px solid #FA9393",
                      width: "20px",
                      height: "20px",
                    }}
                  ></div>
                  <div className="text-start">
                    <p className="taskHead">1500 New Tickets</p>
                    <p className="taskText">Tickets issued from all projects</p>
                  </div>
                  <div
                    className="progress"
                    style={{
                      height: "10px",
                      width: "25%",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: "46%",
                        borderRadius: "10px",
                        backgroundColor: "#FA9393",
                      }}
                      aria-valuenow="46"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-around align-items-center"
                  style={{ marginTop: "8px" }}
                >
                  <div
                    className="rounded-circle d-md-block d-lg-none"
                    style={{
                      backgroundColor: "#A9ADE4",
                      width: "20px",
                      height: "20px",
                    }}
                  ></div>
                  <div className="text-start">
                    <p className="taskHead">$25000 Incomes in CT</p>
                    <p className="taskText">Total operating incomes</p>
                  </div>
                  <div
                    className="progress"
                    style={{
                      height: "10px",
                      width: "25%",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        backgroundColor: "#A9ADE4",
                      }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-around align-items-center"
                  style={{ marginTop: "-10px" }}
                >
                  <div
                    className="rounded-circle d-md-block d-lg-none"
                    style={{
                      backgroundColor: "#FA9393",
                      width: "20px",
                      height: "20px",
                    }}
                  ></div>
                  <div className="text-start">
                    <p className="taskHead">1500 New Leads</p>
                    <p className="taskText">Total number of generated leads</p>
                  </div>
                  <div
                    className="progress"
                    style={{
                      height: "10px",
                      width: "25%",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        backgroundColor: "#FA9393",
                      }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div
                  className="d-flex flex-md-col justify-content-around align-items-center"
                  style={{ marginTop: "8px" }}
                >
                  <div
                    className="rounded-circle d-md-block d-lg-none"
                    style={{
                      backgroundColor: "#A9ADE4",
                      width: "20px",
                      height: "20px",
                    }}
                  ></div>
                  <div className="text-start">
                    <p className="taskHead">5 New Projects</p>
                    <p className="taskText">Total number of new projects</p>
                  </div>
                  <div
                    className="progress"
                    style={{
                      height: "10px",
                      width: "25%",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        backgroundColor: "#A9ADE4",
                      }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid row mb-5">
            <div className="container col-lg-9 col-12 mt-2">
              <div className="card py-5">
                <ResponsiveContainer width="95%" height={300}>
                  <p className="graph_heading">Annual Leads Dynamic</p>
                  <LineChart width={700} height={250} data={annual_lead_data}>
                    <CartesianGrid vertical={false} strokeWidth={0.3} />
                    <XAxis dataKey="name" fontSize={10} />
                    <YAxis axisLine={false} tickLine={false} fontSize={10} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#FDC471",
                        borderRadius: 15,
                        color: "#fff",
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                      itemStyle={{ color: "#fff" }}
                      cursor={{
                        strokeWidth: 30,
                        opacity: 0.3,
                        stroke: "#FFF2DA",
                      }}
                    />
                    <Legend
                      formatter={(value, entry, index) => (
                        <span
                          style={{
                            color: "#777",
                            fontSize: 12,
                            textAlign: "start",
                          }}
                        >
                          {value}
                        </span>
                      )}
                      payload={[
                        {
                          value: "Planned leads",
                          type: "circle",
                          color: "#FA9393",
                        },
                        {
                          value: "Existing leads",
                          type: "circle",
                          color: "#565CA3",
                        },
                        {
                          value: "New leads",
                          type: "circle",
                          color: "#FFB64C",
                        },
                      ]}
                    />
                    <Line
                      type="basis"
                      dataKey="pl"
                      stroke="#FA9393"
                      name="Planned leads"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="basis"
                      dataKey="el"
                      stroke="#565CA3"
                      name="Existing leads"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="basis"
                      dataKey="nl"
                      stroke="#FFB64C"
                      name="New leads"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="container col-lg-3 col-md-12 mt-2">
              <div className="card py-5">
                <ResponsiveContainer width="95%" height={300}>
                  <p className="graph_heading">Weekly OSI Dynamic</p>
                  <LineChart width={300} height={250} data={weekly_OSI_data}>
                    <CartesianGrid vertical={false} strokeWidth={0.3} />
                    <XAxis dataKey="name" fontSize={10} />
                    <YAxis hide tick={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#FDC471",
                        borderRadius: 15,
                        color: "#fff",
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                      itemStyle={{ color: "#fff" }}
                      cursor={{
                        strokeWidth: 30,
                        opacity: 0.3,
                        stroke: "#FFF2DA",
                      }}
                    />
                    <Legend
                      formatter={(value, entry, index) => (
                        <span
                          style={{
                            color: "#777",
                            fontSize: 12,
                            textAlign: "start",
                          }}
                        >
                          {value}
                        </span>
                      )}
                      payload={[
                        {
                          value: "IRP",
                          type: "circle",
                          color: "#FA9393",
                        },
                        {
                          value: "OPS",
                          type: "circle",
                          color: "#FFB64C",
                        },
                        {
                          value: "QVR",
                          type: "circle",
                          color: "#565CA3",
                        },
                      ]}
                    />
                    <Line
                      type="basis"
                      dataKey="irp"
                      stroke="#FA9393"
                      name="IRP"
                      dot={false}
                    />
                    <Line
                      type="basis"
                      dataKey="ops"
                      stroke="#FFB64C"
                      name="OPS"
                      dot={false}
                    />
                    <Line
                      type="basis"
                      dataKey="qvr"
                      stroke="#565CA3"
                      name="QVR"
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="rightScreen">
            <div className=" adminPanel d-flex justify-content-between align-items-start rounded-5 d-lg-flex d-md-block px-2">
              <div className="d-flex justify-content-between align-items-start w-25">
                <p
                  className="dropdown-toggle fw-bold me-3"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    color: "#0418AD",
                    cursor: "pointer",
                    marginTop: "-3px",
                  }}
                >
                  EN
                </p>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Japanese
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Germany
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Arabic
                    </Link>
                  </li>
                </ul>
                <img
                  src="../assets/alert.png"
                  className="img-fluid"
                  alt="alert icon"
                  width={20}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="d-flex justify-content-between align-items-start w-25">
                <img
                  src="../assets/setting.png"
                  alt="settings icon"
                  width={20}
                  className="me-3"
                  style={{ cursor: "pointer" }}
                />
                <img
                  src="../assets/logout.png"
                  className="img-fluid"
                  alt="logout icon"
                  width={20}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="container">
              <img src="../assets/woman.png" alt="user" className="img-fluid" />
              <p style={{ fontWeight: 600, fontSize: 15 }}>Jenny Wilson</p>
              <p style={{ fontWeight: 400, fontSize: 12 }}>
                Traffic & Brand Manager
              </p>
            </div>
            <div className="container mt-5">
              <p
                style={{
                  fontWeight: 600,
                  fontSize: 15,
                  textAlign: "start",
                }}
              >
                Admin Panel
              </p>
              <div
                className="card rounded-5 px-3 mb-3 d-flex flex-row justify-content-start align-items-center"
                style={{ cursor: "pointer" }}
              >
                <div
                  className="py-1 px-2 rounded-5 d-lg-block d-sm-none"
                  style={{ backgroundColor: "#FFEEEE" }}
                >
                  <img
                    src="../assets/calendar.png"
                    // className="img-fluid"
                    alt=""
                    width={25}
                  />
                </div>
                <div className="align-items-start px-3 py-2">
                  <p
                    style={{
                      marginTop: "2px",
                      fontSize: "12px",
                      fontWeight: "800",
                      textAlign: "start",
                    }}
                  >
                    Assigned Projects
                  </p>
                  <p
                    className="d-lg-block d-md-none d-sm-none"
                    style={{
                      marginTop: "-12px",
                      fontSize: "10px",
                      textAlign: "start",
                      color: "#888",
                    }}
                  >
                    Check all the projects assigned to you
                  </p>
                </div>
              </div>
              <div
                className="card rounded-5 px-3 mb-3 d-flex flex-row justify-content-start align-items-center"
                style={{ cursor: "pointer" }}
              >
                <div
                  className="py-2 px-2 rounded-5 d-lg-block d-sm-none"
                  style={{ backgroundColor: "#ECEDFE" }}
                >
                  <img
                    src="../assets/list.png"
                    alt=""
                    // className="img-fluid"
                    width={25}
                  />
                </div>
                <div className="align-items-start px-3 py-2 ">
                  <p
                    className=""
                    style={{
                      marginTop: "2px",
                      fontSize: "12px",
                      fontWeight: "800",
                      textAlign: "start",
                    }}
                  >
                    Assigned Tasks
                  </p>
                  <p
                    className="d-lg-block d-md-none d-sm-none"
                    style={{
                      marginTop: "-12px",
                      fontSize: "10px",
                      textAlign: "start",
                      color: "#888",
                    }}
                  >
                    Check all the tasks assigned to you
                  </p>
                </div>
              </div>
              <div
                className="card rounded-5 px-3 mb-3 d-flex flex-row justify-content-start align-items-center"
                style={{ cursor: "pointer" }}
              >
                <div
                  className="icon py-2 px-2 rounded-5 d-lg-block d-sm-none"
                  style={{ backgroundColor: "#FEF4E7" }}
                >
                  <img
                    src="../assets/people.png"
                    // className="img-fluid"
                    alt=""
                    width={25}
                  />
                </div>
                <div className="align-items-start px-3 py-2">
                  <p
                    className=""
                    style={{
                      marginTop: "2px",
                      fontSize: "12px",
                      fontWeight: "800",
                      textAlign: "start",
                    }}
                  >
                    Corporate Structure
                  </p>
                  <p
                    className="d-lg-block d-md-none d-sm-none"
                    style={{
                      marginTop: "-12px",
                      fontSize: "10px",
                      textAlign: "start",
                      color: "#888",
                    }}
                  >
                    Check your corporate structure here
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="../assets/documents.png"
            className="img-fluid mt-5"
            alt=""
            width={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

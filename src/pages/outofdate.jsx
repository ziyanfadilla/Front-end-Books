import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Image } from "react-bootstrap";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import img from '../assets/img'

import Image5 from "../assets/img/image 5.png";
import Image10 from "../assets/img/image 10.png";
import Image11 from "../assets/img/image 11.png";


export default class outofdate extends Component {
  render() {
    return (
      <div>
        {/* awal navbbar */}
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light" style={{ boxShadow: "12px 2px 4px" }}>
          <div className="container-fluid">
            <div
              className="input-group pl-2"
              style={{ width: 350, height: 50 }}>
              <input
                className="form-control py-2 border-right-0 border"
                style={{ borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}
                type="search"
                defaultValue="search"
                id="example-search-input"/>
              <span className="input-group-append">
                <div
                  className="input-group-text bg-transparent"
                  style={{
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    height : 38,}}>
                  <div className="fa fa-search" />
                </div>
              </span>
            </div>

            <div className="text-center">
              <Link to="/home">
                <Image
                  src="https://res.cloudinary.com/plugin007/image/upload/v1603734215/logoPLUGIN_qsovpm.png"
                  className="rounded"
                  alt="..."
                  width="55px"
                  height="55px"
                />
              </Link>
            </div>

            < Link to="/pofile">
              <Image
                src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png"
                alt
                className="avatar"
                style={{
                  verticalAlign: "middle",
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                }}
              />
            </ Link>
          </div>
        </Navbar>
        {/* akhir navbar */}
        <div className="container-fluid">
          <div className="row" style={{ height: "100vh" }}>
            <div
              className="col-3"
              style={{ boxShadow: "4px 3px 4px rgb(168, 166, 166)" }}
            >
              <div className="d-flex  flex-column justify-content-center align-items-center">
                <ul className="list-unstyled" style={{ marginTop: 30 }}>
                  <link
                    className="d-flex justify-content-center"
                    style={{
                      border: "1px soli",
                      width: 300,
                      borderRadius: 30,
                      marginBottom: 15,
                    }}
                  >
                    <link
                      className="d-flex justify-content-around align-items-center"
                      style={{ width: "50%" }}
                    >
                      <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png" />

                      <Link to="/profile">profile</Link>
                    </link>
                  </link>
                  <li
                    className="d-flex justify-content-center"
                    style={{ border: 1, width: 300, borderRadius: 30 }}
                  >
                    <link
                      className="d-flex justify-content-around align-items-center"
                      style={{ width: "50%" }}
                    >
                      <Image
                        src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Group53_akdcyu.png"
                        style={{ width: 40, height: 40 }}
                        alt
                      />
                      <Link to="/books">Books</Link>
                    </link>
                  </li>
                  <link
                    className="d-flex justify-content-center"
                    style={{
                      border: "1px #5FA0DE",
                      width: 300,
                      borderRadius: 30,
                      marginBottom: 15,
                      backgroundColor: "#5FA0DE",
                    }}
                  >
                    <div
                      className="d-flex justify-content-around align-items-center"
                      style={{ width: "50%" }}
                    >
                      <Image
                        src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627809/chunin/Group54_1_j2svvr.png"
                        style={{ width: 40, height: 40 }}
                        alt
                      />
                      <Link
                        to="/outofdate"
                        style={{ fontSize: "smaller", color: "white" }}
                      >
                        Out of Datw
                      </Link>
                    </div>
                  </link>
                  <li
                    className="d-flex justify-content-center"
                    style={{
                      border: "1px soli",
                      width: 300,
                      borderRadius: 30,
                      marginBottom: 15,
                    }}
                  >
                    <div
                      className="d-flex justify-content-around align-items-center"
                      style={{ width: "50%" }}
                    >
                      <Image
                        src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627809/chunin/Group54_1_j2svvr.png"
                        style={{ width: 40, height: 40 }}
                        alt
                      />
                      <Link to="/waitingborrow" style={{ fontSize: "smaller" }}>
                        Waiting Borrow
                      </Link>
                    </div>
                  </li>
                  <li
                    className="d-flex justify-content-center"
                    style={{
                      border: "1px soli",
                      width: 300,
                      borderRadius: 30,
                      marginBottom: 15,
                    }}
                  >
                    <div
                      className="d-flex justify-content-around align-items-center"
                      style={{ width: "50%" }}
                    >
                      <Image
                        src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627809/chunin/Group54_2_cxiqma.png"
                        style={{ width: 40, height: 40 }}
                        alt
                      />
                      <Link to="/waiting" style={{ fontSize: "smaller" }}>
                        Waiting
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-8 d-flex justify-content-center align-items-center"
              style={{ marginBottom: "50%" }}
            >
              <div className="d-flex justify-content-center  flex-column">
                <h2 style={{ color: "black", marginTop: "5%" }}>
                  <b>Your Books</b>
                </h2>
                <div className="row row cols-3">
                  <div className="col">
                    <div className="card" style={{}}>
                      <div className="row no-gutters">
                        <div className="col-md-3 ">
                          <Image src={Image11} />
                        </div>
                        <div className="col">
                          <div
                            className="card-block ml-1 "
                            style={{ fontSize: "smaller" }}>
                            <link className="ml-5">Jak Of</link><br />
                            <link className="ml-5">The bushveld</link><br />
                            <link className="ml-5">Marius Oelsching</link><br />
                            <link className="ml-5" style={{ fontSize: "smaller" }}>
                              start date 1 may 2020 End date 7 may 2020
                            </link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card" style={{ width: "100%" }}>
                      <div className="row no-gutters">
                        <div className="col-md-3 ">
                          <Image src={Image11} />
                        </div>
                        <div className="col">
                          <div
                            className="card-block ml-1 "
                            style={{ fontSize: "smaller" }}>
                            <link className="ml-5">Jak Of</link> <br />
                            <link className="ml-5">The bushveld</link><br />
                            <link className="ml-5">Marius Oelsching</link><br />
                            <link className="ml-5" style={{ fontSize: "smaller" }}>
                              start date 1 may 2020 End date 7 may 2020
                            </link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card" style={{ width: "100%" }}>
                      <div className="row no-gutters">
                        <div className="col-md-3 ">
                          <Image src={Image11} />
                        </div>
                        <div className="col">
                          <div
                            className="card-block ml-1 "
                            style={{ fontSize: "smaller" }}>
                            <link className="ml-5">Jak Of</link><br />
                            <link className="ml-5">The bushveld</link><br />
                            <link className="ml-5">Marius Oelsching</link><br />
                            <link className="ml-5" style={{ fontSize: "smaller" }}>
                              start date 1 may 2020 End date 7 may 2020
                            </link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row cols-3"
                  style={{ marginTop: "10%", marginBottom: "5%" }}>
                  <div className="col">
                    <div className="card">
                      <div className="row no-gutters">
                        <div className="col-md-3 ">
                          <Image src={Image5} />
                        </div>
                        <div className="col">
                          <div
                            className="card-block ml-1 "
                            style={{ fontSize: "smaller" }}>
                            <link className="ml-5">Jak Of</link><br />
                            <link className="ml-5">The bushveld</link><br />
                            <link className="ml-5">Marius Oelsching</link><br />
                            <link className="ml-5" style={{ fontSize: "smaller" }}>
                              start date 1 may 2020 End date 2 may 2020
                            </link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card" style={{ width: "100%" }}>
                      <div className="row no-gutters">
                        <div className="col-md-3 ">
                          <Image src={Image11} />
                        </div>
                        <div className="col">
                          <div
                            className="card-block ml-1 "
                            style={{ fontSize: "smaller" }}>
                            <link className="ml-5">Jak Of</link><br />
                            <link className="ml-5">The bushveld</link><br />
                            <link className="ml-5">Marius Oelsching</link><br />
                            <link className="ml-5" style={{ fontSize: "smaller" }}>
                              start date 1 may 2020 End date 7 may 2020
                            </link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card" style={{ width: "100%" }}>
                      <div className="row no-gutters">
                        <div className="col-md-3 ">
                          <Image src={Image10} />
                        </div>
                        <div className="col">
                          <div
                            className="card-block ml-1 "
                            style={{ fontSize: "smaller" }}>
                            <link className="ml-5">Jak Of</link><br />
                            <link className="ml-5">The bushveld</link><br />
                            <link className="ml-5">Marius Oelsching</link><br />
                            <link className="ml-5" style={{ fontSize: "smaller" }}>
                              start date 1 may 2020 End date 7 may 2020
                            </link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

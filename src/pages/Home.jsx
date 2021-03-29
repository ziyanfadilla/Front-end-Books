import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Image } from "react-bootstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import img from '../assets/img'
import Image3 from "../assets/img/image 3.png";
import Image5 from "../assets/img/image 5.png";
import Image10 from "../assets/img/image 10.png";
import Image11 from "../assets/img/image 11.png";

//Kategori
import TechIcon from "../assets/img/kteknologi.png";
import HistoryIcon from "../assets/img/khistory.png";
import PoliticsIcon from "../assets/img/kpolitic.png";
import RomanceIcon from "../assets/img/kromance.png";
import ScienceIcon from "../assets/img/ksciense.png";
import SportIcon from "../assets/img/ksport.png";

export default class Home extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Navbar
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{ boxShadow: "12px 2px 4px" }}
        >
          <div className="container-fluid">
            <div
              className="input-group pl-2"
              style={{ width: 350, height: 50 }}
            >
              <input
                className="form-control py-2 border-right-0 border"
                style={{ borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}
                type="search"
                defaultValue="search"
                id="example-search-input"
              />
              <span className="input-group-append">
                <div
                  className="input-group-text"
                  style={{
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    backgroundColor: "white",
                  }}
                >
                  <i className="fa fa-search" />
                </div>
              </span>
            </div>

            <div className="text-center">
              <Link to=''>
                <Image
                  src="https://res.cloudinary.com/plugin007/image/upload/v1603734215/logoPLUGIN_qsovpm.png"
                  className="rounded"
                  width="55px"
                  height="55px"
                />
              </Link>
            </div>

            <Link to="/profile">
              <Image
                src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png"
                className="avatar"
                style={{
                  verticalAlign: "middle",
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                }}
              />
            </Link>
          </div>
        </Navbar>

        <div>
          <div className="container">
            <h2 className="mt-4">
              <b>Popular</b>
            </h2>
          </div>

          <Slider {...settings}>
            <div>
              <div className="slide-item">
                <div
                  className="card m-2 bg-linear-red"
                  style={{ maxWidth: 540, background: "#7A284C" }}
                >
                  <div className="row no-gutters">
                    <div className="col-12 col-md-4 ">
                      <Image
                        src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627810/chunin/image3_izfo32.png"
                        style={{ width: 150, height: 200, marginLeft: "1vh" }}
                        
                      />
                    </div>
                    <div className="col-12 col-md-5">
                      <div className="card-body">
                        <h5 className="card-title">
                          At The Going Down of the Sun
                        </h5>
                        <p className="card-text">Marius Oelsching</p>
                        <p className="card-text">
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="slide-item">
                <div
                  className="card m-2 bg-linear-blue"
                  style={{ maxWidth: 540, background: "#6E79E5" }}
                >
                  <div className="row no-gutters">
                    <div className="col-12 col-md-4 ">
                      <Image
                        src={Image3}
                        style={{ width: 150, height: 200 }}
                      />
                    </div>
                    <div className="col-12 col-md-5">
                      <div className="card-body">
                        <h5 className="card-title">
                          At The Going Down of the Sun{" "}
                        </h5>
                        <p className="card-text">Marius Oelsching</p>
                        <p className="card-text">
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="slide-item">
                <div
                  className="card m-2 bg-linear-pink"
                  style={{ maxWidth: 540, background: "#F7E9E0" }}
                >
                  <div className="row no-gutters">
                    <div className="col-12 col-md-4 ">
                      <Image
                        src={Image10}
                        style={{ width: 150, height: 200 }}
                        
                      />
                    </div>
                    <div className="col-12 col-md-5">
                      <div className="card-body">
                        <h5 className="card-title">
                          {" "}
                          At The Going Down of the Sun
                        </h5>
                        <p className="card-text">Marius Oelsching</p>
                        <p className="card-text">
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="slide-item">
                <div
                  className="card m-2 bg-linear-red"
                  style={{ maxWidth: 540, background: "#7A284C" }}
                >
                  <div className="row no-gutters">
                    <div className="col-12 col-md-4 ">
                      <Image
                        src={Image10}
                        style={{ width: 150, height: 200 }}
                        
                      />
                    </div>
                    <div className="col-12 col-md-5">
                      <div className="card-body">
                        <h5 className="card-title">
                          {" "}
                          At The Going Down of the Sun
                        </h5>
                        <p className="card-text">Marius Oelsching</p>
                        <p className="card-text">
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <div className="container">
            <div className="row">
              <div className="col-5 col-md-10">
                <h5 style={{ marginTop: "5vh" }}>Browse</h5>
                <div className="row d-flex">
                  <div className="col-6 col-md-4">
                    <div className="card-books mb-3" style={{ maxWidth: 540 }}>
                      <div className="row no-gutters">
                        <div className="col-12 col-md-4">
                          <Link to="/deskripsi">
                            <Image
                              src={Image5}
                              className="cover"
                              style={{ width: 100, height: 170 }}
                              
                            />
                          </Link>
                        </div>
                        <div className="col-12 col-md-8">
                          <div className="card-body">
                            <Link to="/deskripsi"
                              style={{ color: "black" }}
                            >
                              <p className="card-title font-weight-bold">
                                Jak Of The bushveld
                              </p>
                              <p className="card-text">Marius Oelsching</p>
                            </Link>
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="card-books mb-3" style={{ maxWidth: 540 }}>
                      <div className="row no-gutters">
                        <div className="col-12 col-md-4">
                          <Link to="description1.html">
                            <Image
                              src={Image11}
                              className="cover"
                              style={{ width: 100, height: 170 }}
                              
                            />
                          </Link>
                        </div>
                        <div className="col-12 col-md-8">
                          <div className="card-body">
                            <p className="card-title font-weight-bold">
                              Jak Of The bushveld
                            </p>
                            <p className="card-text">Marius Oelsching</p>
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="card-books mb-3" style={{ maxWidth: 540 }}>
                      <div className="row no-gutters">
                        <div className="col-12 col-md-4">
                          <Link to="description1.html">
                            <Image
                              src={Image5}
                              className="cover"
                              style={{ width: 100, height: 170 }}
                              
                            />
                          </Link>
                        </div>
                        <div className="col-12 col-md-8">
                          <div className="card-body">
                            <p className="card-title font-weight-bold">
                              Jak Of The bushveld
                            </p>
                            <p className="card-text">Marius Oelsching</p>
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="card-books mb-3" style={{ maxWidth: 540 }}>
                      <div className="row no-gutters">
                        <div className="col-12 col-md-4">
                          <Link to="description1.html">
                            <Image
                              src={Image10}
                              className="cover"
                              style={{ width: 100, height: 170 }}
                              
                            />
                          </Link>
                        </div>
                        <div className="col-12 col-md-8">
                          <div className="card-body">
                            <p className="card-title font-weight-bold">
                              Jak Of The bushveld
                            </p>
                            <p className="card-text">Marius Oelsching</p>
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="card-books mb-3" style={{ maxWidth: 540 }}>
                      <div className="row no-gutters">
                        <div className="col-12 col-md-4">
                          <Link to="description.html">
                            <Image
                              src={Image5}
                              className="cover"
                              style={{ width: 100, height: 170 }}
                              
                            />
                          </Link>
                        </div>
                        <div className="col-12 col-md-8">
                          <div className="card-body">
                            <p className="card-title font-weight-bold">
                              Jak Of The bushveld
                            </p>
                            <p className="card-text">Marius Oelsching</p>
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="card-books mb-3" style={{ maxWidth: 540 }}>
                      <div className="row no-gutters">
                        <div className="col-12 col-md-4">
                          <Link to="description.html">
                            <Image
                              src={Image11}
                              className="cover"
                              style={{ width: 100, height: 170 }}
                              
                            />
                          </Link>
                        </div>
                        <div className="col-12 col-md-8">
                          <div className="card-body">
                            <p className="card-title font-weight-bold">
                              Jak Of The bushveld
                            </p>
                            <p className="card-text">Marius Oelsching</p>
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* kat */}
              <div className="col-7 col-md-2">
                <h5 className="category-text" style={{ marginTop: "5vh" }}>
                  Category
                </h5>
                <div className="row category">
                  <div className="col-md-12 mt-3">
                    <Link to="/categori"
                      className="text-dark"
                      style={{ textDecoration: "none", listStyle: "none" }}
                    >
                      <Image
                        src={TechIcon}
                        style={{ width: 30, height: 30 }}
                        alt
                      />
                      <p style={{ display: "inline-block" }}>Technology</p>
                    </Link>
                  </div>
                  <div className="col-md-12 mt-3">
                    <Link to="search.html"
                      className="text-dark"
                      style={{ textDecoration: "none", listStyle: "none" }}
                    >
                      <Image
                        src={HistoryIcon}
                        style={{ width: 30, height: 30 }}
                        alt
                      />
                      <p style={{ display: "inline-block" }}>History</p>
                    </Link>
                  </div>
                  <div className="col-md-12 mt-3">
                    <Image
                      src={PoliticsIcon}
                      style={{ width: 30, height: 30 }}
                      alt
                    />
                    <p style={{ display: "inline-block" }}>Politics</p>
                  </div>
                  <div className="col-md-12 mt-3">
                    <Image
                      src={RomanceIcon}
                      style={{ width: 30, height: 30 }}
                      alt
                    />
                    <p style={{ display: "inline-block" }}>Romance</p>
                  </div>
                  <div className="col-md-12 mt-3">
                    <Image
                      src={ScienceIcon}
                      style={{ width: 30, height: 30 }}
                      alt
                    />
                    <p style={{ display: "inline-block" }}>Science</p>
                  </div>
                  <div className="col-md-12 mt-3">
                    <Image
                      src={SportIcon}
                      style={{ width: 30, height: 30 }}
                      alt
                    />
                    <p style={{ display: "inline-block" }}>Sports</p>
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

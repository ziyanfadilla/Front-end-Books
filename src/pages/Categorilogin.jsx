import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Image } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import img from '../assets/img'
import Image10 from "../assets/img/image 10.png";
import Image11 from "../assets/img/image 11.png";



export default class Categorilogin extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar
            className="navbar navbar-expand-lg navbar-light bg-light"
            style={{ boxShadow: "12px 2px 4px" }}>
            <div className="container-fluid">
              <div className="input-group pl-2"
                style={{ width: 350, height: 50 }} >
                <input
                  className="form-control py-2 border-right-0 border"
                  style={{
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    
                  }}
                  type="search"
                  defaultValue="search"
                  id="example-search-input"
                />
                <div className="input-group-append">
                  <div
                    className="input-group-text bg-transparent"
                    style={{
                      borderTopRightRadius: 20,
                      borderBottomRightRadius: 20,
                      height : 38,
                    }}
                  >
                    <i className="fa fa-search" />
                  </div>
                </div>
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

              <Link to="/profile">
                <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png"alt className="avatar" style={{verticalAlign: 'middle', width: 50, height: 50, borderRadius: 50}} />
              </Link>
            </div>
          </Navbar>
        </div>

        <div className="container-fluid">
          <h2 style={{ marginLeft: 5, marginTop: 3 }}>
            <b>Technologi</b>
          </h2>

          <div>
            <div className="row row-cols-5">
              <div className="col">
                <div className="card">
                  <div className="row no-gutters">
                    <div className="col-md-3 ">
                      <Image src={Image10} />
                    </div>
                    <div className="col">
                      <div
                        className="card-block ml-1 "
                        style={{ fontSize: "smaller" }} >
                        <div className="ml-5">Jak Of</div><br />
                        <div className="ml-5">The bushveld</div><br />
                        <div className="ml-5">Marius Oelsching</div><br />
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"  style={{ marginLeft: 35, }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card"  >
                  <div className="row no-gutters">
                    <div className="col-md-3 ">
                      <Image src={Image10} />
                    </div>
                    <div className="col">
                      <div className="card-block ml-1 "
                        style={{ fontSize: "smaller" }} >
                        <div className="ml-5">Jak Of</div><br />
                        <div className="ml-5">The bushveld</div><br />
                        <div className="ml-5">Marius Oelsching</div><br />
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"  style={{ marginLeft: 35, }}/>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card"  >
                  <div className="row no-gutters">
                    <div className="col-md-3 ">
                      <Image src={Image11} />
                    </div>
                    <div className="col">
                      <div className="card-block ml-1 "
                        style={{ fontSize: "smaller" }} >
                        <div className="ml-5">Jak Of</div> <br />
                        <div className="ml-5">The bushveld</div> <br />
                        <div className="ml-5">Marius Oelsching</div> <br />
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"  style={{ marginLeft: 35, }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card"  >
                  <div className="row no-gutters">
                    <div className="col-md-3 ">
                      <Image src={Image11} />
                    </div>
                    <div className="col">
                      <div className="card-block ml-1 "
                        style={{ fontSize: "smaller" }}>
                        <div className="ml-5">Jak Of</div> <br />
                        <div className="ml-5">The bushveld</div> <br />
                        <div className="ml-5">Marius Oelsching</div> <br />
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"  style={{ marginLeft: 35, }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card"  >
                  <div className="row no-gutters">
                    <div className="col-md-3 ">
                      <Image src={Image10} />
                    </div>
                    <div className="col">
                      <div
                        className="card-block ml-1 "
                        style={{ fontSize: "smaller" }}>
                        <div className="ml-5">Jak Of</div><br />
                        <div className="ml-5">The bushveld</div><br />
                        <div className="ml-5">Marius Oelsching</div><br />
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png" style={{ marginLeft: 35, }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-5">
              <div className="col">
                <div className="card"  >
                  <div className="row no-gutters">
                    <div className="col-md-3 ">
                      <Image src={Image10} />
                    </div>
                    <div className="col">
                      <div
                        className="card-block ml-1 "
                        style={{ fontSize: "smaller" }}>
                        <div className="ml-5">Jak Of</div><br />
                        <div className="ml-5">The bushveld</div><br />
                        <div className="ml-5">Marius Oelsching</div><br />
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png" style={{ marginLeft: 35, }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card"  >
                  <div className="row no-gutters">
                    <div className="col-md-3 ">
                      <Image src={Image10} />
                    </div>
                    <div className="col">
                      <div className="card-block ml-1 "
                        style={{ fontSize: "smaller" }}>
                        <div className="ml-5">Jak Of</div><br />
                        <div className="ml-5">The bushveld</div><br />
                        <div className="ml-5">Marius Oelsching</div><br />
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png" style={{ marginLeft: 35, }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card"  >
                  <div className="row no-gutters">
                    <div className="col-md-3 ">
                      <Image src={Image10} />
                    </div>
                    <div className="col">
                      <div className="card-block ml-1 "
                        style={{ fontSize: "smaller" }}>
                        <div className="ml-5">Jak Of</div><br />
                        <div className="ml-5">The bushveld</div><br />
                        <div className="ml-5">Marius Oelsching</div><br />
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png" style={{ marginLeft: 35, }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card"  >
                  <div className="row no-gutters">
                    <div className="col-md-3 ">
                      <Image src={Image10} />
                    </div>
                    <div className="col">
                      <div className="card-block ml-1 "
                        style={{ fontSize: "smaller" }}>
                        <div className="ml-5">Jak Of</div> <br />
                        <div className="ml-5">The bushveld</div> <br />
                        <div className="ml-5">Marius Oelsching</div> <br />
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png" style={{ marginLeft: 35, }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card"  >
                  <div className="row no-gutters">
                    <div className="col-md-3 ">
                      <Image src={Image10} />
                    </div>
                    <div className="col">
                      <div className="card-block ml-1 "
                        style={{ fontSize: "smaller" }} >
                        <div className="ml-5">Jak Of</div> <br />
                        <div className="ml-5">The bushveld</div> <br />
                        <div className="ml-5">Marius Oelsching</div> <br />
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"  style={{ marginLeft: 35, }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-5">
              <div className="col">
                <div className="card"  >
                  <div className="row no-gutters">
                    <div className="col-md-3 ">
                      <Image src={Image10} />
                    </div>
                    <div className="col">
                      <div className="card-block ml-1 "
                        style={{ fontSize: "smaller" }} >
                        <div className="ml-5">Jak Of</div> <br />
                        <div className="ml-5">The bushveld</div> <br />
                        <div className="ml-5">Marius Oelsching</div> <br />
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"  style={{ marginLeft: 35, }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card"  >
                  <div className="row no-gutters">
                    <div className="col-md-3 ">
                      <Image src={Image10} />
                    </div>
                    <div className="col">
                      <div className="card-block ml-1 "
                        style={{ fontSize: "smaller" }}>
                        <div className="ml-5">Jak Of</div> <br />
                        <div className="ml-5">The bushveld</div> <br />
                        <div className="ml-5">Marius Oelsching</div> <br />
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"  style={{ marginLeft: 35, }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card"  >
                  <div className="row no-gutters">
                    <div className="col-md-3 ">
                      <Image src={Image10} />
                    </div>
                    <div className="col">
                      <div className="card-block ml-1 "
                        style={{ fontSize: "smaller" }} >
                        <div className="ml-5">Jak Of</div> <br />
                        <div className="ml-5">The bushveld</div> <br />
                        <div className="ml-5">Marius Oelsching</div> <br />
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"  style={{ marginLeft: 35, }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card"  >
                  <div className="row no-gutters">
                    <div className="col-md-3 ">
                      <Image src={Image10} />
                    </div>
                    <div className="col">
                      <div className="card-block ml-1 "
                        style={{ fontSize: "smaller" }} >
                        <div className="ml-5">Jak Of</div> <br />
                        <div className="ml-5">The bushveld</div> <br />
                        <div className="ml-5">Marius Oelsching</div> <br />
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png" style={{ marginLeft: 35, }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card"  >
                  <div className="row no-gutters">
                    <div className="col-md-3 ">
                      <Image src={Image10} />
                    </div>
                    <div className="col">
                      <div className="card-block ml-1 "
                        style={{ fontSize: "smaller" }} >
                        <div className="ml-5">Jak Of</div> <br />
                        <div className="ml-5">The bushveld</div> <br />
                        <div className="ml-5">Marius Oelsching</div> <br />
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"  style={{ marginLeft: 35, }}/>
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

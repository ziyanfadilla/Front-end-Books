import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Image } from "react-bootstrap";

// import img from '../assets/img'
import Image3 from "../assets/img/image 3.png"

export default class Diskusi extends Component {
  render() {
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
                  className="input-group-text bg-transparent"
                  style={{
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    height:38,
                  }}
                >
                  <i className="fa fa-search" />
                </div>
              </span>
            </div>

            <div className="text-center">
              <Link to="index.html">
                <Image
                  src="https://res.cloudinary.com/plugin007/image/upload/v1603734215/logoPLUGIN_qsovpm.png"
                  className="rounded"
                  alt="..."
                  width="55px"
                  height="55px"
                />
              </Link>
            </div>

            < Link to="profile.html">
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

        <div className="container">
          <div className="card mt-5">
            <div className="row no-gutters">
              <div className="col-md-4">
                <Image src ={Image3}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
              <div className="col">
                <div className="card-block px-2">
                  <h2 className="card-title ml-2">
                    At The Going Down of The Sun
                  </h2>
                  <p className="card-text ml-2">Marius Oelsching</p>
                  
                  <hr />
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td style={{ fontWeight: "bold" }}>Name</td>
                        <td>ziyan fadilla</td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: "bold" }}>Date End</td>
                        <td>21 March 2021</td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: "bold" }}>Note</td>
                        <td>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Excepturi optio dolorum nostrum, molestiae,
                          cupiditate animi hic a, ipsum quos cumque veniam. Unde
                          officia nobis saepe magni excepturi? Debitis,
                          provident nemo.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link
                            to="/confirmation"
                            type="submit"
                            style={{
                              height: 40,
                              width: 150,
                              borderRadius: 30,
                              color: "white",
                            }}
                            className="btn btn-primary"
                          >
                            Borrow
                          </Link>
                        </td>
                        <td>
                          <Link
                            to="/waiting"
                            type="submit"
                            style={{
                              height: 40,
                              width: 150,
                              borderRadius: 30,
                              border: "1px solid #5FA0DE",
                            }}
                            className="btn"
                          >
                            Chat
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <h5 style={{ marginTop: "5%" }}>
            <b>Deskripsi</b>
          </h5>
          <p className="text" style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aperiam adipisci numquam distinctioeos, molestiae beatae odio
            sapiente blanditiis consequuntur fugiat quas dolorum, earum ea.
            Porro libero vel perspiciatis iste?.Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Harum, aspernatur similique libero
            eaque placeat esse sapiente rem ratione. Rerum qui aperiam hic ex
            ea, pariatur aliquam quis. Consequatur, ut autem.
          </p>
        </div>
        <div
          className="row"
          style={{ marginLeft: "40vh", marginTop: "10vh", marginRight: "10vh" }}
        >
          <div className="column">
            <h4>Discussion</h4>
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
          </div>
          <div className="column" style={{ marginLeft: "10vh" }}>
            <div
              className="form-group"
              style={{ width: 800, marginTop: "5vh" }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Type Here"
                style={{
                  border: "1px solid color = #1f81DF",
                  height: 100,
                  paddingLeft: 50,
                }}
              />
            </div>
            <Link to ="/diskusi"
              className="btn w-50px"
              style={{
                backgroundColor: "#1f81DF",
                color: "white",
                borderRadius: 20,
                width: 150,
                height: 40,
                marginLeft: "100vh",
              }}
            >
              Send
            </Link>
          </div>
        </div>
        <div className="container" style={{ marginLeft: "38vh" }}>
          <h4>Total 777</h4>
          <div className="row">
            <div className="col-2 col-md-1">
              <Image
                src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png"
                style={{ width: 50, height: 50 }}
                alt
              />
            </div>
            <div className="col-10 col-md-11">
              <p className="font-weight-bold mt-2">Alif ba ta</p>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies purus vitae metus egestas etiam vestibulum id aenean.
                Diam, in mi ac eget elit. Pellentesque ut et placerat integer
                venenatis, urna.
              </p>
            </div>
            <div className="col-2 col-md-1">
              <Image
                src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png"
                style={{ width: 50, height: 50 }}
                alt
              />
            </div>
            <div className="col-10 col-md-11">
              <p className="font-weight-bold mt-2">Alif ba ta</p>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies purus vitae metus egestas etiam vestibulum id aenean.
                Diam, in mi ac eget elit. Pellentesque ut et placerat integer
                venenatis, urna.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Image} from "react-bootstrap";

export default class Profile extends Component {
  render() {
    return (
      <div>
        {/* awal nav */}
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
                    height : 38,
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

            <Link to="/profile">
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
            </Link>
          </div>
        </Navbar>
        {/* akhir navbar */}

        <div className="container-fluid">
              <div className="row" style={{height: '100vh'}}>

                <div className="col-3" style={{ boxShadow: "4px 5px 2px" }}>
                  <div className="d-flex justify-content-around align-items-center flex-column" style={{height: '5%', marginTop: '30vh', marginRight: 10}}>
                    
                    <div className="col-md-12 mt-3">
                      <Link to="/profile">
                        < Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Group52_gdn8mt.png" style={{width: 40, height: 40}} alt />
                        <p style={{display: 'inline-block', marginLeft: '3vh', fontSize: 20}}>Profil</p>
                      </Link>
                    </div>

                    <div className="col-md-12 mt-3">
                      <Link to="/books">
                        < Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Group53_akdcyu.png" style={{width: 40, height: 40}} alt />
                        <p style={{display: 'inline-block', marginLeft: '3vh', fontSize: 20}}>Books</p>
                      </Link>
                    </div>

                    <div className="col-md-12 mt-3">
                      <Link to="/outofdate">
                        < Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627809/chunin/Group54_1_j2svvr.png" style={{width: 40, height: 40}} alt />
                        <p style={{display: 'inline-block', marginLeft: '3vh', fontSize: 20}}>Out of Date</p>
                      </Link>
                    </div>

                    <div className="col-md-12 mt-3">
                      <Link to="/waitingborrow">
                        < Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627809/chunin/Group54_1_j2svvr.png" style={{width: 40, height: 40}} alt />
                        <p style={{display: 'inline-block', marginLeft: '3vh', fontSize: 20}}>Waiting Borrow</p>
                      </Link>
                    </div>

                    <div className="col-md-12 mt-3">
                      <Link to="/waiting">
                        < Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627809/chunin/Group54_2_cxiqma.png" style={{width: 40, height: 40}} alt />
                        <p style={{display: 'inline-block', marginLeft: '3vh', fontSize: 20}}>Waiting</p>
                      </Link>
                    </div>
                  </div>
                </div>
            
                <div className="col-8 d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center align-items-center flex-column" style={{height: '50%', width: '70%'}}>
                       
                        < Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png" alt className="avatar" style={{verticalAlign: 'middle', width: 100, height: 100, borderRadius: 50}} /> 
                        
                       
                        <div style={{marginTop: '10vh'}}>

                            <label style={{color: '#1f81DF'}}>Username</label>
                            <div className="form-group" style={{width: 500}}>
                                <input type="text" className="form-control" placeholder="coco" style={{border: '1px solid color = #1f81DF', borderRadius: 30, height: 50, paddingLeft: 55}}></input>
                            </div>

                            <label style={{color: '#1f81DF'}}>Email</label>
                            <div className="form-group" style={{width: 500}}>
                                <input type="text" className="form-control" placeholder="input Creator" style={{border: '1px solid color = #1f81DF', borderRadius: 30, height: 50, paddingLeft: 55}}></input>
                            </div>

                            <label>Publisher</label>
                            <div className="form-group" style={{width: 500}}>
                                <input type="text" className="form-control" placeholder="coco@gmail.com" style={{border: '1px solid color = #1f81DF', borderRadius: 30, height: 50, paddingLeft: 55}}></input>
                            </div>

                            <label style={{color: '#1f81DF'}}>Password</label>
                            <div className="form-group" style={{width: 500}}>
                                <input type="text" className="form-control" placeholder="******" style={{border: '1px solid color = #1f81DF', borderRadius: 30, height: 50, paddingLeft: 55}}></input>
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

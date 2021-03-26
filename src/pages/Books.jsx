import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Image } from 'react-bootstrap'


export default class Books extends Component {
    render() {
        return (
            <div>
                <Navbar className="navbar navbar-expand-lg navbar-light bg-light" style={{boxShadow: '12px 2px 4px'}}>
                <div className="container-fluid">
                    <div className="input-group pl-2" style={{width: 350, height: 50}}>
                    <input className="form-control py-2 border-right-0 border" style={{borderTopLeftRadius: 20, borderBottomLeftRadius: 20}} type="search" defaultValue="search" id="example-search-input" />
                    <span className="input-group-append">
                        <div className="input-group-text bg-transparent" style={{borderTopRightRadius: 20, borderBottomRightRadius: 20}}><i className="fa fa-search" /></div>
                    </span>
                    </div>

                    <div className="text-center">
                    <a Link to ="index.html">
                        <Image src="https://res.cloudinary.com/plugin007/image/upload/v1603734215/logoPLUGIN_qsovpm.png" className="rounded" alt="..." width="55px" height="55px" />
                    </a>
                    </div>

                    <a Link to="profile.html">
                    <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png"alt className="avatar" style={{verticalAlign: 'middle', width: 50, height: 50, borderRadius: 50}} />
                    </a>
                </div>
                </Navbar>

            <div className="container-fluid">
  <div className="row" style={{height: '100vh'}}>
    <div className="col-3" style={{boxShadow: '4px 2px 4px rgb(168, 166, 166)'}}>
      <div className="d-flex  flex-column justify-content-center align-items-center">
        <ul className="list-unstyled" style={{marginTop: 30}}>
          <li className="d-flex justify-content-center" style={{border: '1px soli', width: 300, borderRadius: 30, marginBottom: 15}}>
            <div className="d-flex justify-content-around align-items-center" style={{width: '50%'}}>
              <img src="img/profile1.png" alt />
              <Link to="profile.html">profile</Link>
            </div>
          </li>
          <li className="d-flex justify-content-center" style={{border: '1px solid #5FA0DE', width: 300, borderRadius: 30, backgroundColor: '#5FA0DE'}}>
            <div className="d-flex justify-content-around align-items-center" style={{width: '50%'}}>
              <img src="img/book.png" alt />
              <Link to="books.html" style={{color: 'white'}}>Books</Link>
            </div>
          </li>
          <li className="d-flex justify-content-center" style={{border: '1px soli', width: 300, borderRadius: 30, marginBottom: 15}}>
            <div className="d-flex justify-content-around align-items-center" style={{width: '50%'}}>
              <img src="img/out.png" alt />
              <Link to ="out-of-date.html" style={{fontSize: 'smaller'}}>Out of Datw</Link>
            </div>
          </li>
          <li className="d-flex justify-content-center" style={{border: '1px soli', width: 300, borderRadius: 30, marginBottom: 15}}>
            <div className="d-flex justify-content-around align-items-center" style={{width: '50%'}}>
              <img src="img/borow.png" alt />
              <Link to="waiting-borrow.html" style={{fontSize: 'smaller'}}>Waiting Borrow</Link>
            </div>
          </li>
          <li className="d-flex justify-content-center" style={{border: '1px soli', width: 300, borderRadius: 30, marginBottom: 15}}>
            <div className="d-flex justify-content-around align-items-center" style={{width: '50%'}}>
              <img src="img/waiting.png" alt />
              <Link to="waiting.html" style={{fontSize: 'smaller'}}>Waiting</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-8 d-flex justify-content-center align-items-center" style={{marginBottom: '50%'}}>
      <div className="d-flex justify-content-center  flex-column">
        <h2 style={{color: 'black', marginTop: '5%'}}><b>Your Books</b></h2>
        <div className="row row cols-3">
          <div className="col">
            <div className="card">
              <div className="row no-gutters">
                <div className="col-md-3 ">
                  <img src="img/image 5.png" />
                </div>
                <div className="col">
                  <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
                    <a className="ml-5">Jak Of</a><br />
                    <a className="ml-5">The bushveld</a><br />
                    <p className="ml-5">Marius Oelsching</p><br />
                    <a className="btn w-30px" style={{backgroundColor: '#5FA0DE', color: 'white', borderRadius: 20, width: 100, height: 30, marginLeft: 50}}>Edit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{width: '100%'}}>
              <div className="row no-gutters">
                <div className="col-md-3 ">
                  <img src="img/image 5.png" />
                </div>
                <div className="col">
                  <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
                    <a className="ml-5">Jak Of</a><br />
                    <a className="ml-5">The bushveld</a><br />
                    <p className="ml-5">Marius Oelsching</p><br />
                    <a  className="btn w-30px" style={{backgroundColor: '#5FA0DE', color: 'white', borderRadius: 20, width: 100, height: 30, marginLeft: 50}}>Edit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{width: '100%'}}>
              <div className="row no-gutters">
                <div className="col-md-3 ">
                  <img src="img/image 5.png" />
                </div>
                <div className="col">
                  <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
                    <a className="ml-5">Jak Of</a><br />
                    <a className="ml-5">The bushveld</a><br />
                    <p className="ml-5">Marius Oelsching</p><br />
                    <a Link to className="btn w-30px" style={{backgroundColor: '#5FA0DE', color: 'white', borderRadius: 20, width: 100, height: 30, marginLeft: 50}}>Edit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row cols-3" style={{marginTop: '10%', marginBottom: '5%'}}>
          <div className="col">
            <div className="card">
              <div className="row no-gutters">
                <div className="col-md-3 ">
                  <img src="img/image 5.png" />
                </div>
                <div className="col">
                  <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
                    <a className="ml-5">Jak Of</a><br />
                    <a className="ml-5">The bushveld</a><br />
                    <p className="ml-5">Marius Oelsching</p><br />
                    <a Link to className="btn w-30px" style={{backgroundColor: '#5FA0DE', color: 'white', borderRadius: 20, width: 100, height: 30, marginLeft: 50}}>Edit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{width: '100%'}}>
              <div className="row no-gutters">
                <div className="col-md-3 ">
                  <img src="img/image 5.png" />
                </div>
                <div className="col">
                  <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
                    <a className="ml-5">Jak Of</a><br />
                    <a className="ml-5">The bushveld</a><br />
                    <p className="ml-5">Marius Oelsching</p><br />
                    <a Link to className="btn w-30px" style={{backgroundColor: '#5FA0DE', color: 'white', borderRadius: 20, width: 100, height: 30, marginLeft: 50}}>Edit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{width: '100%'}}>
              <div className="row no-gutters">
                <div className="col-md-3 ">
                  <img src="img/image 5.png" />
                </div>
                <div className="col">
                  <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
                    <a className="ml-5">Jak Of</a><br />
                    <a className="ml-5">The bushveld</a><br />
                    <p className="ml-5">Marius Oelsching</p><br />
                    <Link to="javascript: void(0)" className="btn w-30px" style={{backgroundColor: '#5FA0DE', color: 'white', borderRadius: 20, width: 100, height: 30, marginLeft: 50}}>Edit</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="uploadbook.html" className="btn w-50px" style={{backgroundColor: '#5FA0DE', color: 'white', borderRadius: 20, width: 200, height: 40, marginLeft: '85vh'}}>Add Books</Link>
      </div>
    </div>
  </div>
</div>

            </div>
        )
    }
}

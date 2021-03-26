import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Image} from 'react-bootstrap'

export default class outofdate extends Component {
    render() {
        return (
            <div>
    {/* awal navbbar */}
                <Navbar className="navbar navbar-expand-lg navbar-light bg-light" style={{boxShadow: '12px 2px 4px'}}>
                <div className="container-fluid">
                    <div className="input-group pl-2" style={{width: 350, height: 50}}>
                    <input className="form-control py-2 border-right-0 border" style={{borderTopLeftRadius: 20, borderBottomLeftRadius: 20}} type="search" defaultValue="search" id="example-search-input" />
                    <span className="input-group-append">
                        <div className="input-group-text bg-transparent" style={{borderTopRightRadius: 20, borderBottomRightRadius: 20}}><i className="fa fa-search" /></div>
                    </span>
                    </div>

                    <div className="text-center">
                    <Link to ="index.html">
                        <Image src="https://res.cloudinary.com/plugin007/image/upload/v1603734215/logoPLUGIN_qsovpm.png" className="rounded" alt="..." width="55px" height="55px" />
                    </Link>
                    </div>

                    <a Link to="profile.html">
                    <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png"alt className="avatar" style={{verticalAlign: 'middle', width: 50, height: 50, borderRadius: 50}} />
                    </a>
                </div>
                </Navbar>
    {/* akhir navbar */}
    <div className="container-fluid">
  <div className="row" style={{height: '100vh'}}>

  <div className="col-3" style={{boxShadow: '4px 3px 4px rgb(168, 166, 166)'}}>
  <div className="d-flex  flex-column justify-content-center align-items-center">
    <ul className="list-unstyled" style={{marginTop: 30}}>
      <li className="d-flex justify-content-center" style={{border: '1px soli', width: 300, borderRadius: 30, marginBottom: 15}}>
        <div className="d-flex justify-content-around align-items-center" style={{width: '50%'}}>
          <img src="img/profile1.png" alt />
          <a href="profile.html">profile</a>
        </div>
      </li>
      <li className="d-flex justify-content-center" style={{border: 1, width: 300, borderRadius: 30}}>
        <div className="d-flex justify-content-around align-items-center" style={{width: '50%'}}>
          <img src="img/book.png" alt />
          <a href="books.html">Books</a>
        </div>
      </li>
      <li className="d-flex justify-content-center" style={{border: '1px #5FA0DE', width: 300, borderRadius: 30, marginBottom: 15, backgroundColor: '#5FA0DE'}}>
        <div className="d-flex justify-content-around align-items-center" style={{width: '50%'}}>
          <img src="img/out.png" alt />
          <a href="out-of-date.html" style={{fontSize: 'smaller', color: 'white'}}>Out of Datw</a>
        </div>
      </li>
      <li className="d-flex justify-content-center" style={{border: '1px soli', width: 300, borderRadius: 30, marginBottom: 15}}>
        <div className="d-flex justify-content-around align-items-center" style={{width: '50%'}}>
          <img src="img/borow.png" alt />
          <a href="waiting-borrow.html" style={{fontSize: 'smaller'}}>Waiting Borrow</a>
        </div>
      </li>
      <li className="d-flex justify-content-center" style={{border: '1px soli', width: 300, borderRadius: 30, marginBottom: 15}}>
        <div className="d-flex justify-content-around align-items-center" style={{width: '50%'}}>
          <img src="img/waiting.png" alt />
          <a href="waiting.html" style={{fontSize: 'smaller'}}>Waiting</a>
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
        <div className="card" style={{}}>
          <div className="row no-gutters">
            <div className="col-md-3 ">
              <img src="img/image 10.png" />
            </div>
            <div className="col">
              <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
                <a className="ml-5">Jak Of</a><br />
                <a className="ml-5">The bushveld</a><br />
                <p className="ml-5">Marius Oelsching</p><br />
                <p className="ml-5" style={{fontSize: 'smaller'}}>
                  start date 1 may 2020
                  End date 7 may 2020
                </p>
                {/* <a href="javascript: void(0)" class="btn w-30px" style="background-color: #1f81DF; color: white; border-radius: 20px; width: 100px; height: 30px; margin-left: 50px;">Edit</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{width: '100%'}}>
          <div className="row no-gutters">
            <div className="col-md-3 ">
              <img src="img/image 11.png" />
            </div>
            <div className="col">
              <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
                <a className="ml-5">Jak Of</a><br />
                <a className="ml-5">The bushveld</a><br />
                <p className="ml-5">Marius Oelsching</p><br />
                <p className="ml-5" style={{fontSize: 'smaller'}}>
                  start date 1 may 2020
                  End date 7 may 2020
                </p>
                {/* <a href="javascript: void(0)" class="btn w-30px" style="background-color: #1f81DF; color: white; border-radius: 20px; width: 100px; height: 30px; margin-left: 50px;">Edit</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{width: '100%'}}>
          <div className="row no-gutters">
            <div className="col-md-3 ">
              <img src="img/image 10.png" />
            </div>
            <div className="col">
              <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
                <a className="ml-5">Jak Of</a><br />
                <a className="ml-5">The bushveld</a><br />
                <p className="ml-5">Marius Oelsching</p><br />
                <p className="ml-5" style={{fontSize: 'smaller'}}>
                  start date 1 may 2020
                  End date 7 may 2020
                </p>
                {/* <a href="javascript: void(0)" class="btn w-30px" style="background-color: #1f81DF; color: white; border-radius: 20px; width: 100px; height: 30px; margin-left: 50px;">Edit</a> */}
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
                <p className="ml-5" style={{fontSize: 'smaller'}}>
                  start date 1 may 2020
                  End date 2 may 2020
                </p>
                {/* <a href="javascript: void(0)" class="btn w-30px" style="background-color: #1f81DF; color: white; border-radius: 20px; width: 100px; height: 30px; margin-left: 50px;">Edit</a> */}
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
                <p className="ml-5" style={{fontSize: 'smaller'}}>
                  start date 1 may 2020
                  End date 7 may 2020
                </p>
                {/* <a href="javascript: void(0)" class="btn w-30px" style="background-color: #1f81DF; color: white; border-radius: 20px; width: 100px; height: 30px; margin-left: 50px;">Edit</a> */}
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
                <p className="ml-5" style={{fontSize: 'smaller'}}>
                  start date 1 may 2020
                  End date 7 may 2020
                </p>
                {/* <a href="javascript: void(0)" class="btn w-30px" style="background-color: #1f81DF; color: white; border-radius: 20px; width: 100px; height: 30px; margin-left: 50px;">Edit</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <a href="javascript: void(0)" class="btn w-50px" style="background-color: #1f81DF; color: white; border-radius: 20px; width: 200px; height: 40px; margin-left: 85vh;">Add Books</a> */}
  </div>
</div>

  </div></div>


                  

            </div>
        )
    }
}

import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Image, FormControl } from 'react-bootstrap'

export default class Profile extends Component {
    render() {
        return (
            <div>
         {/* awal nav */}
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
        
        <div className="col-3" style={{boxShadow: '3px 0px 3px rgb(168, 166, 166)'}}>
  <div className="d-flex  flex-column justify-content-center align-items-center">
    <ul className="list-unstyled" style={{marginTop: 30}}>
      <li className="d-flex justify-content-center" style={{border: 1, width: 300, borderRadius: 30, marginBottom: 15, backgroundColor: '#5FA0DE'}}>
        <div className="d-flex justify-content-around align-items-center" style={{width: '50%'}}>
          <Image src="Image/profile1.png" alt />
          <Link to="profile.html" style={{color: 'white'}}>profile</Link>
        </div>
      </li>
      <li className="d-flex justify-content-center" style={{border: 1, width: 300, borderRadius: 30}}>
        <div className="d-flex justify-content-around align-items-center" style={{width: '50%'}}>
          <Image src="Image/book.png" alt />
          <Link to="books.html">Books</Link>
        </div>
      </li>
      <li className="d-flex justify-content-center" style={{border: 1, width: 300, borderRadius: 30, marginBottom: 15}}>
        <div className="d-flex justify-content-around align-items-center" style={{width: '50%'}}>
          <Image src="Image/out.png" alt />
          <Link to="out-of-date.html" style={{fontSize: 'smaller'}}>Out of Datw</Link>
        </div>
      </li>
      <li className="d-flex justify-content-center" style={{border: 1, width: 300, borderRadius: 30, marginBottom: 15}}>
        <div className="d-flex justify-content-around align-items-center" style={{width: '50%'}}>
          <Image src="Image/borow.png" alt />
          <Link to="waiting-borrow.html">Waiting Borrow</Link>
        </div>
      </li>
      <li className="d-flex justify-content-center" style={{border: 1, width: 300, borderRadius: 30, marginBottom: 15}}>
        <div className="d-flex justify-content-around align-items-center" style={{width: '50%'}}>
          <Image src="Image/waiting.png" alt />
          <Link to="waiting.html">Waiting</Link>
        </div>
      </li>
    </ul>
  </div>
</div>

<div className="col-8 d-flex justify-content-center align-items-center">
  <div className="d-flex justify-content-center align-items-center flex-column" style={{height: '50%', width: '70%'}}>
    <Image src="Image/profile.png" alt className="avatar" style={{verticalAlign: 'middle', width: 100, height: 100, borderRadius: 50, marginBottom: 20}} />
    <FormControl>
      <label style={{color: '#1f81DF'}}>Username</label>
      <div className="form-group" style={{width: 500}}>
        <input type="text" className="form-control" placeholder="ziyan" style={{border: '1px solid',color : '#1f81DF', borderRadius: 30, height: 50, paddingLeft: 30}} />
      </div>
      <label style={{color: '#1f81DF'}}>Email</label>
      <div className="form-group" style={{width: 500}}>
        <input type="text" className="form-control" placeholder="ziyan@gmail.com" style={{border: '1px solid ',color : '#1f81DF', borderRadius: 30, height: 50, paddingLeft: 30}} />
      </div>
      <label style={{color: '#1f81DF'}}>Password</label>
      <div className="form-group" style={{width: 500}}>
        <input type="text" className="form-control" placeholder="**********" style={{border: '1px solid ',  color : '#1f81DF', borderRadius: 30, height: 50, paddingLeft: 30}} />
      </div>
    </FormControl>
  </div>
</div>

        
        </div>
        </div>

            </div>
        )
    }
}

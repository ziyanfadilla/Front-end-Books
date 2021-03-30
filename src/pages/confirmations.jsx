import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Image} from 'react-bootstrap'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image12 from "../assets/img/image 12.png";



export default class confirmations extends Component {
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
                    <Link to ="/">
                        <Image src="https://res.cloudinary.com/plugin007/image/upload/v1603734215/logoPLUGIN_qsovpm.png" className="rounded" alt="..." width="55px" height="55px" />
                    </Link>
                    </div>

                    <Link to="/profile">
                    <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png"alt className="avatar" style={{verticalAlign: 'middle', width: 50, height: 50, borderRadius: 50}} />
                    </Link>
                </div>
                </Navbar>
                
                <div className="container">
  <div className="card mt-5">
    <div className="row no-gutters">
      <div className="col-md-4">
        <Image src={Image12} style={{width: '100%', height: 'auto', objectFit: 'cover'}} />
      </div>
      <div className="col">
        <div className="card-block px-2">
          <h2 className="card-title ml-2">At The Going Down of The Sun</h2>
          <p className="card-text ml-2">Marius Oelsching</p>
          <hr />
          <b>Borrowing Details</b><table className="table table-borderless">
            <tbody><tr>
                <td style={{fontWeight: 'bold'}}>Name</td>
                <td>ziyan fadilla</td>
              </tr>
              <tr>
                <td style={{fontWeight: 'bold'}}>Date End</td>
                <td>21 March 2021</td>
              </tr>
              <tr>
                <td style={{fontWeight: 'bold'}}>Note</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi optio dolorum nostrum, molestiae, cupiditate animi hic a, ipsum quos cumque veniam. Unde officia nobis saepe magni excepturi? Debitis, provident nemo.</td>
              </tr>
              <tr>
                <td>
                  <Link to="" type="submit" style={{height: 40, width: 150, borderRadius: 30, color: 'white'}} className="btn btn-success">Accept</Link>
                </td>
                <td>
                  <Link to ="" type="submit" style={{height: 40, width: 150, borderRadius: 30, color: 'white'}} className="btn btn-danger">Reject</Link>
                </td>
              </tr>
            </tbody></table>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
        )
    }
}

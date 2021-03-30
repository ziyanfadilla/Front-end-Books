import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar , Image, Button} from 'react-bootstrap'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default class Borrow extends Component {
    render() {
        return (
            <div>
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
                    <Link to ="/home">
                        <Image src="https://res.cloudinary.com/plugin007/image/upload/v1603734215/logoPLUGIN_qsovpm.png" className="rounded" alt="..." width="55px" height="55px" />
                    </Link>
                    </div>

                    <Link to="/profile">
                    <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png"alt className="avatar" style={{verticalAlign: 'middle', width: 50, height: 50, borderRadius: 50}} />
                    </Link>
                </div>
                </Navbar>


                <div>
              <div className="row" style={{marginLeft: '40vh', marginTop: '10vh', marginRight: '10vh'}}>
                <div className="column">
                  <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627812/chunin/image12_l7znce.png" />
                </div>
                <div className="column" style={{marginLeft: '10vh'}}>
                  <h1> At the Going Down of the Sun</h1>
                  
                  <div style={{fontSize: '5vh', color: 'gray'}}>Maruis Oelsching</div><br />
                  <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                  <table className="table" style={{marginTop: '5vh'}}>
                    <tbody>
                      <tr>
                        <th scope="row">Publisher</th>
                        <td>Gramedia Putaka Utama</td>
                      </tr>
                      <tr>
                        <th scope="row">ISBN</th>
                        <td>9786020385914</td>
                      </tr>
                      <tr>
                        <th scope="row">Pages</th>
                        <td>376 hlm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row" style={{marginLeft: '40vh', marginTop: '10vh', marginRight: '10vh'}}>
                <div className="column">
                  <input type="datetime-local" className="dateTime" name="starttime" id="startTime" step={2} style={{width: 250}} />
                </div>
                <div className="column" style={{marginLeft: '10vh'}}>
                  <h4>Discussion</h4>
                  <div className="form-group" style={{width: 600}}>
                    <input type="text" className="form-control" placeholder="Type Here" style={{border: '1px solid color = #1f81DF', height: 100, paddingLeft: 55}} />
                  </div>
                  <div>
                    <Link to="/waitingborrow"> 
                      <Button className="btn w-50px" style={{backgroundColor: '#1f81DF', color: 'white', borderRadius: 20, width: 150, height: 40, marginLeft: '55vh'}}>Send</Button>               
                    </Link> 
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>

        )
    }
}

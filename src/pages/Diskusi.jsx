import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Image} from 'react-bootstrap'

export default class Diskusi extends Component {
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
                    <Link to ="index.html">
                        <Image src="https://res.cloudinary.com/plugin007/image/upload/v1603734215/logoPLUGIN_qsovpm.png" className="rounded" alt="..." width="55px" height="55px" />
                    </Link>
                    </div>

                    <a Link to="profile.html">
                    <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png"alt className="avatar" style={{verticalAlign: 'middle', width: 50, height: 50, borderRadius: 50}} />
                    </a>
                </div>
                </Navbar>

                <div className="row" style={{marginLeft: '40vh', marginTop: '10vh', marginRight: '10vh'}}>
    <div className="column">
      <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627812/chunin/image12_l7znce.png" />
    </div>
    <div className="column" style={{marginLeft: '10vh'}}>
      <h1> At the Going Down of the Sun</h1>
      <a style={{fontSize: '5vh', color: 'gray'}}>Maruis Oelsching</a><br />
      <a>
        <span className="fa fa-star checked" style={{color: '#FFB800'}} />
        <span className="fa fa-star checked" style={{color: '#FFB800'}} />
        <span className="fa fa-star checked" style={{color: '#FFB800'}} />
        <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
        <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
      </a>
      <table className="table table-borderless">
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
        <a type="submit" style={{height: 40, width: 150, borderRadius: 30, color: 'white'}} className="btn btn-primary">Borrow</a>
      </td>
      <td>
        <a href type="submit" style={{height: 40, width: 150, borderRadius: 30, color : '#5FA0DE', backgroundColor: 'white'}} className="btn btn-primary">Chat</a>
      </td>
    </tr>
  </tbody></table>
    </div>
  </div>
  <div className="row" style={{marginLeft: '38vh', marginTop: '10vh', marginRight: '10vh'}}>
    <div className="col" style={{marginTop: '10vh'}}>
      <h3 className="h3"><b>Description</b></h3>
      <p className="text-muted" style={{textAlign: 'justify', marginLeft: '10vh'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ultricies purus vitae metus egestas etiam vestibulum id aenean. Diam, in mi 
        ac eget elit. Pellentesque ut et placerat integer venenatis, urna. Elementum 
        in erat sit elit. Velit eget neque consectetur nunc aliquam at. Adipiscing 
        lectus egestas semper vitae, sed tellus. At cursus quam bibendum faucibus 
        sit blandit. Habitasse pulvinar ullamcorper elementum vitae vestibulum aenean 
        semper diam. Gravida diam sit quisque nulla.</p>
    </div>
  </div>
  <div className="row" style={{marginLeft: '40vh', marginTop: '10vh', marginRight: '10vh'}}>
    <div className="column">
      <h4>Discussion</h4>
      <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png" alt className="avatar" style={{verticalAlign: 'middle', width: 50, height: 50, borderRadius: 50}} />
    </div>
    <div className="column" style={{marginLeft: '10vh'}}>
      <div className="form-group" style={{width: 800, marginTop: '5vh'}}>
        <input type="text" className="form-control" placeholder="Type Here" style={{border: '1px solid color = #1f81DF', height: 100, paddingLeft: 50}} />
      </div>
      <a href="javascript: void(0)" className="btn w-50px" style={{backgroundColor: '#1f81DF', color: 'white', borderRadius: 20, width: 150, height: 40, marginLeft: '100vh'}}>Send</a>
    </div>
  </div>
  <div className="container" style={{marginLeft: '38vh'}}>
    <h4>Total 777</h4>
    <div className="row">
      <div className="col-2 col-md-1">
        <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png" style={{width: 50, height: 50}} alt />
      </div>
      <div className="col-10 col-md-11">
        <p className="font-weight-bold mt-2">Alif ba ta</p>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
          purus vitae metus egestas etiam vestibulum id aenean. Diam, in mi ac
          eget elit. Pellentesque ut et placerat integer venenatis, urna.
        </p>
      </div>
      <div className="col-2 col-md-1">
        <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png" style={{width: 50, height: 50}} alt />
      </div>
      <div className="col-10 col-md-11">
        <p className="font-weight-bold mt-2">Alif ba ta</p>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
          purus vitae metus egestas etiam vestibulum id aenean. Diam, in mi ac
          eget elit. Pellentesque ut et placerat integer venenatis, urna.
        </p>
      </div>
    </div>
  </div>    
            </div>
        )
    }
}

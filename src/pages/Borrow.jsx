import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar , Image} from 'react-bootstrap'

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
                    <Link to ="index.html">
                        <Image src="https://res.cloudinary.com/plugin007/image/upload/v1603734215/logoPLUGIN_qsovpm.png" className="rounded" alt="..." width="55px" height="55px" />
                    </Link>
                    </div>

                    <Link to="profile.html">
                    <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png"alt className="avatar" style={{verticalAlign: 'middle', width: 50, height: 50, borderRadius: 50}} />
                    </Link>
                </div>
                </Navbar>

                <div className="row" style={{marginLeft: '40vh', marginTop: '10vh', marginRight: '10vh'}}>
    <div className="column">
      <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627812/chunin/image12_l7znce.png" />
    </div>
    <div className="column" style={{marginLeft: '10vh'}}>
      <h2> At the Going Down of the Sun</h2>
      <a style={{fontSize: '5vh', color: 'gray'}}><h2>Maruis Oelsching</h2></a>
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
          <Link to="/diskusi" type="submit" style={{height: 40, width: 150, borderRadius: 30, color: 'white'}} className="btn btn-primary">Borrow</Link>
        </td>
        <td>
          <a type="submit" style={{height: 40, width: 150, borderRadius: 30, border: '1px solid #5FA0DE'}} className="btn">Chat</a>
        </td>
      </tr>
    </tbody></table>


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
      <Link to ="waitingborrow.html" className="btn w-50px" style={{backgroundColor: '#1f81DF', color: 'white', borderRadius: 20, width: 150, height: 40, marginLeft: '55vh'}}>Send</Link>
    </div>

    </div>
    </div>
    </div>
        )
    }
}

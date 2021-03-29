import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar, FormControl, Image, Form} from 'react-bootstrap'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default class waiting extends Component {
    render() {
        return (
            <div>            
            <Navbar class="navbar navbar-expand-lg" bg="light" variant="light" style={{boxShadow: '12px 2px 4px'}}>
                <div class="container-fluid">

                    <div class="position-relative">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" img className="rounded-pill" alt="150x75" src="https://placehold.it/150x75">
                        {/* <i className="fa FaSearch fa-lg position-absolute" style={{top : '13', right: '1rem', color: 'rgb(184, 182, 182)'}} ></i> */}
   
                        </FormControl>
                    </Form>
                    </div>


                    <div class="text-center">
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616622142/logoPLUGIN_qsovpm_jmo8rn.png" alt width="50px" height="40px"></Image>
                    </div>


                    <div>
                        <Link to="/signin"> 
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png" alt className="avatar" style={{verticalAlign: 'middle', width: 50, height: 50, borderRadius: 50}} />
               
                        </Link> 
                    </div>

                </div>
             </Navbar>  


            <div className="container-fluid">
              <div className="row" style={{height: '100vh', marginTop: '5vh'}}>

                <div className="col-3" style={{boxShadow: '3px 0px 3px rgb(168, 166, 166)'}}> 
                  <div className="d-flex justify-content-around align-items-center flex-column" style={{height: '10%', marginTop: '25vh', marginRight: 10}}>
                    
                    <div className="col-md-12 mt-3">
                      <Link Link to ="/profile">
                        < Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Group52_gdn8mt.png" style={{width: 40, height: 40}} alt />
                        <p style={{display: 'inline-block', marginLeft: '3vh', fontSize: 20}}>Profil</p>
                      </Link>
                    </div>

                    <div className="col-md-12 mt-3">
                      <Link Link to ="/books">
                        < Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Group53_akdcyu.png" style={{width: 40, height: 40}} alt />
                        <p style={{display: 'inline-block', marginLeft: '3vh', fontSize: 20}}>Books</p>
                      </Link>
                    </div>

                    <div className="col-md-12 mt-3">
                      <Link Link to ="/outofdate">
                        < Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627809/chunin/Group54_1_j2svvr.png" style={{width: 40, height: 40}} alt />
                        <p style={{display: 'inline-block', marginLeft: '3vh', fontSize: 20}}>Out of Date</p>
                      </Link>
                    </div>

                    <div className="col-md-12 mt-3">
                      < Link to ="/waitingborrow">
                        < Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627809/chunin/Group54_1_j2svvr.png" style={{width: 40, height: 40}} alt />
                        <p style={{display: 'inline-block', marginLeft: '3vh', fontSize: 20}}>Waiting Borrow</p>
                      </ Link>
                    </div>

                    <div className="col-md-12 mt-3">
                      < Link to ="/waiting">
                        < Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627809/chunin/Group54_2_cxiqma.png" style={{width: 40, height: 40}} alt />
                        <p style={{display: 'inline-block', marginLeft: '3vh', fontSize: 20}}>Waiting</p>
                      </ Link>
                    </div>
                  </div>
                </div>





    <div className="col-8">
      <div className="container">
        <h3 style={{marginLeft: 5, marginTop: 30}}>Your Books</h3>
        <div className="row" style={{marginTop: '5vh'}}>
          <div className="col">
            <div className="card">
              <div className="row no-gutters">
                <div className="col-md-3">
                  < Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image10_idooqp.png" />
                </div>
                <div className="col" style={{marginLeft: '3vh', marginTop: '1vh'}}>
                  <div className="card-block ml-1">
                    <link className="ml-4" style={{marginTop: '1vh'}}>Jak OF The Bushveld</link><br />
                    <link className="ml-4">Marius Oelsching</link><br />
                    <button type="button" className="btn btn-primary; ml-5" style={{borderRadius: 20, width: '15vh', color: 'white', backgroundColor: '#1f81DF'}}><Link Link to ="confirmation.html" style={{color: 'white'}}>Detail</Link></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card m-1">
              <div className="card">
                <div className="row no-gutters">
                  <div className="col-md-3">
                    < Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image11_xgjqat.png" />
                  </div>
                  <div className="col" style={{marginLeft: '3vh', marginTop: '1vh'}}>
                    <div className="card-block ml-1">
                      <link className="ml-4" style={{marginTop: '1vh'}}>Jak OF The Bushveld</link><br />
                      <link className="ml-4">Marius Oelsching</link><br />
                      <button type="button" className="btn btn-primary; ml-5" style={{borderRadius: 20, width: '15vh', color: 'white', backgroundColor: '#1f81DF'}}><Link Link to ="confirmation.html" style={{color: 'white'}}>Detail</Link></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card m-1">
              <div className="card">
                <div className="row no-gutters">
                  <div className="col-md-3">
                    < Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image10_1_kceqv9.png" />
                  </div>
                  <div className="col" style={{marginLeft: '3vh', marginTop: '1vh'}}>
                    <div className="card-block ml-1 ml-2">
                      <link className="ml-3" style={{marginTop: '1vh'}}>Jak OF The Bushveld</link><br />
                      <link className="ml-3">Marius Oelsching</link><br />
                      <button type="button" className="btn btn-primary; ml-5" style={{borderRadius: 20, width: '15vh', color: 'white', backgroundColor: '#1f81DF'}}><Link Link to ="confirmation.html" style={{color: 'white'}}>Detail</Link></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>     
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>


        )
    }
}

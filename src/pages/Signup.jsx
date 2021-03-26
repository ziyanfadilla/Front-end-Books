import React, { Component } from 'react'
import {Image} from 'react-bootstrap'

export default class Signup extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                <div className="row" style={{height: '100vh'}}>
                    <div className="col-8" style={{backgroundColor: '#5FA0DE'}}>
                        <div className="d-flex justify-content-around align-items-center flex-column" style={{height: '80%', marginTop: 50}}>
                            <h1 style={{color: 'white'}}>sign Up to Plugin Books</h1>
                            <div className>
                            <div className="form-group" style={{width: 500}}>
                                <input type="text" className="form-control" placeholder="username" style={{backgroundColor: '#5FA0DE', color: 'white', border: '1px solid white', borderRadius: 30, height: 50, paddingLeft: 30}} />
                            </div>
                            <div className="form-group" style={{width: 500}}>
                                <input type="text" className="form-control" placeholder="Email" style={{backgroundColor: '#5FA0DE', border: '1px solid white', borderRadius: 30, height: 50, paddingLeft: 30}} />
                            </div>
                            <div className="form-group" style={{width: 500}}>
                                <input type="text" className="form-control" placeholder="password" style={{backgroundColor: '#5FA0DE', border: '1px solid white', borderRadius: 30, height: 50, paddingLeft: 30}} />
                            </div>
                            </div>
                            <a href="signin.html" className="btn w-50" style={{backgroundColor: 'white', border: '1px solid', borderRadius: 20, height: 40, color: '#5FA0DE', bottom: '50%'}}>Sign Up</a>  
                        </div>
                    </div>

                    <div className="col-4 d-flex justify-content-around align-items-center">
                        <div className="d-flex justify-content-around align-items-center flex-column" style={{height: '70%'}}>
                            <Image src="https://res.cloudinary.com/plugin007/image/upload/v1603734215/logoPLUGIN_qsovpm.png" alt width="50px" height="40px" />
                            <h1 style={{color: '#5FA0DE'}}>Hello, Pluginers</h1>
                            <p style={{color: '#5FA0DE', fontSize: 20, textAlign: 'center'}}>Enter your personal details <br /> and starts journey with us</p>
                            <a href="signin.html" className="btn" style={{backgroundColor: '#5FA0DE', color: 'white', borderRadius: 20, width: 300, height: 40}}>Sign In</a>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        )
    }
}

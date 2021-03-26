import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Image} from 'react-bootstrap'

export default class Categori extends Component {
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
                    <a Link to ="index.html">
                        <Image src="https://res.cloudinary.com/plugin007/image/upload/v1603734215/logoPLUGIN_qsovpm.png" className="rounded" alt="..." width="55px" height="55px" />
                    </a>
                    </div>

                    <Link to="index.html" className="btn" style={{marginTop: 5, marginRight: 30, backgroundColor: 'white', color: '#1f81DF', border: '1px solid #1f81DF', borderRadius: 20, width: '10%', height: '5%'}}>Sign In</Link>

                </div>
                </Navbar>
            </div>

            <div className="container">
                <h2 style={{marginLeft: 5, marginTop: 3}}><b>Technologi</b></h2>
            
                <div>
  <div className="row row-cols-5">
    <div className="col">
      <div className="card" style={{}}>
        <div className="row no-gutters">
          <div className="col-md-3 ">
            <Image src="Image/image 5.png" />
          </div>
          <div className="col">
            <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
              <a className="ml-5">Jak Of</a><br />
              <a className="ml-5">The bushveld</a><br />
              <p className="ml-5">Marius Oelsching</p><br />
              <a className="ml-5">
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{}}>
        <div className="row no-gutters">
          <div className="col-md-3 ">
            <Image src="Image/image 11.png" />
          </div>
          <div className="col">
            <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
              <a className="ml-5">Jak Of</a><br />
              <a className="ml-5">The bushveld</a><br />
              <p className="ml-5">Marius Oelsching</p><br />
              <a className="ml-5">
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{}}>
        <div className="row no-gutters">
          <div className="col-md-3 ">
            <Image src="Image/image 5.png" />
          </div>
          <div className="col">
            <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
              <a className="ml-5">Jak Of</a><br />
              <a className="ml-5">The bushveld</a><br />
              <p className="ml-5">Marius Oelsching</p><br />
              <a className="ml-5">
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{}}>
        <div className="row no-gutters">
          <div className="col-md-3 ">
            <Image src="Image/image 5.png" />
          </div>
          <div className="col">
            <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
              <a className="ml-5">Jak Of</a><br />
              <a className="ml-5">The bushveld</a><br />
              <p className="ml-5">Marius Oelsching</p><br />
              <a className="ml-5">
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{}}>
        <div className="row no-gutters">
          <div className="col-md-3 ">
            <Image src="Image/image 5.png" />
          </div>
          <div className="col">
            <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
              <a className="ml-5">Jak Of</a><br />
              <a className="ml-5">The bushveld</a><br />
              <p className="ml-5">Marius Oelsching</p><br />
              <a className="ml-5">
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row row-cols-5">
    <div className="col">
      <div className="card" style={{}}>
        <div className="row no-gutters">
          <div className="col-md-3 ">
            <Image src="Image/image 5.png" />
          </div>
          <div className="col">
            <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
              <a className="ml-5">Jak Of</a><br />
              <a className="ml-5">The bushveld</a><br />
              <p className="ml-5">Marius Oelsching</p><br />
              <a className="ml-5">
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{}}>
        <div className="row no-gutters">
          <div className="col-md-3 ">
            <Image src="Image/image 5.png" />
          </div>
          <div className="col">
            <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
              <a className="ml-5">Jak Of</a><br />
              <a className="ml-5">The bushveld</a><br />
              <p className="ml-5">Marius Oelsching</p><br />
              <a className="ml-5">
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{}}>
        <div className="row no-gutters">
          <div className="col-md-3 ">
            <Image src="Image/image 5.png" />
          </div>
          <div className="col">
            <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
              <a className="ml-5">Jak Of</a><br />
              <a className="ml-5">The bushveld</a><br />
              <p className="ml-5">Marius Oelsching</p><br />
              <a className="ml-5">
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{}}>
        <div className="row no-gutters">
          <div className="col-md-3 ">
            <Image src="Image/image 5.png" />
          </div>
          <div className="col">
            <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
              <a className="ml-5">Jak Of</a><br />
              <a className="ml-5">The bushveld</a><br />
              <p className="ml-5">Marius Oelsching</p><br />
              <a className="ml-5">
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{}}>
        <div className="row no-gutters">
          <div className="col-md-3 ">
            <Image src="Image/image 5.png" />
          </div>
          <div className="col">
            <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
              <a className="ml-5">Jak Of</a><br />
              <a className="ml-5">The bushveld</a><br />
              <p className="ml-5">Marius Oelsching</p><br />
              <a className="ml-5">
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row row-cols-5">
    <div className="col">
      <div className="card" style={{}}>
        <div className="row no-gutters">
          <div className="col-md-3 ">
            <Image src="Image/image 5.png" />
          </div>
          <div className="col">
            <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
              <a className="ml-5">Jak Of</a><br />
              <a className="ml-5">The bushveld</a><br />
              <p className="ml-5">Marius Oelsching</p><br />
              <a className="ml-5">
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{}}>
        <div className="row no-gutters">
          <div className="col-md-3 ">
            <Image src="Image/image 5.png" />
          </div>
          <div className="col">
            <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
              <a className="ml-5">Jak Of</a><br />
              <a className="ml-5">The bushveld</a><br />
              <p className="ml-5">Marius Oelsching</p><br />
              <a className="ml-5">
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{}}>
        <div className="row no-gutters">
          <div className="col-md-3 ">
            <Image src="Image/image 5.png" />
          </div>
          <div className="col">
            <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
              <a className="ml-5">Jak Of</a><br />
              <a className="ml-5">The bushveld</a><br />
              <p className="ml-5">Marius Oelsching</p><br />
              <a className="ml-5">
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{}}>
        <div className="row no-gutters">
          <div className="col-md-3 ">
            <Image src="Image/image 5.png" />
          </div>
          <div className="col">
            <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
              <a className="ml-5">Jak Of</a><br />
              <a className="ml-5">The bushveld</a><br />
              <p className="ml-5">Marius Oelsching</p><br />
              <a className="ml-5">
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{}}>
        <div className="row no-gutters">
          <div className="col-md-3 ">
            <Image src="Image/image 5.png" />
          </div>
          <div className="col">
            <div className="card-block ml-1 " style={{fontSize: 'smaller'}}>
              <a className="ml-5">Jak Of</a><br />
              <a className="ml-5">The bushveld</a><br />
              <p className="ml-5">Marius Oelsching</p><br />
              <a className="ml-5">
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
              </a>
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

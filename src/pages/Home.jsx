import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Image, } from 'react-bootstrap'
// import img from '../assets/img'



export default class Home extends Component {
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

                <div>
  <div className="container">
    <h2 className="mt-4"><b>Popular</b></h2>
  </div>
  <div className="my-slider">
    <div className="slide-item">
      <div className="card m-2 bg-linear-red" style={{maxWidth: 540, background: '#7A284C'}}>
        <div className="row no-gutters">
          <div className="col-12 col-md-4 ">
            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627810/chunin/image3_izfo32.png" style={{width: 150, height: 200, marginLeft: '1vh'}} alt="..." />
          </div>
          <div className="col-12 col-md-5">
            <div className="card-body">
              <h5 className="card-title">At The Going Down of the Sun</h5>
              <p className="card-text">Marius Oelsching</p>
              <p className="card-text">
                <a>
                  <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                  <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                  <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                  <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                  <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slide-item">
      <div className="card m-2 bg-linear-blue" style={{maxWidth: 540, background: '#6E79E5'}}>
        <div className="row no-gutters">
          <div className="col-12 col-md-4 ">
            <Image src="Image/image 3.png" style={{width: 150, height: 200}} alt />
          </div>
          <div className="col-12 col-md-5">
            <div className="card-body">
              <h5 className="card-title">At The Going Down of the Sun </h5>
              <p className="card-text">Marius Oelsching</p>
              <p className="card-text">
                <a>
                  <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                  <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                  <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                  <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                  <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slide-item">
      <div className="card m-2 bg-linear-pink" style={{maxWidth: 540, background: '#F7E9E0'}}>
        <div className="row no-gutters">
          <div className="col-12 col-md-4 ">
            <Image src="Image/image 10.png" style={{width: 150, height: 200}} alt="..." />
          </div>
          <div className="col-12 col-md-5">
            <div className="card-body">
              <h5 className="card-title"> At The Going Down of the Sun</h5>
              <p className="card-text">Marius Oelsching</p>
              <p className="card-text">
                <a>
                  <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                  <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                  <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                  <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                  <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slide-item">
      <div className="card m-2 bg-linear-red" style={{maxWidth: 540, background: '#7A284C'}}>
        <div className="row no-gutters">
          <div className="col-12 col-md-4 ">
            <Image src="Image/image 10.png" style={{width: 150, height: 200}} alt="..." />
          </div>
          <div className="col-12 col-md-5">
            <div className="card-body">
              <h5 className="card-title"> At The Going Down of the Sun</h5>
              <p className="card-text">Marius Oelsching</p>
              <p className="card-text">
                <a>
                  <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                  <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                  <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                  <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                  <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-5 col-md-10">
        <h5 style={{marginTop: '5vh'}}>Browse</h5>
        <div className="row d-flex">
          <div className="col-6 col-md-4">
            <div className="card-books mb-3" style={{maxWidth: 540}}>
              <div className="row no-gutters">
                <div className="col-12 col-md-4">
                  <a href="description1.html">
                    <Image src="Image/image 5.png" className="cover" style={{width: 100, height: 170}} alt="..." />
                  </a>
                </div>
                <div className="col-12 col-md-8">
                  <div className="card-body">
                    <a href="description1.html" style={{color: 'black'}}>
                      <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                      <p className="card-text">Marius Oelsching</p>
                    </a><a>
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
          <div className="col-6 col-md-4">
            <div className="card-books mb-3" style={{maxWidth: 540}}>
              <div className="row no-gutters">
                <div className="col-12 col-md-4">
                  <a href="description1.html">
                    <Image src="Image/image 11.png" className="cover" style={{width: 100, height: 170}} alt="..." />
                  </a>
                </div>
                <div className="col-12 col-md-8">
                  <div className="card-body">
                    <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                    <p className="card-text">Marius Oelsching</p>
                    <a>
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
          <div className="col-6 col-md-4">
            <div className="card-books mb-3" style={{maxWidth: 540}}>
              <div className="row no-gutters">
                <div className="col-12 col-md-4">
                  <a href="description1.html">
                    <Image src="Image/image 5.png" className="cover" style={{width: 100, height: 170}} alt="..." />
                  </a>
                </div>
                <div className="col-12 col-md-8">
                  <div className="card-body">
                    <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                    <p className="card-text">Marius Oelsching</p>
                    <a>
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
          <div className="col-6 col-md-4">
            <div className="card-books mb-3" style={{maxWidth: 540}}>
              <div className="row no-gutters">
                <div className="col-12 col-md-4">
                  <a href="description1.html">
                    <Image src="Image/image 10.png" className="cover" style={{width: 100, height: 170}} alt="..." />
                  </a>
                </div>
                <div className="col-12 col-md-8">
                  <div className="card-body">
                    <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                    <p className="card-text">Marius Oelsching</p>
                    <a>
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
          <div className="col-6 col-md-4">
            <div className="card-books mb-3" style={{maxWidth: 540}}>
              <div className="row no-gutters">
                <div className="col-12 col-md-4">
                  <a href="description.html">
                    <Image src="Image/image 5.png" className="cover" style={{width: 100, height: 170}} alt="..." />
                  </a>
                </div>
                <div className="col-12 col-md-8">
                  <div className="card-body">
                    <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                    <p className="card-text">Marius Oelsching</p>
                    <a>
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
          <div className="col-6 col-md-4">
            <div className="card-books mb-3" style={{maxWidth: 540}}>
              <div className="row no-gutters">
                <div className="col-12 col-md-4">
                  <a href="description.html">
                    <Image src="Image/image 11.png" className="cover" style={{width: 100, height: 170}} alt="..." />
                  </a>
                </div>
                <div className="col-12 col-md-8">
                  <div className="card-body">
                    <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                    <p className="card-text">Marius Oelsching</p>
                    <a>
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
      {/* kat */}
      <div className="col-7 col-md-2">
        <h5 className="category-text" style={{marginTop: '5vh'}}>Category</h5>
        <div className="row category">
          <div className="col-md-12 mt-3">
            <a href="categori.html" className="text-dark" style={{textDecoration: 'none', listStyle: 'none'}}>
              <Image src="Image/kteknologi.png" style={{width: 30, height: 30}} alt />
              <p style={{display: 'inline-block'}}>Technology</p>
            </a>
          </div>
          <div className="col-md-12 mt-3">
            <a href="search.html" className="text-dark" style={{textDecoration: 'none', listStyle: 'none'}}>
              <Image src="Image/khistory.png" style={{width: 30, height: 30}} alt />
              <p style={{display: 'inline-block'}}>History</p>
            </a>
          </div>
          <div className="col-md-12 mt-3">
            <Image src="Image/kpolitic.png" style={{width: 30, height: 30}} alt />
            <p style={{display: 'inline-block'}}>Politics</p>
          </div>
          <div className="col-md-12 mt-3">
            <Image src="Image/kromance.png" style={{width: 30, height: 30}} alt />
            <p style={{display: 'inline-block'}}>Romance</p>
          </div>
          <div className="col-md-12 mt-3">
            <Image src="Image/ksciense.png" style={{width: 30, height: 30}} alt />
            <p style={{display: 'inline-block'}}>Science</p>
          </div>
          <div className="col-md-12 mt-3">
            <Image src="Image/ksport.png" style={{width: 30, height: 30}} alt />
            <p style={{display: 'inline-block'}}>Sports</p>
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

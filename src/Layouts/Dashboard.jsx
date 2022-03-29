import React, { Component, Fragment } from 'react'
import { Navbar } from '../Components/Navbar/Navbar';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Dashboard extends Component {
  render() {
    return (
      <Fragment>
          <div className="d-flex">

            <aside className="flex-shrink-1 bg-primary">
                <div className="d-flex flex-column align-items-center my-2">
                    <div>
                        <FontAwesomeIcon icon="fa-solid fa-house-blank" />
                        <FontAwesomeIcon icon="fa-solid fa-house" />
                        <i className="fa-solid fa-square fa-lg fa-white"></i>
                    </div>
                    <p></p>
                </div>
                
                <div className="d-flex flex-column align-items-center my-2">
                    <div>
                        <i className="fa-solid fa-house-user fa-lg fa-white"></i>
                    </div>
                    <Link to="/" className="fw-bold text-white nav-side">Dashboard</Link>
                </div>

                <div className="d-flex flex-column align-items-center my-2">
                    <div>
                        <i className="fa-solid fa-car-side fa-lg fa-white"></i>
                    </div>
                    <Link to="/cars" className="fw-bold text-white nav-side">Cars</Link>
                </div>

            </aside>

            <div className="w-100">
                <Navbar/>
                <main className="d-flex">
                    <div className="bg-white sidebar-inner px-3">
                        <p className="text-muted my-3 text-uppercase">{this.props.title}</p>
                        <p className="fw-bold my-1">{this.props.subtitle}</p>
                    </div>
                    <div className="w-100 container p-5 bg-light">
                        
                      {this.props.item}
                       

                    </div>
                </main>

            </div>

          </div>
      </Fragment>
    )
  }
}

export default Dashboard
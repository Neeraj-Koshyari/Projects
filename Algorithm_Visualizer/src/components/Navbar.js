import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">Visualizer</Link>
        <div className="navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <div className="dropdown">
                <button className={`btn btn-${props.mode} dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Algo
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/Sorting_Vis">Sorting Visualizer</Link></li>
                  <li><Link className="dropdown-item" to="/Graph_Vis">Graph Visualizer</Link></li>
                  <li><Link className="dropdown-item" to="/Search_Vis">Searching Visualizer</Link></li>
                  <li><Link className="dropdown-item" to="/SievePrime_Vis">Sieve of Eratosthenes</Link></li>
                </ul>
              </div>
            </ul>
        </div>
        <div className="form-check-reverse form-switch">
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:(props.mode === 'light')?'black':'white',}}>{(props.mode === 'light')? 'Light Mode':'Dark Mode'}</label>
          <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        </div>
    </div>
    </nav>
  )
}

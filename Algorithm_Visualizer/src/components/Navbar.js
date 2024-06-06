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
                <li className="nav-item">
                <Link className="nav-link active" to="/Sorting_Vis">Sorting Visualizer</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/Graph_Vis">Graph Visualizer</Link>
                </li>
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

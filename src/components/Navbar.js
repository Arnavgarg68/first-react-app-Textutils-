import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg  " style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' ,border:"1px solid green"}}>
      <div className="container-fluid" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
        <Link className="navbar-brand" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent"style={{color:props.mode==='dark'?'white':'black'}}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{color:props.mode==='dark'?'white':'black'}}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Aabout"style={{color:props.mode==='dark'?'white':'black'}}>{props.aboutText}</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode} />
        <label className="form-check-label" Htmlfor="flexSwitchCheckDefault" >{props.mode} mode</label>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}
Navbar.defaultProps = {
  title: "Arnav garg",
  aboutText: "Kuch nahi"
}
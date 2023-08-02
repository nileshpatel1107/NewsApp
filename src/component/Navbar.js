// import PropTypes from 'prop-types'
import React from 'react'

import {

    Link


} from "react-router-dom";

const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg  bg-dark " >
            <div className="container-fluid ">
                <Link className="navbar-brand text-light" to="/">Nvbar</Link >
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-4">
                        <Link className="nav-link  text-light" aria-current="page" to="/">Home</Link >
                        <Link className="nav-link  text-light" aria-current="page" to="/business">Business</Link >
                        <Link className="nav-link  text-light" aria-current="page" to="/entertainment">Entertainment</Link >
                        <Link className="nav-link  text-light" aria-current="page" to="/general">General</Link >
                        <Link className="nav-link  text-light" aria-current="page" to="/health">Health</Link >
                        <Link className="nav-link  text-light" aria-current="page" to="/science">Science</Link >
                        <Link className="nav-link  text-light" aria-current="page" to="/sports">Sports</Link >
                        <Link className="nav-link  text-light" aria-current="page" to="/technology">Technology</Link >





                    </div>
                </div>
            </div>

        </nav>

    )
}


export default Navbar;




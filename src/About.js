import './About.css';
import React, { Component } from 'react'
import {HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'



  export default function Projects(){
    return (
        <Router>
            
        <h1>Hi there - About us</h1>

        <Route>
        <nav className='nav-in-about'>
        <Link to="/">
        <div className='home-in-about'>
            <h1>Home</h1>
            </div>
        </Link>
        </nav>
        </Route>
        </Router>
    )
}

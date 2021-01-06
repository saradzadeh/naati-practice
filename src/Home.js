import './Home.css';
import {HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'





export default function Home(){
    return (
        <Router>
      <div className='home-grid'>
          <aside>
              {/* <h1>HI I AM SARA</h1> */}
          </aside>
          
          <section className='photo'>
              <img src="portfoliofinal.png" alt=""/>
          </section>

      </div>
      <Route>
      <nav>
      <Link to="/">
      <div className='home'>
          <h1>Home</h1>
          </div>
      </Link>

      <Link to="/about">
          <div className='about'>
          <h1>ABOUT</h1>
          </div>      
      </Link>

      <Link to="/signup">
          <div className='signup'>
          <h1>SIGNUP</h1>
          </div>      
      </Link>

      <Link to="/login">
          <div className='login'>
          <h1>LOGIN</h1>
          </div>
      </Link>

      <Link to="/dashboard">
          <div className='dashboard'>
          <h1>DASHBOARD</h1>
          </div>
      </Link>

      <Link to="/contact">
          <div className='contact'>
          <h1>CONTACT</h1>
          </div>
      </Link>
  </nav>
  </Route>
  </Router>
    )
}
import './Home.css';
import {HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'





export default function Home(){
    return (
        <Router>
      <div className='home-grid'>
          
          
          <section className='photo'>
              
          </section>

      </div>
      <Route>
      <nav className='nav-bar-grid'>
        
        <div className='nav-bar-logo'>
            <img src="naatilogo.png" alt=""/>
        </div>
        
        <div className='nav-bar-links'>
            <Link to="/">
            <div className='home'>
                <h1>Home</h1>
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

            <Link to="/about">
                <div className='about'>
                <h1>ABOUT</h1>
                </div>      
            </Link>

            <Link to="/contact">
                <div className='contact'>
                <h1>CONTACT</h1>
                </div>
            </Link>

            <Link to="/dashboard">
                <div className='dashboard'>
                <h1>DASHBOARD</h1>
                </div>
            </Link>
        </div>
  </nav>
  <div className='what-ccl-grid'>
      <div>
        <h1>WHAT IS THE NAATI CCL TEST</h1>
        <p>
        The Credentialed Community Language Test, known as the CCL Test, is an interpreting test for evaluation of your language quality and capabilities in community level. In this test, candidates interpret a conversation between an English speaker and a Language Other Than English (LOTE) to demonstrate accurate comprehension of each language.

        During CCL Test, an audio recording is played by a test officer which includes topics in Australian society such as health, legal, immigration, finance, housing, education, etc.

        CCL Test candidates after passing the ccl exam are only able to claim 5 bonus points for their visa applications in subclass of 189,190, and 491 and NOT working as a certified interpreter or translator.
        </p>
      </div>
      <div>
      <img src="whatccl.png" alt=""/>
      </div>
  
  </div>


  <div className='test-results'>
      <h1>TEST RESULTS</h1>
  </div>



  <h1 className='test-location'>TEST LOCATIONS | TEST DATES</h1>
  <div className='locations'>
      
      <ul>
          <li>May</li>
          <li>Jun</li>
          <li>Jul</li>
          <li>Sep</li>
          <li>Oct</li>
          <li>Nov</li>
          <li>Dec</li>
      </ul>
      <ul>

      </ul>
      <img src="locations.png" alt=""/>
  </div>



  <div className='what-material-grid'>
      <div>
        <h1>WHAT IS OUR MATERIAL</h1>
        <p>
        If you are struggling to find the exactly material you need for Naati CCL Test, CCL PANEL is a self-study and practical website which provides not only learning materials, and test strategies but also a variety of mock exams in a simulated real test environment to maximize your Naati CCL score. On March 2018, when the first Naati CCL test launched, we built the first and the largest preparation resources of CCL test and updated it monthly, and now, we made a great destination for all CCL test takers in Australia. CCL PANEL Website features a centralized dashboard where you can access to updated sources and mock exams, plus monitor your progress and ask for feedback from certified Naati interprete. We believe a goal without a plan is just a wish, so we made that plan for you.
        </p>
      </div>
      <div>
      <img src="material.png" alt=""/>
      </div>
  </div>

  <div className='disclaimer'>
          <h1>DISCLAIMER</h1>
          <p>The content and teaching materials provided in WWW.CCLPANEL.COM website is designed to provide maximum student learning and increase student success; however, some of the contents are copyright materials from NAATI’S OFFICIAL WEBSITE. NAATI organization officially has authorized the CCL Panel Website to reproduce some of their copyright materials, but NAATI does not endorse CCL PANEL as a training provider and CCL PANEL is an independent self-study website for delivering its resources to students.</p>
      </div>

      <footer>
          <p>NAATI CCL PANEL</p>
          <p>&copy;copy right 2021 by ccl panel</p>
      </footer>
  </Route>
  </Router>
    )
}
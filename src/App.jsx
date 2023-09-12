import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import All from './All'
import FullStackDevelopment from './FullStackDevelopment'
import DataScience from './DataScience'
import Cybersecurity from './Cybersecurity'
import Career from './Career'

function App() {

  return (
    <>
      <Router>
        <div >
          <navbar className='sticky-nav'>
            <nav>
              <ul className='taskbar'>
                <li>
                  <Link to='/'><h3>ALL</h3></Link>
                </li>
                <li>
                  <Link to='full-stack-development/'>
                    <h3>FULL STACK DEVELOPMENT</h3></Link>
                </li>
                <li>
                  <Link to='data-science/'><h3>DATASCIENCE</h3></Link>
                </li>
                <li>
                  <Link to='cyber-security/'><h3>CYBERSECUIRITY</h3></Link>
                </li>
                <li>
                  <Link to='career/'><h3>CAREER</h3></Link>
                </li>
              </ul>
            </nav>
          </navbar>

          <Routes>
            <Route path='/' exact Component={All}></Route>
            <Route path='full-stack-development/' Component={FullStackDevelopment}></Route>
            <Route path='data-science/' Component={DataScience}></Route>
            <Route path='cyber-security/' Component={Cybersecurity}></Route>
            <Route path='career' Component={Career}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App

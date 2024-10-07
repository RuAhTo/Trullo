import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/pages/_Projects.scss'

function Projects() {
  return (
    <>
        <nav className="dashboard-navbar">
          <h1>Trullo</h1>
          <ul className="dashboard-navbar-list">
            <li><a href="#">Tasks</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Stats</a></li>
            <li><Link to="/dashboard">Back</Link></li>
          </ul>
          <button>Log out</button>
        </nav>

        <main>
        <section className='top-section'>
          <div className='top-current-container'>
            <h3>Blocked</h3>
          </div>
        </section>
        <div className="bottom-section-container">
          <section className='bottom-section'>
            <div className="current-container">
              <h3>To do</h3>
            </div>
          </section>
          <section className='bottom-section'>
            <div className="current-container">
            <h3>In Progress</h3>
            </div>
          </section>
          <section className='bottom-section'>
            <div className="current-container">
              <h3>Done</h3>
            </div>
          </section>
        </div>
        </main>
    </>
  )
}

export default Projects
import React from 'react';
import '../scss/pages/_Dashboard.scss';
import DashboardCard from '../components/cards/ProjectCard'

function Dashboard() {
  return (
    <>
        <nav className="dashboard-navbar">
          <h1>Trullo</h1>
          <ul className="dashboard-navbar-list">
            <li><a href="#">Projects</a></li>
            <li><a href="#">Tasks</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Stats</a></li>
          </ul>
          <button>Log out</button>
        </nav>
      <main>
        <section className='top-section'>
          <div className='top-current-container'>yo here's some stats for ya'll</div>
        </section>
        <div className="bottom-section-container">
          <section className='bottom-section'>
            <div className="current-container">
              <h3>Current Projects</h3>
              <DashboardCard/>
            </div>
          </section>
          <section className='bottom-section'>
            <div className="current-container">
            <h3>Upcoming Task Deadlines</h3>
            </div>
          </section>
          <section className='bottom-section'>
            <div className="current-container">
              <h3>Your Teams</h3>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Dashboard;

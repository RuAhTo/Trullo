import React from 'react';
import '../scss/pages/_Dashboard.scss';

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
            <div className="current-container">Projects</div>
          </section>
          <section className='bottom-section'>
            <div className="current-container">Tasks</div>
          </section>
          <section className='bottom-section'>
            <div className="current-container">Teams</div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Dashboard;

import React from 'react';
import '../../scss/components/_dashboard-card.scss';
import Pie from '../stats/Piechart';

function Card() {
  return (
    <div className='project-card'>
      <div className='project-card-header'>
        <h4>Create Trullo</h4>
      </div>
      <div className='project-card-content'>
        <div>
            <p>This is a project you have.</p>
        </div>
        <div className='piechart-container'>
            <Pie percentage={42} colour="#134074" />
        </div>
      </div>
    </div>
  );
}

export default Card;

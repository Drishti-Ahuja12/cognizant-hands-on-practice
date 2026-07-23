import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohortName, startDate, endDate, status }) {
  const h3Style = {
    color: status.toLowerCase() === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={h3Style}>{cohortName}</h3>
      <dl>
        <dt>Start Date</dt>
        <dd>{startDate}</dd>
        
        <dt>End Date</dt>
        <dd>{endDate}</dd>
        
        <dt>Status</dt>
        <dd>{status}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;

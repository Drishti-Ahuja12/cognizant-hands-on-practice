import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard - Cohorts</h1>
      <CohortDetails 
        cohortName="ReactJS Batch 1" 
        startDate="12-Aug-2024" 
        endDate="30-Sep-2024" 
        status="Ongoing" 
      />
      <CohortDetails 
        cohortName="Java Spring Boot Batch 2" 
        startDate="01-Jan-2024" 
        endDate="15-Apr-2024" 
        status="Completed" 
      />
    </div>
  );
}

export default App;

import React from 'react';

const singleOffice = {
  name: 'Downtown Tech Hub',
  rent: 55000,
  address: '123 Main St, New York, NY'
};

const officeList = [
  { id: 1, name: 'Creative Workspace', rent: 45000, address: '45 Art Lane, Chicago, IL' },
  { id: 2, name: 'Corporate Plaza', rent: 85000, address: '99 Business Ave, San Francisco, CA' },
  { id: 3, name: 'Startup Garage', rent: 30000, address: '1 Innovation Dr, Austin, TX' },
  { id: 4, name: 'Executive Suite', rent: 120000, address: '500 Highrise Blvd, Seattle, WA' }
];

function App() {
  const getRentStyle = (rent) => ({
    color: rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold'
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Office Space Rental</h1>
      
      <img 
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" 
        alt="Office Space" 
        style={{ width: '400px', borderRadius: '10px' }} 
      />

      <hr />
      
      <h2>Featured Office</h2>
      <p><b>Name:</b> {singleOffice.name}</p>
      <p><b>Rent:</b> <span style={getRentStyle(singleOffice.rent)}>${singleOffice.rent}</span></p>
      <p><b>Address:</b> {singleOffice.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {officeList.map((office) => (
          <li key={office.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '15px' }}>
            <p><b>Name:</b> {office.name}</p>
            <p><b>Rent:</b> <span style={getRentStyle(office.rent)}>${office.rent}</span></p>
            <p><b>Address:</b> {office.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

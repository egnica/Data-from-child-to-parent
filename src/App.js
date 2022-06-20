
import './App.css';
import Form from './FormFolder/Form';
import React, { useState } from 'react';

function App() {
  
  const getData = (data) => {
    console.log('Data from Form.js to App.js', data)
    nameChanged(data);
   
  };
  const [name, nameChanged] = useState('');
  
  
  return (
    <div className="App">
      

    <Form onSubmit={getData}/>
   <p>{name}</p>
    </div>
  );
}

export default App;

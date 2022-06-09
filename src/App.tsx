import React, { useState } from 'react';

const App: React.FC = () => {

  const initialCityState = { city: '', state: ''};
  const [cityState, setCityState] = useState(initialCityState);
  const [zipCode, setZipCode] = useState("");


  return (
    <div className='App'>
      <h1>City lookup</h1>
      <form action="" className='form-data'>

        <label htmlFor="zip">Enter Zip Code</label>
        <input 
        className='zip' 
        value={zipCode || ""} 
        type="text" 
        name="zip" 
        id="zip"  
        placeholder='#####'
        onChange={(event) => {
          const { value } = event.target;
          setZipCode(value.replace(/[^\d{5}]$/, "").substring(0, 5))
        }}
        />

        <label htmlFor="city">City</label>
        <input className='city' value={cityState.city} type="text" name="city" id="city"  disabled/>

        <label htmlFor="state">State</label>
        <input className='state' value={cityState.state} type="text" name="state" id="state" disabled/>
      </form>
    </div>
  )
}

export default App;

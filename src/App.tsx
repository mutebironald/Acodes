import React, { useState, FC, useEffect } from 'react';
import getData from './api';


const App: FC = () => {

  const initialCityState = { city: '', state: ''};
  const [cityState, setCityState] = useState(initialCityState);
  const [zipCode, setZipCode] = useState<string>("");

  const handleSuccess = () => {
   const element = document.querySelector(".errorMessage") as HTMLElement | null
   if(element != null) element.style.display = 'none';

  }
  const handleError = () => {
    const element = document.querySelector(".errorMessage") as HTMLElement | null
    if(element != null) element.style.display = 'block';
    setTimeout(handleSuccess, 3000)
  }

  const getCityState = async (zipCode: string) => {
    try{
        const response = await getData(zipCode);
        //@ts-ignore
        setCityState({city: response.data.places[0]['place name'], state: response.data.places[0].state })
    } catch(error){
        console.log(`error getting associated state and city, ${typeof error}`)
        handleError()
    }
  }

  useEffect(() => {
    getCityState(zipCode)
  }, [zipCode])

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setZipCode(value.replace(/[^\d{5}]$/, "").substring(0, 5));
  }


  return (
    <div className='App'>
      <h1>zipCode search</h1>
      <form action="" className='form-data' >

        <label htmlFor="zip">Zip Code</label>
        <input 
        className='zip' 
        value={zipCode || ""} 
        type="text" 
        name="zip" 
        id="zip"  
        placeholder='Enter zipcode here....'
        onChange={handleChange}
        maxLength={5}
        />

        <label htmlFor="city">City</label>
        <input className='city' value={cityState.city} type="text" name="city" id="city"  disabled/>

        <label htmlFor="state">State</label>
        <input className='state' value={cityState.state} type="text" name="state" id="state" disabled/>

        <p className='errorMessage'>Please enter a valid zip code</p>
      </form>
    </div>
  )
}

export default App;

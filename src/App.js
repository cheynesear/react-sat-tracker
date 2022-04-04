//https://stackoverflow.com/questions/65763931/react-leaflet-update-map-center
//https://codesandbox.io/s/react-leaflet-v3x-update-map-center-9826u?file=/src/Map.jsx:0-1151

//test

import React, { useEffect,useState } from "react";

import Map from "./Map";
import "./App.css";

function App() {

    const issURL = "https://api.wheretheiss.at/v1/satellites/";

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('25544') //default to ISS' NORAD ID

    useEffect(() => {
      getData();
    },[query]); // includes empty dependency array
  
    // Access data from APIs
    const getData = async () => {
      const response = await fetch(issURL + query);
      const data = await response.json()
      setData(data)
      console.log(data);
    }
  
    const updateSearch = e => {
      setSearch(e.target.value);
    };

    const getSearch = e => {
      e.preventDefault();
      setQuery(search)
    };

  return (
    <>
    <div>
      <h2>Satellite name: {data.name}</h2>
      <p>NORAD ID: {data.id}</p>
      <p>Latitude: {data.latitude}, Longitude: {data.longitude}</p>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} placeholder='Enter satellite ID' />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
    </div>
    
    <Map data={data} />
    </>
  )
}

  export default App;
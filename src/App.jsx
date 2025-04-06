import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { city } from "../city";
import "./App.css";
import New from "./components/New";

function App() {
  const [citydata, setCityData] = useState(city);
  const [data, setData] = useState([]);
  const [cityName, setCityName] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, [cityName]);

  useEffect(() => {
    const id = setTimeout(() => {
      const new_arr = data.map((e) => {
        if (e.cityName === search) {
          return { ...e, search: false };
        }
        return e;
      });
      setData(new_arr); 
    }, 3000);
  
    return () => {
      clearTimeout(id);
    };
  }, [data, search]);

  async function fetchData() {
    if (cityName === "") {
      return;
    }
    const response = await fetch(
      `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cityName}`
    );
    const result = await response.json();
    console.log(result);
    
    let new_result = { ...result, cityName: cityName, search: false };
    console.log(new_result);
    
    setData([...data, new_result]);
  }

  function getWeather() {
    let new_arr = [...citydata];
    let find = new_arr.find((ele) => ele.value === false);
    if (find === undefined) {
      return;
    }
    setCityName(find.name);
    new_arr.map((e) => {
      if (e.id === find.id) {
        e.value = true;
      }
    });
    setCityData(new_arr);
  }

  function setBackground() {
    const new_arr = data.map((e) => {
      if (e.cityName === search) {
        return { ...e, search: true }; 
      }
      return e;
    });
    setData(new_arr);
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1>Aparna Weather App</h1>
      </div>

      <div className="main-content">
        <div className="left-panel">
          <button className="get-weather-btn" onClick={getWeather}>
            Get Weather
          </button>
          <div className="city-list">
            <li className="city-list-header">City</li>
            {citydata.map((data, index) => (
              <li
                key={index}
                className={`city-item ${data.value ? "active-city" : ""}`}
              >
                {data.name}
              </li>
            ))}
          </div>
        </div>

        <div className="separator"></div>

        <div className="right-panel">
          <div className="search-bar">
            <input type="text" placeholder="City Name" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={setBackground} className="search-btn"> <IoSearch className="icon" /></button>
          </div>
          <div className="weather-data">
            <New
              data={data}
              setData={setData}
              cityName={cityName}
              setCityData={setCityData}
              citydata={citydata}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



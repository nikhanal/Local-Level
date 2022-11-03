import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
function App() {
  var provinces = [];
  const [select, setSelect] = useState([]);
  const [selectdistrict, setselectdistrict] = useState(null);
  const [urban, setUrban] = useState([]);
  const [district, setDistrict] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res2 = await fetch("/urban");
        const data2 = await res2.json();
        setUrban(data2);
        const response = await fetch("/list/district/byprovince/" + select);
        const data1 = await response.json();
        setDistrict(data1);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [select]);
  return (
    <div className="App">
      <div className="select-container">
        <select
          value={select}
          onChange={(e) => {
            setSelect(e.target.value);
          }}
        >
          {urban.forEach((item) => {
            provinces.push(item.Province);
          })}
          {provinces.sort()}
          {
            (provinces = provinces.filter((item, index) => {
              return provinces.indexOf(item) === index;
            }))
          }
          ;
          {provinces.map((item) => {
            return (
              <option value={item} key={uuidv4()}>
                {item}
              </option>
            );
          })}
        </select>
        <select
          value={selectdistrict}
          onChange={(e) => {
            setselectdistrict(e.target.value);
          }}
        >
          <option selected disabled key={uuidv4()}>
            Choose a District
          </option>
          {district.sort()}
          {district.map((district) => {
            return (
              <option value={district} key={uuidv4()}>
                {district}
              </option>
            );
          })}
          ;
        </select>
      </div>
    </div>
  );
}

export default App;

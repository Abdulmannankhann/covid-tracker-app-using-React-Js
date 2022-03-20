import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { Alert } from "bootstrap";
import React, { useState, useEffect } from "react";
import "./Search.css";

function Search() {
  const [report, setReport] = useState([]);
  const [singleCountry, setSingleCountry] = useState([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    axios.get("https://api.covid19api.com/summary").then((res) => {
      setReport(res.data.Countries);
    });
  }, []);

  function searchCountry(event) {
    if (event.key === "Enter") {
      const data = report.filter((El) => {
        return El.Country.toLowerCase() === country;
      });
      setSingleCountry(data);
    }
  }

  function getCountryName(event) {
    setCountry(event.target.value);
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter Country Name..."
        className="search"
        onChange={(event) => getCountryName(event)}
        onKeyDown={searchCountry}
      ></input>
      {singleCountry[0] && (
        <div className="country">
          <img
            className="country__img"
            src={`https://flagcdn.com/256x192/${singleCountry[0].CountryCode.toLowerCase()}.png`}
          />
          <div className="country__data">
            <h3 className="country__name">{singleCountry[0].Country}</h3>
            <p className="country__row">
              Total Cases : {singleCountry[0].TotalConfirmed}
            </p>
            <p className="country__row">
              Total Recovered : {singleCountry[0].TotalRecovered}
            </p>
            <p className="country__row">
              Total Deaths : {singleCountry[0].TotalDeaths}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;

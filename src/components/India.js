import React, { useState, useEffect } from "react";
import * as axios from "axios";
import "./India.css";

function India() {
  const [report, setReport] = useState([]);

  useEffect(() => {
    axios.get("https://data.covid19india.org/data.json").then((res) => {
      setReport(res.data.statewise);
    });
  }, []);

  const dataElements = report.map((El, i) => {
    return (
      <tr key={i}>
        <th>{El.state}</th>
        <td>{El.confirmed}</td>
        <td>{El.recovered}</td>
        <td>{El.deaths}</td>
        <td>{El.active}</td>
        <td>{El.lastupdatedtime}</td>
      </tr>
    );
  });
  
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main heading">
          <h1 className="mb-5 text-centre" id="india-title">
            <span className="font-weight-bold"> INDIA </span> COVID-19 Dashboard
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dard">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>{dataElements}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default India;

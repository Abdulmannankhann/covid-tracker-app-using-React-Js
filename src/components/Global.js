import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Global.css";

function Global() {
  const [report, setReport] = useState([]);

  useEffect(() => {
    axios.get("https://api.covid19api.com/summary").then((res) => {
      setReport(res.data.Global);
    });
  }, []);

  console.log(report);
  return (
    <>
      <h1 className="live">📍 LIVE</h1>
      <h2 className="live">Covid Cases Globally</h2>
      <section>
        <ul className="block">
          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span> Total </span> Confirmed
                </p>
                <p className="card__total card__small">
                  {report.TotalConfirmed}
                </p>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span> Total </span> Recovered
                </p>
                <p className="card__total card__small">
                  {report.TotalRecovered}
                </p>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span> New </span> Confirmed
                </p>
                <p className="card__total card__small">{report.NewConfirmed}</p>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span> New </span> Confirmed
                </p>
                <p className="card__total card__small">{report.NewRecovered}</p>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span> Total </span> Deaths
                </p>
                <p className="card__total card__small">{report.TotalDeaths}</p>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span> New </span> Deaths
                </p>
                <p className="card__total card__small">{report.NewDeaths}</p>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span> Last </span> Update
                </p>
                <p className="card__total card__small">{report.Date}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Global;

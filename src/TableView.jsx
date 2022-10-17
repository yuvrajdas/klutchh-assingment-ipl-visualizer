import React from "react";
import { useEffect, useState } from "react";
import { csv } from "d3";
import "./table.css";
const TableView = () => {
  const [iplData, setIplData] = useState([]);

  let getIPLData = async () => {
    let csvData = await csv("matches.csv");
    setIplData(csvData);
    console.log(csvData);
  };
  useEffect(() => {
    getIPLData();
  }, []);
  return (
    <>
      <div className="container mt-3">
        <h1 className="text-center">IPL Live Data Table View</h1>

        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Season</th>
                <th>City</th>
                <th>Date</th>
                <th>Team 1</th>
                <th>Team 2</th>
                <th>Toss Winner</th>
                <th>Toss Decision</th>

                <th>Umpire1</th>
                <th>Umpire2</th>
                <th>Venue</th>
                <th>Win By Run</th>
                <th>Win By Wickets</th>
                <th>Winner</th>
              </tr>
            </thead>
            <tbody>
              {iplData.map((element) => {
                console.log(element);
                return (
                  <tr>
                    <td>{element.id}</td>
                    <td>{element.season}</td>
                    <td>{element.city}</td>
                    <td>{element.date}</td>
                    <td>{element.team1}</td>
                    <td>{element.team2}</td>
                    <td>{element.toss_winner}</td>
                    <td>{element.toss_decision}</td>
                    <td>{element.umpire1}</td>
                    <td>{element.umpire2}</td>
                    <td>{element.venue}</td>
                    <td>{element.win_by_runs}</td>
                    <td>{element.win_by_wickets}</td>
                    <td>{element.winner}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableView;

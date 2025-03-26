import React, { useState } from "react";
import "./CrimeDashboard.css";
import { PieChart, Pie, Cell, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

const CrimeDashboard = () => {
  const [view, setView] = useState("dashboard");

  const pastCrimeRecords = [
    { type: "Theft", location: "New York", date: "2025-03-01" },
    { type: "Assault", location: "Los Angeles", date: "2025-03-05" },
    { type: "Fraud", location: "Chicago", date: "2025-03-10" },
  ];

  const liveCrimeMapData = [
    { type: "Robbery", location: "Miami", date: "2025-03-15" },
    { type: "Homicide", location: "Houston", date: "2025-03-20" },
    { type: "Vandalism", location: "San Francisco", date: "2025-03-25" },
  ];

  const getChartData = (records) => {
    const locationCounts = records.reduce((acc, record) => {
      acc[record.location] = (acc[record.location] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(locationCounts).map((location) => ({
      name: location,
      value: locationCounts[location],
    }));
  };

  const getLineChartData = (records) => {
    return records.map((record, index) => ({
      name: record.location,
      crimeType: index + 1,
    }));
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF"];

  return (
    <div className="crime-dashboard">
      <h1>Crime Dashboard</h1>
      <div className="button-group">
        <button onClick={() => setView("pastRecords")} className="crime-button">Past Crime Records</button>
        <button onClick={() => setView("liveCrimeMap")} className="crime-button">Live Crime Map</button>
      </div>

      {view === "dashboard" && <p>Select an option to view crime data.</p>}
      
      {view === "pastRecords" && (
        <div>
          <h2>Past Crime Records</h2>
          <table className="crime-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Location</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {pastCrimeRecords.map((record, index) => (
                <tr key={index}>
                  <td>{record.type}</td>
                  <td>{record.location}</td>
                  <td>{record.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <PieChart width={400} height={300}>
            <Pie
              data={getChartData(pastCrimeRecords)}
              cx={200}
              cy={150}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {getChartData(pastCrimeRecords).map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
          <LineChart width={500} height={300} data={getLineChartData(pastCrimeRecords)}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="crimeType" stroke="#8884d8" />
          </LineChart>
        </div>
      )}
      
      {view === "liveCrimeMap" && (
        <div>
          <h2>Live Crime Map</h2>
          <table className="crime-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Location</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {liveCrimeMapData.map((record, index) => (
                <tr key={index}>
                  <td>{record.type}</td>
                  <td>{record.location}</td>
                  <td>{record.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <PieChart width={400} height={300}>
            <Pie
              data={getChartData(liveCrimeMapData)}
              cx={200}
              cy={150}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {getChartData(liveCrimeMapData).map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
          <LineChart width={500} height={300} data={getLineChartData(liveCrimeMapData)}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="crimeType" stroke="#8884d8" />
          </LineChart>
        </div>
      )}
    </div>
  );
};

export default CrimeDashboard;

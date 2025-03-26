import React, { useState } from "react";
import "./CrimeRecords.css";

const CrimeRecords = () => {
  const [records, setRecords] = useState([
    { type: "Theft", location: "New York", date: "2025-03-01" },
    { type: "Assault", location: "Los Angeles", date: "2025-03-05" },
    { type: "Fraud", location: "Chicago", date: "2025-03-10" },
    { type: "Burglary", location: "Houston", date: "2025-03-12" },
    { type: "Vandalism", location: "Miami", date: "2025-03-15" },
    { type: "Arson", location: "San Francisco", date: "2025-03-18" },
    { type: "Kidnapping", location: "Seattle", date: "2025-03-20" },
    { type: "Robbery", location: "Denver", date: "2025-03-22" },
    { type: "Homicide", location: "Boston", date: "2025-03-25" },
    { type: "Cybercrime", location: "Dallas", date: "2025-03-28" },
    { type: "Drug Offense", location: "Las Vegas", date: "2025-03-30" },
    { type: "Domestic Violence", location: "San Diego", date: "2025-04-02" },
    { type: "Car Theft", location: "Phoenix", date: "2025-04-05" },
    { type: "Identity Theft", location: "Philadelphia", date: "2025-04-07" }
  ]);
  const [search, setSearch] = useState("");

  const filteredRecords = records.filter(record =>
    record.type.toLowerCase().includes(search.toLowerCase()) ||
    record.location.toLowerCase().includes(search.toLowerCase()) ||
    record.date.includes(search)
  );

  return (
    <div className="crime-container">
      <h2>Crime Records</h2>
      <input
        type="text"
        placeholder="Search records..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <table className="crime-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Location</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.type}</td>
              <td>{record.location}</td>
              <td>{record.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrimeRecords;

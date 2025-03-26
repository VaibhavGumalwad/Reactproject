import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import CrimeDashboard from "./CrimeDashboard";
import CrimeRecords from "./CrimeRecords";
import Login from "./Login";
import "./HomePage.css";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="home-container">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/crimedashboard">Crime Dashboard</Link></li>
            <li><Link to="/crimerecords">Crime Records</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<h2>Welcome to the Crime Management System</h2>} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route 
            path="/crimedashboard" 
            element={isLoggedIn ? <CrimeDashboard /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/crimerecords" 
            element={isLoggedIn ? <CrimeRecords /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import CrimeDashboard from "./CrimeDashboard";
// import CrimeRecords from "./CrimeRecords";
// import Login from "./Login";
// import crimeBg from "../assets/Images/crime.jpg"
// import "./HomePage.css";

// const Home = () => {
//   return (
//     <Router>
//       <div className="home-container" style={{ backgroundImage: `url(${crimeBg})` }}>
//         <nav className="navbar">
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/crimedashboard">Crime Dashboard</Link></li>
//             <li><Link to="/crimerecords">Crime Records</Link></li>
//             <li><Link to="/login">Login</Link></li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/crimedashboard" element={<CrimeDashboard />} />
//           <Route path="/crimerecords" element={<CrimeRecords />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/" element={<h2>Welcome to the Crime Management System</h2>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default Home;

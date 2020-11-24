import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/navbar/navbar"
import './Homepage.css';

function Homepage() {
    const history = useHistory();



    return (
        <div className = "homepage container">
            <Navbar />
            <h1 className="title">WEATHER PANEL</h1>
        <div className = "container">

        </div>
        </div>
    )
}
export default Homepage;
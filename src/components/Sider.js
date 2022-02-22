import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sider(){

    return(
        <div className='main-sider'>
            <div className="home-link">
                <a href="/home" className="home">Home</a>
            </div>
            <div className="runs">
                <a href="/runs">Extra Runs</a>
            </div>
            <div className="bowlers">
                <a href="/bowlers">Top Bowlers</a>
            </div>
            <div className="stats">
                <a href="/stats">Match Stats</a>
            </div>
        </div>
    )
}
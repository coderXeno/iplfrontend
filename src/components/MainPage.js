import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
  
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
  );

export default function MainPage(){

    const [years,setYears] = useState([]);
    const [matches,setMatches] = useState([]);
    const [teamabbrs,setTeamAbbrs] = useState([]);
    const [matchesWon,setMatchesWon] = useState([]);

    var data = {};
    var newdata = {};

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/data/api/ipldata/')
            .then((res)=>{
                setYears([...years, ...res.data.map(obj => obj.year)])
                setMatches([...matches, ...res.data.map(obj => obj.matches)])
            })
            .catch((err)=>{
                console.log(err)
            }) 
    },[])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/data/api/iplmatcheswondata/')
            .then((res)=>{
                setTeamAbbrs([...teamabbrs,...res.data.map(obj => obj.teamabbr)])
                setMatchesWon([...matchesWon,...res.data.map(obj => obj.matcheswon)])
            })
            .catch((err)=>{
                console.log(err)
            }) 
    },[])

    data = {
        labels: years,
        datasets: [{
            label: 'Matches played per year from 2008-17',
            data: matches,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    newdata = {
        labels: teamabbrs,
        datasets: [{
            label: 'Matches won per team over 2008-17',
            data: matchesWon,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    /**throws a CORS cross origin error
        Access to XMLHttpRequest at 'http://127.0.0.1:8000/data/api/ipldata/' from origin 'http://localhost:3000' 
        has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

        So, to fix this I added django-cors-header package which helps list out a set of whitelisted
        urls that wont be affected by the cors crossorigin security policy.
    */

    return(
        <div className="main-page">
            <div className='main-content'>
                <div className='graph-1'>
                    {data && 
                        <Bar
                            data={data}
                            height={400}
                            width={600}
                            options={{
                                maintainAspectRatio: false,
                                responsive: true
                            }}
                        />
                    }
                </div>
                <div className='graph-2'>
                    <Bar
                        data={newdata}
                        height={400}
                        width={600}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true
                        }}
                    />
                </div>
            </div>
        </div>
    )
}